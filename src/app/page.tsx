import Image from "next/image";
import Cards from '@/components/cards';
import Footer from "@/components/footer";
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <main className="bg-slate-100 font-sans">
      <section className="flex flex-col md:flex-row justify-center p-8 gap-4">

        <div className="bg-blue-400 w-full md:w-[640px] h-[360px] rounded-md py-5 px-4 bg-center" style={{ backgroundImage: 'url(/images/BG1.png)' }}>

          <div className="w-full h-full">

            <h1 className="text-white text-2xl md:text-3xl font-bold">The Best Platform <br />  for Car Rental</h1>
            <p className="text-white text-sm md:text-base mt-2">Ease of doing a car rental safely and reliably, Of course at a low price</p>

            <Link href={'/Category'}><button className="bg-blue-700 px-5 py-3 rounded-sm text-white mt-4">Rental Car</button></Link>
          </div>

        </div>


        <div className="bg-blue-600 w-full md:w-[640px] h-[360px] rounded-md py-5 px-4 bg-center" style={{ backgroundImage: 'url(/images/BG2.png)' }}>

          <div className="w-full h-full" >

            <h1 className="text-white text-2xl md:text-3xl font-bold">Easy way to rent a <br /> car at a low prices</h1>
            <p className="text-white text-sm md:text-base mt-2">Providing cheap car rental services and safe and comfortable facilities</p>

            <button className="bg-blue-400 px-5 py-3 rounded-sm text-white mt-4">Rental Car</button>
          </div>

        </div>
      </section>


      <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-6 gap-4 lg:justify-around">

        {/* left */}
        <div className="bg-white w-full md:w-[582px] rounded-lg p-4">

          <div className="flex items-center mb-4">
            <Image src={'/images/mark.png'} alt="" width={10} height={10} className="w-4 h-4 mr-2" />
            <h1 className="font-semibold text-sm">Pick-Up</h1>
          </div>

          <div className="flex sm:flex-row justify-around gap-4">
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
        <div className="flex bg-blue-600 rounded-md justify-center items-center w-[60px] h-[60px]">
          <Image src={'/images/Switch.png'} alt="" width={100} height={100} className="w-6 h-6 " />
        </div>

        {/* right */}
        <div className="bg-white w-full md:w-[582px] rounded-lg p-4">

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

      <section>
        <Cards />
      </section>    
    </main>
    <Footer />
    </>

  );
}
