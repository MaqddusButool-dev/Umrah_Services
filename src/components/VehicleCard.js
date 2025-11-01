"use client";

import Link from "next/link";
import Image from "next/image";
import { FaUsers, FaSuitcase, FaCheckCircle } from "react-icons/fa";

export default function VehicleCard({ vehicle, index = 0 }) {
  return (
    <Link
      href={vehicle.link || `/taxi/${vehicle.slug}`}
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
          <div className="space-y-2 mb-4">
            {vehicle.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-[#0F5132]">
                <FaCheckCircle className="text-[#198754] flex-shrink-0" />
                <span>{feature}</span>
              </div>
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
  );
}

