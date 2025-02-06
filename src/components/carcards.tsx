
// import Image from "next/image";
// import Link from 'next/link';
// import { Car } from "../../types/cars";

// export default function CarsCard({ _id,name,transmission,type,brand,fuelCapacity,originalPrice,pricePerDay,seatingCapacity,image}: Car) {
//   return (
//     <div className="border rounded-lg shadow-md p-4 bg-white">
//       {/* Name */}
//       <div className="mt-4">
//         <h3 className="text-lg font-semibold">{name}</h3>
//         <p className="text-sm text-gray-500">{type}</p>
//       </div>

//       {/* Image */}
//       <div className="relative w-full h-40">
//         <Image src={} alt={name} fill className="object-contain rounded-md" />
//       </div>

//       {/* Details */}
//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center">
//           <Image src={'/cars/gas-station.png'} alt="Gas Station Icon" width={20} height={20} className="w-[24px] h-[24px]" />
//           <h1 className="text-slate-400 ml-1">{litre}</h1>
//         </div>
//         <div className="flex items-center">
//           <Image src={'/cars/circle.png'} alt="Transmission Icon" width={20} height={20} className="w-[24px] h-[24px]" />
//           <h1 className="text-slate-400 ml-1">{type}</h1>
//         </div>
//         <div className="flex items-center">
//           <Image src={'/cars/profile-2user.png'} alt="Passenger Space Icon" width={20} height={20} className="w-[24px] h-[24px]" />
//           <h1 className="text-slate-400 ml-1">{space}</h1>
//         </div>
//       </div>

//       {/* Price & Button */}
//       <div className="flex justify-between items-center mt-4">
//         <div>
//           <p className="text-blue-500 font-bold">${price}.00/<span className="text-slate-400">day</span></p>
//         </div>
//         <Link href={'/payment'}>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Rent Now
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
