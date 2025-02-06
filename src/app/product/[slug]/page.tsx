import { client } from "@/sanity/lib/client";
import { Car } from "../../../../types/cars";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


interface CarPageProps {
    params : Promise<{ slug : string }>;
}

async function getCar(slug : string): Promise<Car> {
    return client.fetch(
        groq`*[_type == 'car' && slug.current == $slug][0] {
        _id,
        name,
        _type,
        type,
        image,
        type,
        transmission,
        pricePerDay,
        brand,
        fuelCapacity,
        seatingCapacity,
        inventory,

        }`, 
        {slug}
    );
}

export default async function CarPage({params}: CarPageProps ){
    const {slug} = await params;
    const car = await getCar(slug)

    return(
        <div className="flex flex-col m-auto items-center">
            <div className='bg-gray-100 mx-48 mt-20 flex flex-row rounded-lg'>
                <div className="w-4/5 h-[290px] p-12 rounded-md">
                    {car.image && (
                        <Image src={urlFor(car.image).url()} alt={car.name} width={1000} height={1000}
                         className="h-full w-[400px] bg-cover"/>
                    )}
                </div>
                <div className='flex flex-col w-1/2 right-1 py-6'>
                    <h1 className='text-4xl font-bold mb-5'>
                        {car.name} <br />
                        <span className="text-slate-400 text-xl">{car.type}</span>
                    </h1>
                    <p className="text-xl font-sans font-semibold text-slate-900">
                        Seating capacity: <span className='font-light font-mono text-slate-600'>{car.seatingCapacity}</span> <br />
                        Fuel capacity:<span className='font-light font-mono text-slate-600'> {car.fuelCapacity}</span> <br />
                        Transmission:<span className='font-light font-mono text-slate-600'> {car.transmission}</span> <br />
                    </p>

                    <p>
                        {car.brand}
                    </p>
                </div>
            </div>
            <div className="w-[54%] text-white font-semibold font-serif text-2xl">
                <button className="bg-blue-700 h-14 w-full rounded-b-md">
                    Rent Now
                </button>
            </div>
        </div>
    )
}