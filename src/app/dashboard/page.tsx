import Dashside from "@/components/dashside";
import Image from 'next/image'

export default function Dashboard() {
    return (
        <main className="flex flex-col lg:flex-row bg-slate-100">
            <div className="none lg:flex">
                <Dashside />
            </div>
            {/* left */}
            <div className="p-5">
                <div className='bg-white p-6 flex flex-col rounded-md'>
                    <div className="flex flex-col mb-5">
                        <h1 className="text-slate-900">Details Rental</h1>
                        <Image src={'/images/Maps.png'} alt="" width={500} height={300} className="w-[486px] h-[272px]" />
                    </div>
                    <div className="flex flex-row items-center">
                        <div>
                            <Image src={'/images/Look.png'} alt="" width={100} height={100} className="w-[132px] h-[72px] mr-5" />
                        </div>
                        <div><h1 className="text-slate-900 text-2xl">NissanGT-R</h1><p>Sport car</p></div>
                        <div className="flex ml-20 text-slate-400 text-sm"><p>#9761</p></div>
                    </div>

                    {/* Pick up */}
                    <div className="bg-white w-full md: rounded-lg p-4">

                        <div className="flex items-center mb-4">
                            <Image src={'/images/mark.png'} alt="" width={10} height={10} className="w-4 h-4 mr-2" />
                            <h1 className="font-semibold text-sm">Pick-Up</h1>
                        </div>

                        <div className="flex  sm:flex-row justify-around gap-4">
                            <div>
                                <h1 className="font-extrabold text-base">Locations</h1>
                                <div className="py-2.5 text-slate-400 text-xs outline-none bg-white hover:bg-gray-50">
                                    <button type="button" id="dropdownToggle"
                                        className="py-2.5  text-slate-400 text-xs outline-none bg-white hover:bg-gray-50">
                                        Select your city
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-slate-300 w-[2px]"></div>

                            <div>
                                <h1 className="font-bold">Date</h1>
                                <div className="relative font-[sans-serif]">
                                    <button type="button" id="dropdownToggle"
                                        className="py-2.5 text-slate-400 text-xs outline-none bg-white hover:bg-gray-50">
                                        Select your date
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-slate-300 w-[2px]"></div>

                            <div>
                                <h1 className="font-bold">Time</h1>
                                <div className="relative font-[sans-serif]">
                                    <button type="button" id="dropdownToggle"
                                        className="py-2.5 text-slate-400 text-xs outline-none bg-white hover:bg-gray-50">
                                        Select your time
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Drop off */}
                    <div className="bg-white w-full md: rounded-lg p-4">

                        <div className="flex items-center mb-4">
                            <Image src={'/images/mark.png'} alt="" width={10} height={10} className="flex items-center mb-4 opacity-15" />
                            <h1 className="font-semibold text-sm">Drop-Off</h1>
                        </div>

                        <div className="flex sm:flex-row justify-around gap-4">
                            <div>
                                <h1 className="font-extrabold text-base">Locations</h1>
                                <div className="relative font-[sans-serif]">
                                    <button type="button" id="dropdownToggle"
                                        className="py-2.5 text-slate-400 text-xs outline-none bg-white hover:bg-gray-50">
                                        Select your city
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-slate-300 w-[2px]"></div>

                            <div>
                                <h1 className="font-bold">Date</h1>
                                <div className="relative font-[sans-serif]">
                                    <button type="button" id="dropdownToggle"
                                        className=" py-2.5  text-slate-400 text-xs outline-none bg-white hover:bg-gray-50">
                                        Select your date
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-slate-300 w-[2px]"></div>

                            <div>
                                <h1 className="font-bold">Time</h1>
                                <div className="relative font-[sans-serif]">
                                    <button type="button" id="dropdownToggle"
                                        className="py-2.5  text-slate-400 text-xs outline-none bg-white hover:bg-gray-50">
                                        Select your time
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* total */}
                    <div className="flex flex-row justify-between mt-5 p-5">
                        <div>
                            <h1 className="text-xl text-slate-900 font-semibold ">Total Rental Price</h1>
                            <p className="text-base text-slate-400">Overall price and includes rental discounts</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 ">$80.00</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}