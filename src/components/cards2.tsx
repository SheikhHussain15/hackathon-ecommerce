'use client';

import React, { useEffect, useState } from "react";
import { Car } from "../../types/cars";
import { client } from "@/sanity/lib/client";
import { nine } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";

const Cards2 = () => {
  const [car, setCar] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchcar() {
      try {
        const fetchedCar: Car[] = await client.fetch(nine);
        setCar(fetchedCar);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error("Error fetching car data:", err);
        setError("Failed to load car data. Please try again later.");
      }
    }
    fetchcar();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, car :Car) => {
    e.preventDefault()
    Swal.fire({
      position: 'top-right',
      icon : 'success',
      title : `${car.name} added to cart`,
      showConfirmButton : false,
      timer : 1000,
    })
    
    addToCart(car)
  }

  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen p-6 text-black">
        <h2 className="text-2xl font-bold text-red-500">{error}</h2>
      </div>
    );}

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Cars</h2>
        <button className="text-blue-600 hover:underline">View All</button>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {car.map((car) => (
          <div key={car._id} className="border rounded-lg shadow-md p-4 bg-white">
            <Link href={`/product/${car.slug.current}`}>
            <div className="mt-4 mb-20">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-sm text-gray-500">{car.type}</p>
            </div>

            <div className="relative w-full h-40 mt-20">
              {car.image && (
                <Image src={urlFor(car.image).url()} alt={car.name} width={300} height={300} />
              )}
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <Image src={'/card/gas-station.png'} alt="Gas Station Icon" width={20} height={20} />
                <h1 className="text-slate-400 ml-1">{car.fuelCapacity}</h1>
              </div>
              <div className="flex items-center">
                <Image src={'/card/circle.png'} alt="Transmission Icon" width={20} height={20} />
                <h1 className="text-slate-400 ml-1">{car.transmission}</h1>
              </div>
              <div className="flex items-center">
                <Image src={'/card/profile-2user.png'} alt="Passenger Space Icon" width={20} height={20} />
                <h1 className="text-slate-400 ml-1">{car.seatingCapacity}</h1>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-blue-500 font-bold">{car.pricePerDay}</p>
              </div>

              {/* new button */}
              <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out
              " onClick={(e) => handleAddToCart(e, car)}>
                Add To Cart 
              </button>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Show More Cars
        </button>
      </div>
    </div>
  );
}
export default Cards2