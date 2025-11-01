"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCar,
  FaUsers,
  FaSnowflake,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import VehicleCard from "@/components/VehicleCard";

const fleet = [
  {
    id: 1,
    name: "GMC YUKON",
    slug: "gmc-7-seater",
    image: "/assets/images/gmc.png",
    seats: 7,
    luggage: 5,
    price: "280",
    features: ["Luxury Interior", "Full AC", "Professional Driver", "Spacious Luggage"],
    description: "Luxury SUV perfect for families and small groups. Experience ultimate comfort.",
    link: "/taxi/gmc-7-seater",
  },
  {
    id: 2,
    name: "HYUNDAI H1",
    slug: "hyundai-h1-7-seater",
    image: "/assets/images/staria.png",
    seats: 7,
    luggage: 5,
    price: "240",
    features: ["Comfortable Seating", "Air Conditioned", "Smooth Ride", "Large Capacity"],
    description: "Modern and comfortable van ideal for group travel with ample space.",
    link: "/taxi/hyundai-h1-7-seater",
  },
  {
    id: 3,
    name: "TOYOTA CAMRY",
    slug: "camery-4-seater",
    image: "/assets/images/camry.png",
    seats: 4,
    luggage: 3,
    price: "150",
    features: ["Sedan Comfort", "Fuel Efficient", "Smooth Drive", "Perfect for Couples"],
    description: "Elegant sedan for comfortable airport transfers and city tours.",
    link: "/taxi/camery-4-seater",
  },
  {
    id: 4,
    name: "HYUNDAI STARIA",
    slug: "staria-7-seater",
    image: "/assets/images/staria.png",
    seats: 7,
    luggage: 5,
    price: "250",
    features: ["Latest Model", "Excellent Comfort", "Spacious", "Modern Design"],
    description: "Brand new van with cutting-edge features and comfort.",
    link: "/taxi/staria-7-seater",
  },
  {
    id: 5,
    name: "TOYOTA HIACE",
    slug: "hiace-10-seater",
    image: "/assets/images/hiace.png",
    seats: 10,
    luggage: 8,
    price: "350",
    features: ["Large Group", "Economical", "Reliable", "Extra Luggage Space"],
    description: "Perfect for larger groups and families traveling together.",
    link: "/taxi/hiace-10-seater",
  },
  {
    id: 6,
    name: "COASTER BUS",
    slug: "coaster-17-seater",
    image: "/assets/images/coaster.png",
    seats: 17,
    luggage: 12,
    price: "500",
    features: ["Large Groups", "Tour Bus", "AC Coach", "Maximum Comfort"],
    description: "Ideal for group tours, Ziyarat trips, and large family gatherings.",
    link: "/taxi/coaster-17-seater",
  },
];

const services = [
  {
    icon: FaMapMarkerAlt,
    title: "Airport Transfers",
    description: "Reliable pickup and drop-off service from Jeddah and Madinah airports to your hotel.",
  },
  {
    icon: FaCar,
    title: "City Transportation",
    description: "Convenient travel within Makkah and Madinah for shopping, dining, and visits.",
  },
  {
    icon: FaUsers,
    title: "Ziyarat Tours",
    description: "Guided tours to historical Islamic sites with comfortable transportation.",
  },
  {
    icon: FaClock,
    title: "24/7 Availability",
    description: "Round-the-clock service for your convenience anytime you need us.",
  },
];

export default function LuxuryTransportationPage() {
  return (
    <section className="bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F5132] to-[#198754] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-block bg-[#ad8f60] px-6 py-2 rounded-full text-sm font-bold mb-6">
              <FaStar className="inline mr-2" />
              OUR PRIMARY SERVICE
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Luxury Transportation Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Travel in comfort and style with our quality fleet of vehicles. Professional drivers, modern cars, and 24/7 availability for all your transportation needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#fleet"
                className="bg-white text-[#0F5132] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#ad8f60] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Our Fleet
              </a>
              <a
                href="https://wa.me/03179369176"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#20b357] transition-all duration-300 flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Book on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Services We Provide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-[#0F5132] text-center mb-4">
            Transportation Services
          </h2>
          <p className="text-center text-[#5f4b32] mb-12 max-w-2xl mx-auto">
            Complete transportation solutions for pilgrims and travelers in Saudi Arabia
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#0F5132]/10"
              >
                <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-lg text-[#0F5132] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#5f4b32] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Fleet */}
        <div id="fleet" className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0F5132] mb-4">
              Our Quality Fleet
            </h2>
            <p className="text-[#5f4b32] max-w-2xl mx-auto">
              Choose from our diverse range of well-maintained vehicles to suit your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>
        </div>

        {/* Why Choose Our Transportation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-[#0F5132]/10"
        >
          <h2 className="text-3xl font-bold text-[#0F5132] text-center mb-12">
            Why Choose Our Transportation?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-3xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-3">Safety First</h3>
              <p className="text-[#5f4b32] leading-relaxed">
                All vehicles undergo regular maintenance checks. Our drivers are licensed, experienced, and trained in safety protocols.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSnowflake className="text-white text-3xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-3">Excellent Comfort</h3>
              <p className="text-[#5f4b32] leading-relaxed">
                Fully air-conditioned vehicles with comfortable seating, perfect for the Saudi climate and long journeys.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-3xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-3">Reliable Service</h3>
              <p className="text-[#5f4b32] leading-relaxed">
                Punctual pickups, professional service, and 24/7 customer support for all your transportation needs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center bg-gradient-to-br from-[#0F5132] to-[#198754] rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Ride?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to reserve your vehicle or get a custom quote for your group
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#0F5132] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#ad8f60] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/03179369176"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#20b357] transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
