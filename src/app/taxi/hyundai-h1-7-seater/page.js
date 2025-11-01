"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaSuitcase, FaCog, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import BookingForm from "@/components/BookingForm";

const vehicleData = {
  name: "HYUNDAI H1 7 SEATER",
  slug: "hyundai-h1-7-seater",
  image: "/assets/images/staria.png",
  seats: 7,
  luggage: 5,
  price: "240",
  features: [
    "Family Friendly",
    "Spacious",
    "Modern Features",
    "Professional Driver",
    "Air Conditioning",
    "GPS Navigation",
    "Comfortable Seating",
    "Entertainment System",
  ],
  specifications: [
    { label: "Transmission", value: "Automatic" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Air Conditioning", value: "Dual Zone" },
    { label: "Luggage Capacity", value: "5 Large Bags" },
  ],
  description: "Perfect for families seeking comfort and modern amenities. The Hyundai H1 offers spacious seating for 7 passengers with ample luggage space. Ideal for family pilgrimages with all the comforts of home.",
};

export default function HyundaiH1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/taxi"
            className="inline-flex items-center gap-2 text-[#0F5132] hover:text-[#ad8f60] transition-colors font-semibold"
          >
            <FaArrowLeft />
            Back to Vehicles
          </Link>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <div className="relative h-80 mb-6">
                <Image
                  src={vehicleData.image}
                  alt={vehicleData.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-[#0F5132]">
                  {vehicleData.name}
                </h1>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[#ad8f60]">
                    ${vehicleData.price}
                  </div>
                  <div className="text-sm text-gray-600">per day</div>
                </div>
              </div>

              <div className="flex items-center gap-6 py-4 border-t border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#0F5132] text-xl" />
                  <div>
                    <div className="text-sm text-gray-600">Passengers</div>
                    <div className="font-semibold text-[#0F5132]">
                      {vehicleData.seats} Seats
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaSuitcase className="text-[#0F5132] text-xl" />
                  <div>
                    <div className="text-sm text-gray-600">Luggage</div>
                    <div className="font-semibold text-[#0F5132]">
                      {vehicleData.luggage} Bags
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaCog className="text-[#0F5132] text-xl" />
                  <div>
                    <div className="text-sm text-gray-600">Transmission</div>
                    <div className="font-semibold text-[#0F5132]">
                      Automatic
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#0F5132] mb-4">
                About This Vehicle
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {vehicleData.description}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#0F5132] mb-4">
                Features & Amenities
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {vehicleData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <FaCheckCircle className="text-green-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-[#0F5132] mb-4">
                Specifications
              </h2>
              <div className="space-y-3">
                {vehicleData.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-semibold text-[#0F5132]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-6 h-fit">
            <BookingForm vehicle={vehicleData} />
          </div>
        </div>
      </section>
    </div>
  );
}

