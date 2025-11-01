"use client";

import { motion } from "framer-motion";
import { FaCarSide, FaExchangeAlt, FaMonument, FaWhatsapp } from "react-icons/fa";

export default function UmrahServices() {
  const services = [
    {
      icon: <FaCarSide size={42} />,
      title: "Airport Transfers",
      text: "Reliable pick-up and drop-off from Jeddah, Madinah, Taif, and Riyadh airports with excellent comfort and punctual service.",
    },
    {
      icon: <FaExchangeAlt size={42} />,
      title: "City-to-City Transfers",
      text: "Smooth and safe transportation between Jeddah, Makkah, Madinah, and other major cities with professional drivers.",
    },
    {
      icon: <FaMonument size={42} />,
      title: "Ziyarat & Guided Tours",
      text: "Explore sacred landmarks in Makkah, Madinah, Taif, and Badr with knowledgeable guides for a spiritual experience.",
    },
  ];

  return (
    <section
      id="umrah-services"
      aria-label="Umrah Taxi Services"
      className="bg-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#0F5132] mb-4 tracking-wide"
        >
          OUR <span className="text-[#C19A6B]">UMRAH TAXI</span> SERVICES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-14"
        >
          We provide luxury, comfort, and convenience for pilgrims and travelers
          across Saudi Arabia — ensuring every ride feels divine.
        </motion.p>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.1)",
              }}
              className="group bg-linear-to-b from-[#fdfcfb] to-[#f9f7f4] border border-[#e6e4e1] rounded-3xl p-8 md:p-10 text-center transition-all duration-300"
            >
              <div className="bg-[#0F5132]/10 group-hover:bg-[#0F5132]/20 text-[#0F5132] w-20 h-20 flex items-center justify-center mx-auto rounded-2xl mb-6 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#0F5132] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{service.text}</p>

              <div className="mt-6 w-12 h-[3px] bg-[#C19A6B] mx-auto rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="https://wa.me/966000000000" // ✅ Add your WhatsApp number here
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0F5132] hover:bg-[#0b3d25] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-all"
          >
            <FaWhatsapp size={24} /> Book Your Ride on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
