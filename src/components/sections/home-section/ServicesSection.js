"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaKaaba,
  FaHotel,
  FaBus,
  FaHandsHelping,
  FaMapMarkedAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

export default function ServicesSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const services = [
    {
      icon: <FaKaaba />,
      title: "Umrah & Hajj Packages",
      description:
        "Complete arrangements from visa processing to accommodation and transportation in Makkah & Madinah — ensuring a smooth spiritual journey.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Pilgrimage Assistance",
      description:
        "Full Hajj and Umrah assistance — hotel bookings, transportation, and guided Ziyarat tours handled with care and dedication.",
    },
    {
      icon: <FaHotel />,
      title: "Hotel Reservations",
      description:
        "Premium and budget-friendly hotels near Haram Makkah and Masjid-e-Nabawi for complete comfort and convenience.",
    },
    {
      icon: <FaBus />,
      title: "Luxury Transportation",
      description:
        "Modern fleet including GMCs, Lexus, Hyundai H1, and Coaster Buses for airport transfers, Ziyarat tours, and intercity travel.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Ziyarat & Guided Tours",
      description:
        "Organized sacred tours to historical sites in Makkah, Madinah, and Taif — guided by experienced professionals.",
    },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F5132]">
            OUR <span className="text-[#C19A6B]">CORE SERVICES</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Premium-quality Umrah & Hajj services for a comfortable and
            spiritual experience.
          </p>
          <motion.div
            className="w-80 h-1 mt-4 bg-[#b99a6b] rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>

        {/* Cards + Arrows */}
        <div className="relative flex items-center justify-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex bg-[#0F5132]/90 hover:bg-[#0F5132] text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Scrollable Cards */}
          <motion.div
            ref={scrollRef}
            className="flex gap-8 overflow-x-scroll no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing px-1 pt-7 pb-7 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              overflowY: "hidden",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="min-w-[85%] sm:min-w-[45%] lg:min-w-[31%] bg-white border border-[#C19A6B]/40 rounded-2xl shadow-lg hover:shadow-xl snap-center flex flex-col items-center text-center p-8 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-5xl text-[#0F5132] mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#C19A6B] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 h-[3px] w-12 bg-[#C19A6B] rounded-full"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex bg-[#0F5132]/90 hover:bg-[#0F5132] text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Scroll right"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block bg-[#0F5132] hover:bg-[#0b3d25] text-white px-10 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
            >
              Contact Us for Custom Packages
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hide Scrollbar Globally */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0;
          height: 0;
        }
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
          overflow-y: hidden;
        }
      `}</style>
    </section>
  );
}
