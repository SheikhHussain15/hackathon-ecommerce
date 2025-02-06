'use client'
import { Car } from '../../../types/cars';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation'; 

const CartPage = () => {
    const [cartItems, setCartItems] = useState<Car[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);


    const handleRemove = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'blue',
            cancelButtonColor: 'red',
            confirmButtonText: 'Yes, remove it.',
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire('Removed!', 'Item has been removed.', 'success');
            }
        });
    };

    const handleQuantityChange = (id: number, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: number) => {
        const car = cartItems.find((item) => item._id === id);
        if (car && car.inventory < 0) {
            handleQuantityChange(id, car.inventory + 1);
        }
    };
    const handleDecrement = (id: number) => {
        const car = cartItems.find((item) => item._id === id);
        if (car && car.inventory > 1) {
            handleQuantityChange(id, car.inventory - 1);
        }
    };

    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.pricePerDay * item.inventory, 0);
    };
    const router = useRouter();
    const handleProceed = () => {
        Swal.fire({
            title: 'Proceed to checkout?',
            text: 'Please review your cart before checkout',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'blue',
            cancelButtonColor: 'red',
            confirmButtonText: 'Yes, proceed',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Success', 'Your order has been successfully processed',
                    'success');

                router.push('/checkout')
                setCartItems([]);
            }
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
                    {cartItems.map((item) => (
                        <div key={item._id} className="flex flex-col md:flex-row justify-between items-center border-b pb-4">
                            <div className="flex items-center gap-4">
                                {item.image && (
                                    <Image src={urlFor(item.image).url()} alt='mage' width={500} height={500}
                                        className="w-24 h-24 object-cover rounded"
                                    />
                                )}
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">${item.pricePerDay}/day</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => handleDecrement(item._id)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">-</button>
                                <span className="px-4 py-1 border rounded">{item.inventory}</span>
                                <button onClick={() => handleIncrement(item._id)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded">+</button>
                            </div>
                            <button onClick={() => handleRemove(item._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
                        </div>
                    ))}
                    <div className="text-right font-bold text-xl">Total: ${calculatedTotal()}</div>
                    <button onClick={handleProceed} className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
