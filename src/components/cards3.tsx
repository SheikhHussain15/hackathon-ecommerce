import CarCard from '@/components/carcards';

export default function Cards3() {
  const cars = [
    { name: "Koenigsegg", price: 99.00, type: "Sport", imgSrc: "/cars/Car (8).png",litre:'90L', space:'2 People' },
    { name: "Nissan GT-R", price: 80.00, type: "Sport", imgSrc: "/cars/Car (9).png",litre:'80L', space:'2 People' },
    { name: "Rolls-Royce", price: 96.00, type: "sedan", imgSrc: "/cars/Car (10).png",litre:'70L', space:'4 People' },
    { name: "All New Rush", price: 72.00, type: "SUV", imgSrc: "/cars/Car.png",litre:'70L', space:'6 People' },
    { name: "CR-V", price: 80.00, type: "SUV", imgSrc: "/cars/Car (1).png",litre:'80L', space:'6 People' },
    { name: "All New Rush", price: 74.00, type: "SUV", imgSrc: "/cars/Car (2).png",litre:'90L', space:'6 People' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Cars</h2>
        <button className="text-blue-600 hover:underline">View All</button>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} name={car.name} price={car.price} type={car.type} imgSrc={car.imgSrc} litre={car.litre} space={car.space}
          />
        ))}
      </div>
    </div>
  );
}
