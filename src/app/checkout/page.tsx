"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import { Car } from "../../../types/cars";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";

export default function CheckOut() {
    const [cartItems, setCartItems] = useState<Car[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        email: "",
    });

    const [formErrors, setFormErrors] = useState<Record<keyof typeof formValues, boolean>>();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCartItems(getCartItems());
            const appliedDiscount = localStorage.getItem("appliedDiscount");
            if (appliedDiscount) {
                setDiscount(Number(appliedDiscount));
            }
        }
    }, []);

    const subTotal = cartItems.reduce(
        (total, item) => total + item.pricePerDay * item.inventory,
        0
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors: Record<keyof typeof formValues, boolean> = Object.keys(formValues).reduce(
            (acc, key) => {
                acc[key as keyof typeof formValues] = !formValues[key as keyof typeof formValues];
                return acc;
            },
            {} as Record<keyof typeof formValues, boolean>
        );

        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };


    const handlePlaceOrder = () => {
        if (validateForm()) {
            if (typeof window !== "undefined") {
                localStorage.removeItem("appliedDiscount");
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mt-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 py-4">
                        <Link href="/cart" className="text-[#666666] hover:text-black transition text-sm">
                            Cart
                        </Link>
                        <CgChevronRight className="w-4 h-4 text-[#666666]" />
                        <span className="text-sm">Checkout</span>
                    </nav>
                </div>
            </div>

            {Object.keys(formValues).map((key) => (
                <div key={key}>
                    <input
                        id={key}
                        value={formValues[key as keyof typeof formValues]}
                        onChange={handleInputChange}
                        className="border rounded p-2 w-full"
                    />
                    {formErrors?.[key as keyof typeof formValues] && (
                        <p className="text-red-500 text-sm">This field is required</p>
                    )}
                </div>
            ))}


            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white border rounded-lg p-6 space-y-4">
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
                    <button
                        onClick={handlePlaceOrder}
                        className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}
