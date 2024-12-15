import Sidebar from '@/components/sidebar';
import Image from 'next/image'
import Cards2 from '@/components/cards2'
import Footer from '@/components/footer';

export default function Category() {
    return (
        <>
        <main className="bg-slate-100 font-sans flex flex-row ">
            <div className='hidden md:flex'><Sidebar /></div>

            <div className='w-full mb-5'>
                <section className="flex flex-col md:flex-row justify-between items-center px-3 md:px-7 py-5 gap-3 m-">

                    {/* left */}
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

                    {/* between */}
                    <div className=" sm:flex bg-blue-600 rounded-md justify-center items-center w-[40px] h-[40px]">
                        <Image src={'/images/Switch.png'} alt="" width={100} height={100} className="w-[50px] h-[40px] " />
                    </div>

                    {/* right */}
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
                </section>

                <Cards2 />
            </div>
        </main>
            <Footer />
        </>
    )
}