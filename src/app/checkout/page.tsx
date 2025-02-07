"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import { Car } from "../../../types/cars";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function CheckOut() {
    const [cartItems, setCartItems] = useState<Car[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        email: "",
    });

    const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCartItems(getCartItems());
            const appliedDiscount = localStorage.getItem("appliedDiscount");
            if (appliedDiscount) {
                setDiscount(Number(appliedDiscount));
            }
        }
    }, []);

    const subTotal = cartItems.reduce((total, item) => total + item.pricePerDay * item.inventory, 0);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    const validateForm = () => {
        const errors: Record<string, boolean> = {};
        Object.keys(formValues).forEach((key) => {
            errors[key] = !formValues[key as keyof typeof formValues];
        });
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handlePlaceOrder = () => {
        if (validateForm()) {
            if (typeof window !== "undefined") {
                localStorage.removeItem("appliedDiscount");
            }
            setOrderPlaced(true);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <Link href="/cart" className="hover:text-black">Cart</Link>
                    <CgChevronRight className="w-4 h-4" />
                    <span className="text-black font-semibold">Checkout</span>
                </nav>

                {orderPlaced ? (
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <AiOutlineCheckCircle className="text-green-500 w-12 h-12 mx-auto" />
                        <h2 className="text-lg font-semibold mt-4">Order Placed Successfully!</h2>
                        <p className="text-gray-500">Thank you for your order. We will contact you soon.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-4">Billing Details</h2>
                            {Object.keys(formValues).map((key) => (
                                <div key={key} className="mb-4">
                                    <input
                                        id={key}
                                        value={formValues[key as keyof typeof formValues]}
                                        onChange={handleInputChange}
                                        className={`border p-2 w-full rounded ${formErrors[key] ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
                                    />
                                    {formErrors[key] && <p className="text-red-500 text-sm">This field is required</p>}
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                                        <div className="w-16 h-16 rounded overflow-hidden">
                                            {item.image && (
                                                <Image
                                                    src={urlFor(item.image).url()}
                                                    alt={item.name}
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full"
                                                />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-medium">{item.name}</h3>
                                            <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                                        </div>
                                        <p className="text-sm font-medium">${item.pricePerDay * item.inventory}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-500">Your cart is empty.</p>
                            )}
                            <div className="text-right pt-4">
                                <p className="text-sm">Subtotal: <span className="font-medium">${subTotal}</span></p>
                                <p className="text-sm">Discount: <span className="font-medium">-${discount}</span></p>
                                <p className="text-lg font-semibold">Total: ${(subTotal - discount).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                )}
                
                {!orderPlaced && (
                    <button
                        onClick={handlePlaceOrder}
                        className="mt-6 w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 disabled:bg-gray-400"
                        disabled={!Object.values(formValues).every((val) => val.trim() !== "")}
                    >
                        Place Order
                    </button>
                )}
            </div>
        </div>
    );
}