import Image from "next/image";
import Footer from '@/components/footer';
export default function Payment() {
    return (
        <main className="bg-slate-100 font-sans flex flex-col-reverse justify-center  lg:flex-row ">
            {/* Left Div */}
            <div className="flex flex-col justify-center w-screen">

                {/* Step 01 */}
                <div className="flex flex-col bg-white p-5 m-5 rounded-md ">
                    <div className="flex flex-row mb-8 justify-between">
                        <div className="flex flex-col"><h1 className="text-slate-900 text-xl font-bold">Billing Info</h1> <p className="text-slate-400 text-base ">Please enter your billing info</p></div>
                        <div><p className="text-slate-400 text-base ">Step 1 of 4</p></div>
                    </div>

                    <div>
                        <div className="flex flex-col lg:flex-row">
                            <label className="mr-8 rounded-md">
                                <h1>Name</h1>
                                <input type="text" placeholder="Your name" className="bg-slate-100 pr-20 pl-8 py-3 mt-3" />
                            </label>

                            <label>
                                <h1>Phone number</h1>
                                <input type="number" placeholder="Your name" className="bg-slate-100 pr-20 pl-8 py-3 mt-3" />
                            </label>
                        </div>

                        <div className="flex flex-col lg:flex-row mr-5 mt-5">
                            <label className="mr-8 rounded-md">
                                <h1>Address</h1>
                                <input type="text" placeholder=" Address" className="bg-slate-100 pr-20 pl-8 py-3 mt-3" />
                            </label>

                            <label>
                                <h1>Town / City</h1>
                                <input type="text" placeholder="Town or City" className="bg-slate-100 pr-20 pl-8 py-3 mt-3" />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Step 02 */}
                <div className="flex flex-col bg-white p-5 m-5 rounded-md mt-5">
                    <div className="flex flex-row mb-8 justify-between">
                        <div className="flex flex-col"><h1 className="text-slate-900 text-xl font-bold">Rental Info</h1> <p className="text-slate-400 text-base ">Please selectyour rental date</p></div>
                        <div><p className="text-slate-400 text-base ">Step 2 of 4</p></div>
                    </div>

                    <div>
                        {/* Pick up */}
                        <div>
                            <div className="flex flex-row mt-4">
                                <Image src={'/images/mark.png'} alt='' width={100} height={100} className="w-[20px] h-[20px] mr-2" />
                                <h1>Pick-Up</h1>
                            </div>
                            <div className="flex flex-col min-w-max lg:flex-row">
                                <label className="mr-8 rounded-md">
                                    <h1>Location</h1>
                                    <input type="text" placeholder="Select Your city" className="bg-slate-100 pr-20 pl-8 py-3 mt-3" />
                                </label>

                                <label>
                                    <h1>Date</h1>
                                    <input type="date" placeholder="Select your date" className="bg-slate-100 pr-20 pl-8 py-3 mt-3" />
                                </label>
                            </div>
                            <div className="mt-5">
                                <label className="mr-8 rounded-md">
                                    <h1>Time</h1>
                                    <input type="time" placeholder="Select your time" className="bg-slate-100 pr-20 pl-8 py-3 mt-3" />
                                </label>
                            </div>
                        </div>

                        {/* Drop off */}
                        <div className="mt-7">
                            <div className="flex flex-row mt-4 mb-3">
                                <Image src={'/images/mark.png'} alt='' width={100} height={100} className="w-[20px] h-[20px] mr-2" />
                                <h1 >Drop-Off</h1>
                            </div>
                            <div className="flex flex-col min-w-max lg:flex-row">
                                <label className="mr-8 rounded-md">
                                    <h1>Location</h1>
                                    <input type="text" placeholder="Select Your city" className="bg-slate-100 pr-20 pl-8 py-3 mt-3" />
                                </label>

                                <label>
                                    <h1>Date</h1>
                                    <input type="date" placeholder="Select your date" className="bg-slate-100 pr-20 pl-8 py-3 mt-3" />
                                </label>
                            </div>
                            <div className="mt-5">
                                <label className="mr-8 rounded-md">
                                    <h1>Time</h1>
                                    <input type="time" placeholder="Select your time" className="bg-slate-100 pr-20 pl-8 py-3 mt-3" />
                                </label>

                            </div>
                        </div>

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
                        <div><p className="text-slate-400 text-base ">Step 1 of 4</p></div>
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

                    <button className='bg-blue-600 px-6 py-4 rounded-md text-white font-semibold w-[140px] mt-5 mb-4'>Rent now</button>

                    <div className='mt-7'>
                        <Image src={'/images/Vr302.png'} alt='' width={100} height={100} className='w-[32px] h-[32px] ' />
                        <h1 className="text-slate-900 text-lg font-semibold mt-7">All your data are safe</h1>
                        <p className="text-slate-400 text-base ">We are using the most advanced security to provide you the best experience ever.</p>
                    </div>
                </div>
            </div>

            {/* right div */}
            <div className="flex flex-col bg-white p-5 m-5 rounded-md max-h-min">
                <div className="flex flex-col"><h1 className="text-slate-900 text-xl font-semibold">Rental Summary</h1> <p className="text-slate-400 text-base ">Prices may change depending on the length of the rental and the price of your rental car.</p></div>
                <div className='mt-5 flex flex-row'>
                    <Image src={'/images/View 1.png'} alt='' width={100} height={100} className='w-[132px] h-[108px] mr-5 ' />
                    <div>
                        <h1 className='text-slate-900 font-bold text-4xl'>NissanGT-R</h1>
                        <Image src={'/images/Reviews.png'} alt='' width={100} height={100} className='w-[220px] h-[24px] ' />
                    </div>
                </div>
                <hr className="m-6"/>
                <div className="flex flex-col justify-center px-2">
                    <div className="flex flex-row justify-between mb-2">
                        <h1 className="text-base text-slate-400">Subtotal</h1>
                        <p className="text-base text-slate-900 font-semibold">$80.00</p>
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                        <h1 className="text-base text-slate-400">Tax</h1>
                        <p className="text-base text-slate-900 font-semibold">$0</p>
                    </div>
                    <div className="flex flex-row bg-slate-100 p-5 justify-between items-center rounded-lg ">
                        <p className="text-base text-slate-400">Apply promo code</p>
                        <button className="text-base text-slate-900 font-semibold">Apply now</button>
                    </div>
                    <div className="flex flex-row justify-between mt-5">
                        <div>
                            <h1 className="text-xl text-slate-900 font-semibold ">Total Rental Price</h1>
                            <p className="text-base text-slate-400">Overall price and includes rental discounts</p>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-slate-900 ">$80.00</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}