import Image from 'next/image';
export default function Reviews(){
    return(
        <div className="p-3 ">
            <div className="flex flex-row"><h1 className="text-xl font-bold m-5">Reviews</h1><div className="flex bg-blue-700 w-8 h-9 m-5 rounded-md text-white items-center justify-center">13</div></div>

            <div className='flex flex-row mb-5 ml-2'>
                <div className='w-10 h-10 mr-2'>
                <Image src='/images/Profill.png' alt='' width={100} height={100} />
                </div>
                <div className='flex flex-col w-11/12'>
                <h1 className="text-xl text-slate-800">Alex Stantngon</h1>
                <h2 className='text-lg text-slate-400'>CEO at bukalpak</h2>
                <p className='text-base text-slate-500'>We are very happy with the service from the MORENT App. Morent has a low price and also 
                    a large variety of cars with good and comfortable facilities. In addition, 
                    the service provided by the officers is also very friendly and very polite.
                </p>
                </div>
            </div>

            <div className='flex flex-row mb-5 ml-2'>
                <div className='w-10 h-10 mr-2'>
                <Image src='/images/Profill (1).png' alt='' width={100} height={100} />
                </div>
                <div className='flex flex-col w-11/12'>
                <h1 className="text-xl text-slate-800">Skylar Dias</h1>
                <h2 className='text-lg text-slate-400'>CEO at bukalpak</h2>
                <p className='text-base text-slate-500'>We are very happy with the service from the MORENT App. Morent has a low price and also 
                    a large variety of cars with good and comfortable facilities. In addition, 
                    the service provided by the officers is also very friendly and very polite.
                </p>
                </div>
            </div>
            
        </div>
    )
}