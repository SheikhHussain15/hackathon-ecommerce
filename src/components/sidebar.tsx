export default function Sidebar() {
    return (
        <>
            {/* SideBar */}
            <div className="bg-white w-[360px] h-full p-3">
                {/* List 01 */}
                <div className="mb-4">
                    <h1 className="text-slate-400 mb-2 ml-2">Type</h1>
                    <ul>
                        <li className='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
                            <div className="flex items-center">
                                <input id="checkbox1" type="checkbox" className="hidden peer" checked />
                                <label id="checkbox1"
                                    className="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                                Sports <span className="text-slate-400"> (10)</span>
                            </div>
                        </li>
                        <li className='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
                            <div className="flex items-center">
                                <input id="checkbox1" type="checkbox" className="hidden peer" checked />
                                <label id="checkbox1"
                                    className="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                                SUV <span className="text-slate-400"> (12)</span>
                            </div>
                        </li>
                        <li className='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
                            <div className="flex items-center">
                                <input id="checkbox3" type="checkbox" className="hidden peer" />
                                <label id="checkbox3"
                                    className="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                                MVP <span className="text-slate-400"> (16)</span>
                            </div>
                        </li>
                        <li className='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
                            <div className="flex items-center">
                                <input id="checkbox4" type="checkbox" className="hidden peer" />
                                <label id="checkbox4"
                                    className="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                                Sedan <span className="text-slate-400"> (20)</span>
                            </div>
                        </li>
                        <li className='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
                            <div className="flex items-center">
                                <input id="checkbox4" type="checkbox" className="hidden peer" />
                                <label id="checkbox4"
                                    className="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                                Coupe <span className="text-slate-400"> (14)</span>
                            </div>
                        </li>
                        <li className='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
                            <div className="flex items-center">
                                <input id="checkbox4" type="checkbox" className="hidden peer" />
                                <label id="checkbox4"
                                    className="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                                Hatchback <span className="text-slate-400"> (14)</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* List 02 */}
                <div className="mb-5">
                    <h1 className="text-slate-400 ml-2 mb-2">capacity</h1>
                    <ul>
                        <li className='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
                            <div className="flex items-center">
                                <input id="checkbox1" type="checkbox" className="hidden peer" checked />
                                <label id="checkbox1"
                                    className="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                                2 Person <span className="text-slate-400"> (10)</span>
                            </div>
                        </li>
                        <li className='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
                            <div className="flex items-center">
                                <input id="checkbox2" type="checkbox" className="hidden peer" />
                                <label id="checkbox2"
                                    className="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                                4 Person <span className="text-slate-400"> (14)</span>
                            </div>
                        </li>
                        <li className='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
                            <div className="flex items-center">
                                <input id="checkbox3" type="checkbox" className="hidden peer" />
                                <label id="checkbox3"
                                    className="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                                6 Person <span className="text-slate-400"> (12)</span>
                            </div>
                        </li>
                        <li className='py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer'>
                            <div className="flex items-center">
                                <input id="checkbox1" type="checkbox" className="hidden peer" checked />
                                <label id="checkbox1"
                                    className="relative mr-3 flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-600 border rounded overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check" data-original="#000000" />
                                    </svg>
                                </label>
                                8 Person <span className="text-slate-400"> (16)</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-slate-400 mb-2 ml-4">Price</h1>
                    <div className="bg-gray-300 rounded-full w-11/12 h-2.5 max-w-4xl mx-auto mt-4">
                        <div className="w-1/2 h-full rounded-full bg-blue-600 flex items-center relative">
                            <span className="absolute text-xs right-0.5 bg-white w-3 h-3 rounded-full"></span>
                        </div>
                    </div>
                    <h1 className="ml-4 mt-2">Max.$100.00</h1>
                </div>
            </div>
        </>
    ) 
}