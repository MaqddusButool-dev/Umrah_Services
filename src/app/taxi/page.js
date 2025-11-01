"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCar, FaUsers, FaSuitcase, FaCheckCircle, FaStar } from "react-icons/fa";

// Vehicle data
const vehicles = [
  {
    id: 1,
    name: "CAMERY 4 SEATER",
    slug: "camery-4-seater",
    image: "/assets/images/camry.png",
    seats: 4,
    luggage: 3,
    price: "150",
    features: ["Air Conditioning", "Comfortable Seats", "Professional Driver"],
    description: "Perfect for small families or couples, offering comfort and style for your journey.",
  },
  {
    id: 2,
    name: "STARIA 7 SEATER",
    slug: "staria-7-seater",
    image: "/assets/images/staria.png",
    seats: 7,
    luggage: 5,
    price: "250",
    features: ["Spacious Interior", "Modern Design", "Air Conditioning"],
    description: "Ideal for families or groups, providing ample space and modern amenities.",
  },
  {
    id: 3,
    name: "GMC 7 SEATER",
    slug: "gmc-7-seater",
    image: "/assets/images/gmc.png",
    seats: 7,
    luggage: 5,
    price: "280",
    features: ["Luxury Interior", "Premium Comfort", "Advanced Safety"],
    description: "Experience luxury travel with premium comfort and style.",
  },
  {
    id: 4,
    name: "HIACE 10 SEATER",
    slug: "hiace-10-seater",
    image: "/assets/images/hiace.png",
    seats: 10,
    luggage: 8,
    price: "350",
    features: ["Large Capacity", "Comfortable Seating", "Reliable"],
    description: "Perfect for larger groups, offering reliability and comfort.",
  },
  {
    id: 5,
    name: "COASTER 17 SEATER",
    slug: "coaster-17-seater",
    image: "/assets/images/coaster.png",
    seats: 17,
    luggage: 12,
    price: "500",
    features: ["Group Travel", "Spacious", "Professional Service"],
    description: "Ideal for large groups and tour groups, ensuring everyone travels together comfortably.",
  },
  {
    id: 6,
    name: "SONATA 4 SEATER",
    slug: "sonata-4-seater",
    image: "/assets/images/camry.png",
    seats: 4,
    luggage: 3,
    price: "140",
    features: ["Economical", "Comfortable", "Reliable"],
    description: "An economical choice for small groups without compromising comfort.",
  },
  {
    id: 7,
    name: "HYUNDAI H1 7 SEATER",
    slug: "hyundai-h1-7-seater",
    image: "/assets/images/staria.png",
    seats: 7,
    luggage: 5,
    price: "240",
    features: ["Family Friendly", "Spacious", "Modern Features"],
    description: "Perfect for families seeking comfort and modern amenities.",
  },
  {
    id: 8,
    name: "CHEVROLET 7 SEATER",
    slug: "chevrolet-7-seater",
    image: "/assets/images/gmc.png",
    seats: 7,
    luggage: 5,
    price: "260",
    features: ["Powerful", "Comfortable", "Stylish"],
    description: "A powerful and stylish option for group travel.",
  },
];

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F7F9F5] to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0F5132] via-[#0F5132] to-[#198754] text-white py-20 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ad8f60] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-[#ad8f60] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Premium Fleet Selection
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Choose Your Perfect <span className="text-[#ad8f60]">Ride</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed mb-6">
            Select from our fleet of premium vehicles for your sacred journey.
            All vehicles come with <span className="font-semibold text-[#ad8f60]">professional drivers</span> and are 
            <span className="font-semibold text-[#ad8f60]"> fully maintained</span> for your comfort and safety.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaCheckCircle className="text-[#ad8f60]" />
              <span className="text-sm">Licensed Drivers</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaCheckCircle className="text-[#ad8f60]" />
              <span className="text-sm">24/7 Service</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaCheckCircle className="text-[#ad8f60]" />
              <span className="text-sm">GPS Enabled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F5132] mb-4">
            Our <span className="text-[#ad8f60]">Premium Fleet</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F5132] to-[#ad8f60] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <Link
              key={vehicle.id}
              href={`/taxi/${vehicle.slug}`}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#0F5132]/30 transform hover:-translate-y-3 h-full">
                {/* Vehicle Image */}
                <div className="relative h-52 bg-gradient-to-br from-[#F7F9F5] to-gray-100 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#ad8f60] to-[#d4a574] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ${vehicle.price}/day
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0F5132] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>Premium</span>
                  </div>
                </div>

                {/* Vehicle Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F5132] mb-4 group-hover:text-[#ad8f60] transition-colors">
                    {vehicle.name}
                  </h3>

                  {/* Vehicle Stats */}
                  <div className="flex items-center justify-around mb-5 bg-[#F7F9F5] py-3 rounded-lg">
                    <div className="flex flex-col items-center">
                      <FaUsers className="text-[#0F5132] text-xl mb-1" />
                      <span className="text-sm font-semibold text-gray-700">{vehicle.seats} Seats</span>
                    </div>
                    <div className="w-px h-10 bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                      <FaSuitcase className="text-[#0F5132] text-xl mb-1" />
                      <span className="text-sm font-semibold text-gray-700">{vehicle.luggage} Bags</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gradient-to-r from-[#F7F9F5] to-[#E9F6F0] text-[#0F5132] px-3 py-1.5 rounded-full font-medium border border-[#0F5132]/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-5 line-clamp-2 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Book Button */}
                  <button className="w-full bg-gradient-to-r from-[#0F5132] to-[#198754] text-white py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 group-hover:from-[#ad8f60] group-hover:to-[#d4a574] group-hover:scale-105">
                    View Details & Book
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="relative bg-gradient-to-br from-[#0F5132] to-[#198754] py-20 px-6 mt-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ad8f60] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-[#ad8f60]">Our Service</span>
            </h2>
            <div className="w-24 h-1 bg-[#ad8f60] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ad8f60] to-[#d4a574] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <FaCar className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Well Maintained Fleet
              </h3>
              <p className="text-white/90 leading-relaxed">
                All our vehicles are regularly serviced and maintained to the highest standards for your safety and comfort
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ad8f60] to-[#d4a574] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <FaUsers className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Professional Drivers
              </h3>
              <p className="text-white/90 leading-relaxed">
                Experienced, licensed, and courteous drivers who are familiar with all routes and provide excellent service
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ad8f60] to-[#d4a574] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform">
                <FaSuitcase className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Comfortable Journey
              </h3>
              <p className="text-white/90 leading-relaxed">
                Fully air-conditioned vehicles with ample luggage space ensuring a comfortable and relaxing journey
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link href="/contact">
              <button className="bg-[#ad8f60] hover:bg-[#d4a574] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300">
                Contact Us for Special Packages
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
