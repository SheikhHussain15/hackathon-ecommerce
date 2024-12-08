import Image from "next/image";

export default function CarCard({ name, price, type, imgSrc, litre, space }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">

      {/* Car Details */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{type}</p>
      </div>

      {/* Car Image */}
      <div className="relative w-full h-40">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-contain rounded-md"
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-between items-center">
          <Image src={'/cars/gas-station.png'} alt='' width={20} height={20} className="w-[24px] h-[24px]" />
          <h1 className="text-slate-400 ml-1">{litre}</h1>
        </div>
        <div className="flex justify-between items-center">
          <Image src={'/cars/circle.png'} alt='' width={20} height={20} className="w-[24px] h-[24px]" />
          <h1 className="text-slate-400 ml-1">Manual</h1>
        </div>
        <div className="flex justify-between items-center">
          <Image src={'/cars/profile-2user.png'} alt='' width={20} height={20} className="w-[24px] h-[24px]" />
          <h1 className="text-slate-400 ml-1">{space}</h1>
        </div>

      </div>

      {/* Price and Buttons */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-blue-500 font-bold">${price}.00/<span className="text-slate-400">day</span> </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Rent Now
        </button>
      </div>
    </div>
  );
}
