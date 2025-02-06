'use client';

import React, { useEffect, useState } from "react";
import { Car } from "../../../types/cars";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { CgChevronRight } from "react-icons/cg";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

const CheckOut = () => {
    const [cartItems, setCartItems] = useState<Car[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        zipCode: '',
        city: '',
    });

    const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

    useEffect(() => {
        setCartItems(getCartItems());
        const appliedDiscount = localStorage.getItem('appliedDiscount');
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, []);

    const subTotal = cartItems.reduce((total, item) => total + item.pricePerDay * item.inventory, 0);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors: Record<string, boolean> = {};
        Object.keys(formValues).forEach((key) => {
            if (!formValues[key as keyof typeof formValues]) {
                errors[key] = true;
            }
        });
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handlePlaceOrder = async () => {
        if (!validateForm()) return;

        localStorage.removeItem('appliedDiscount');

        const orderData = {
            _type : 'order',
            ...formValues,
            cartItems: cartItems.map(item => ({
                _type: 'reference',
                _ref: item._id
            })),
            total: subTotal - discount,
            discount: discount,
            orderDate: new Date().toISOString(),
        };

        try {
            await client.create(orderData);
            
            Swal.fire("Success!", "Your order has been placed.", "success");
        } catch (error) {
            Swal.fire("Error", "Something went wrong. Try again!", "error");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-6">
                <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <Link href="/cart" className="hover:underline">Cart</Link>
                    <CgChevronRight className="w-4 h-4" />
                    <span className="text-black">Checkout</span>
                </nav>
                
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                        {cartItems.length > 0 ? cartItems.map((item) => (
                            <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                                <div className="w-16 h-16 rounded overflow-hidden">
                                    {item.image && <Image src={urlFor(item.image).url()} alt="image" width={50} height={50} className="object-cover w-full h-full" />}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium">{item.name}</h3>
                                    <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                                </div>
                                <p className="font-semibold">${item.pricePerDay * item.inventory}</p>
                            </div>
                        )) : <p className="text-xs font-medium">No items in cart</p>}

                        <div className="text-right pt-4">
                            <p className="text-sm">SubTotal: <span className="font-medium">${subTotal}</span></p>
                            <p className="text-sm">Discount: <span className="font-medium">${discount}</span></p>
                            <p className="text-lg font-semibold">Total: ${subTotal - discount}</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.keys(formValues).map((key) => (
                                <div key={key}>
                                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                                    <input
                                        id={key}
                                        placeholder={`Enter your ${key}`}
                                        value={formValues[key as keyof typeof formValues]}
                                        onChange={handleInputChange}
                                        className={`mt-1 w-full p-2 border rounded-lg ${formErrors[key] ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {formErrors[key] && <p className="text-xs text-red-500">{key.replace(/([A-Z])/g, ' $1').trim()} is required.</p>}
                                </div>
                            ))}
                        </div>
                        <button onClick={handlePlaceOrder} className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;