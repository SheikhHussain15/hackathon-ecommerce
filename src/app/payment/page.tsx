"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import { Car } from "../../../types/cars";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "@/components/footer";

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
        <>
        <nav className="flex justify-center gap-2 text-md text-gray-600 mb-6">
            <Link href="/cart" className="hover:text-black">Cart</Link>
            <CgChevronRight className="w-4 h-4" />
            <span className="text-black font-semibold">Checkout</span>
        </nav>
            <main className="bg-slate-100 font-sans flex flex-col-reverse justify-center  lg:flex-row ">

                {/* Left Div */}
                <div className="flex flex-col justify-center w-screen">

                    {/* Step 01 */}
                    <div className="flex flex-col bg-white p-5 m-5 rounded-md">
                        <div className="flex flex-row mb-8 justify-between">
                            <div className="flex flex-col"><h1 className="text-slate-900 text-xl font-bold">Billing Info</h1> <p className="text-slate-400 text-base ">Please enter your billing info</p></div>
                            <div><p className="text-slate-400 text-base ">Step 1 of 4</p></div>
                        </div>
                        <div className="flex flex-col">
                            {Object.keys(formValues).map((key) => (
                                <div key={key} className=" flex flex-col mb-4">
                                    <input
                                        id={key}
                                        value={formValues[key as keyof typeof formValues]}
                                        onChange={handleInputChange}
                                        className={`w-full rounded ${formErrors[key] ? 'border-red-500' : 'border-gray-300'} bg-slate-100 pr-20 pl-8 py-3 mt-3`}
                                        placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
                                    />
                                    {formErrors[key] && <p className="text-red-500 text-sm">This field is required</p>}
                                </div>

                            ))}
                        </div>
                    </div>


                    {/* Step 03 */}
                    <div className="flex flex-col bg-white p-5 m-5 rounded-md">
                        <div className="flex flex-row mb-8 justify-between">
                            <div className="flex flex-col"><h1 className="text-slate-900 text-xl font-bold">Payment Method </h1> <p className="text-slate-400 text-base ">Please enter your Payment Method</p></div>
                            <div><p className="text-slate-400 text-base ">Step 3 of 4</p></div>
                        </div>

                        <div className='bg-slate-100 w-[95%] rounded-md  mx-auto p-5'>
                            <div className='flex flex-row items-center justify-between mb-4 '>
                                <div className='flex flex-row items-center'>
                                    <Image src={'/images/mark.png'} alt='' width={100} height={100} className='w-5 h-5 mr-3' />
                                    <h1>Credit Card</h1>
                                </div>
                                <div>
                                    <Image src={'/images/Visa.png'} alt='' width={100} height={100} />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-max lg:flex-row">
                                <label className="mr-8 rounded-md ">
                                    <h1>Card Number</h1>
                                    <input type="number" placeholder="Card number" className="bg-white pr-20 pl-8 py-3 mt-3 rounded-md" />
                                </label>

                                <label>
                                    <h1>Expiration Date</h1>
                                    <input type="date" placeholder="Your name" className="bg-white pr-20 pl-8 py-3 mt-3 rounded-md" />
                                </label>
                            </div>

                            <div className="flex flex-col min-w-max lg:flex-row">
                                <label className="mr-8 rounded-md">
                                    <h1>Card Holder</h1>
                                    <input type="text" placeholder="Card holder" className="bg-white pr-20 pl-8 py-3 mt-3 rounded-md" />
                                </label>

                                <label>
                                    <h1>CVC</h1>
                                    <input type="text" placeholder="CVC" className="bg-white pr-20 pl-8 py-3 mt-3 rounded-md" />
                                </label>
                            </div>
                        </div>

                        {/* PayPal */}
                        <div className='bg-slate-100 w-[95%] rounded-md  mx-auto p-5 mt-5'>
                            <label className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-between items-center'>
                                    <input type='checkbox' className='mr-4' />
                                    <h1>PayPal</h1>
                                </div>
                                <div>
                                    <Image src={'/images/PayPal.png'} alt='' width={100} height={100} className='w-[100px] h-[20px] mr-3' />
                                </div>
                            </label>
                        </div>

                        {/* Bitcoin */}
                        <div className='bg-slate-100 w-[95%] rounded-md  mx-auto p-5 mt-5'>
                            <label className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row justify-between items-center'>
                                    <input type='checkbox' className='mr-4' />
                                    <h1>Bitcoin</h1>
                                </div>
                                <div>
                                    <Image src={'/images/Bitcoin.png'} alt='' width={100} height={100} className='w-[94px] h-[20px] mr-3' />
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* step 04 */}
                    <div className="flex flex-col bg-white p-5 m-5 rounded-md ">
                        <div className="flex flex-row mb-8 justify-between">
                            <div className="flex flex-col"><h1 className="text-slate-900 text-xl font-bold">Confirmation</h1> <p className="text-slate-400 text-base ">We are getting to the end. Just few clicks and your rental is ready!</p></div>
                            <div><p className="text-slate-400 text-base ">Step 3 of 3</p></div>
                        </div>

                        <div className='bg-slate-100 w-[98%] rounded-md  mx-auto p-5 mt-5'>
                            <label className='flex flex-row items-center'>
                                <input type='checkbox' className='mr-4' />
                                <h2>I agree with sending an Marketing and newsletter emails. No spam, promissed!</h2>
                            </label>
                        </div>
                        <div className='bg-slate-100 w-[98%] rounded-md  mx-auto p-5 mt-5'>
                            <label className='flex flex-rowitems-center'>
                                <input type='checkbox' className='mr-4' />
                                <h2>I agree with our terms and conditions and privacy policy.</h2>
                            </label>
                        </div>


                        {/* Step 4: Confirmation */}
                        <div className="flex flex-col bg-white rounded-md">
                            {orderPlaced ? (
                                <p className="text-green-500 font-semibold">Order Placed Successfully!</p>
                            ) : (
                                <button onClick={handlePlaceOrder} className='bg-blue-600 px-6 py-4 rounded-md text-white font-semibold w-[140px] mt-5 mb-4'>Rent now</button>
                            )}
                        </div>

                        <div className='mt-7'>
                            <Image src={'/images/Vr302.png'} alt='' width={100} height={100} className='w-[32px] h-[32px] ' />
                            <h1 className="text-slate-900 text-lg font-semibold mt-7">All your data are safe</h1>
                            <p className="text-slate-400 text-base ">We are using the most advanced security to provide you the best experience ever.</p>
                        </div>
                    </div>
                </div>

                {/* right div */}
                <div className="bg-white p-6 rounded-lg shadow-md h-max mt-5">
                    <div className="flex flex-col mb-7"><h1 className="text-slate-900 text-xl font-semibold">Rental Summary</h1> <p className="text-slate-400 text-base ">Prices may change depending on the length of the rental and the price of your rental car.</p></div>
                    <hr />
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                                <div className="w-[150px] h-[60px] rounded overflow-hidden">
                                    {item.image && (
                                        <Image
                                            src={urlFor(item.image).url()}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                            className="object-cover w-max h-[45px]"
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
                    <div className="flex flex-col  px-2">
                        <div className="flex flex-col justify-center px-2"><p className="text-base text-slate-400  mt-5 mb-3">Subtotal: <span className="text-base text-slate-900 font-semibold" >${subTotal}</span></p></div>
                        <div className="flex flex-row justify-between mb-2"><p className="text-base text-slate-400 justify-around mb-5">Discount: <span className="text-base text-slate-900 font-semibold">-${discount}</span></p></div>
                        <div className="flex flex-row justify-between mt-5"><p className="text-xl text-slate-900 font-semibold ">Total: ${(subTotal - discount).toFixed(2)}</p></div>
                    </div>
                </div>



            </main>
            <Footer />
        </>
    )
}