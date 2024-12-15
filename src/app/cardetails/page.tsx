import Sidebar from "@/components/sidebar";
import Image from 'next/image';
import Cards3 from "@/components/cards3";
import Footer from "@/components/footer";
import Reviews from "@/components/reviews";

export default function Cardetails() {
    return (
        <div>
            <main className="flex flex-col md:flex-row font-sans p-5 gap-5">
                {/* Sidebar */}
                <div className="hidden md:flex w-auto">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="p-5 flex flex-col lg:flex-row bg-slate-100 gap-5">
                        {/* Left Section */}
                        <div className="flex flex-col items-center lg:items-start">
                            <div
                                className="bg-blue-600 w-full lg:w-[462px] h-[360px] rounded-md py-5 px-4 bg-center bg-cover"
                                style={{ backgroundImage: 'url(/images/BG2.png)' }}>
                                <div className="w-full lg:w-3/5">
                                    <h1 className="text-white text-xl lg:text-3xl font-bold mb-5">
                                        Sports car with the best design and acceleration
                                    </h1>
                                    <p className="text-white text-sm lg:text-base mt-2">
                                        Safety and comfort while driving a futuristic and elegant sports car
                                    </p>
                                </div>
                            </div>

                            {/* Image Thumbnails */}
                            <div className="flex justify-between mt-5 gap-3">
                                <Image
                                    src={'/images/View 1.png'}
                                    alt="View1"
                                    width={100}
                                    height={100}
                                    className="h-[124px] w-[148px] object-cover"/>
                                <Image src={'/images/View 2.png'} alt="View 2" width={100} height={100} className="h-[124px] w-[148px] object-cover"/>
                                <Image
                                    src={'/images/View 3.png'}
                                    alt="View 3"
                                    width={100}
                                    height={100}
                                    className="h-[124px] w-[148px] object-cover"/>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="bg-white w-full lg:w-[462px] rounded-md p-8 flex flex-col justify-between">
                            <div>
                                <h1 className="text-2xl lg:text-3xl font-bold">NissanGT-R</h1>
                                <Image
                                    src={'/images/Reviews.png'}
                                    alt="Reviews"
                                    width={100}
                                    height={100}
                                    className="mt-3 h-[24px] w-auto"/>
                               <p className="text-slate-400 text-sm lg:text-base mt-5">
    NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.
</p>

                                {/* Specifications */}
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <div className="flex flex-col text-slate-800">
                                        <span className="text-slate-400">TypeCar</span>
                                        <span>Sports</span>
                                    </div>
                                    <div className="flex flex-col text-slate-800">
                                        <span className="text-slate-400">Capacity</span>
                                        <span>2 Person</span>
                                    </div>
                                    <div className="flex flex-col text-slate-800">
                                        <span className="text-slate-400">Steering</span>
                                        <span>Manual</span>
                                    </div>
                                    <div className="flex flex-col text-slate-800">
                                        <span className="text-slate-400">Gasoline</span>
                                        <span>70L</span>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing and Rent Button */}
                            <div className="mt-10">
                                <h1 className="text-2xl font-bold mb-3">
                                    $80.00/<span className="text-lg font-bold text-slate-400">days</span>
                                </h1>
                                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Reviews and Cards Section */}
                    <Reviews />
                    <Cards3 />
                </div>
            </main>
            <Footer />
        </div>
    );
}
