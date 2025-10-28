"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHotel, FaCar, FaUtensils, FaPassport, FaChevronDown } from "react-icons/fa";
import Link from "next/link";

export default function ServicePage() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  
  const heroImage = "/assets/images/umra.jpg"; 
  const headline = "Embark on a Spiritual Journey with Our Tailored Packages";
  const description = "Complete arrangements from visa processing to accommodation and transportation in Makkah & Madinah.";
  const packages = [
    { name: "Gold Package", image: "/assets/images/umra.jpg", accommodation: "5-star hotel", transport: "Private vehicle", amenities: "Guided tours, meals, VIP support" },
    { name: "Silver Package", image: "/assets/images/umra.jpg", accommodation: "4-star hotel", transport: "Shared AC vehicle", amenities: "Guided tours, meals" },
    { name: "Bronze Package", image: "/assets/images/umra.jpg", accommodation: "3-star hotel", transport: "Shared transport", amenities: "Basic guided tours, meals" },
  ];

  const whatsIncluded = [
    { icon: <FaPassport size={36} />, title: "Visa Assistance" },
    { icon: <FaHotel size={36} />, title: "Accommodation" },
    { icon: <FaCar size={36} />, title: "Transportation" },
    { icon: <FaUtensils size={36} />, title: "Meals Included" },
  ];

  const faqData = [
    { question: "Do you provide visa assistance?", answer: "Yes, we provide complete visa processing assistance for all packages." },
    { question: "Are meals included?", answer: "Meals are included depending on package type." },
    { question: "Can I customize my package?", answer: "Absolutely! We can tailor your package according to your preferences." },
  ];

  const toggleFAQ = (index) => setActiveFAQ(activeFAQ === index ? null : index);

  return (
    <section className="bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2]">
      {/* Hero Section */}
      <div className="relative h-[55vh] flex items-center justify-center text-center rounded-b-3xl overflow-hidden">
        <img src={heroImage} alt={headline} className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/25 rounded-b-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F5132] drop-shadow-lg">{headline}</h1>
          <p className="text-[#ad8f60] mt-3 drop-shadow-md">{description}</p>
          <Link href="#packages" className="inline-block mt-6 px-6 py-3 bg-[#ad8f60] text-white rounded-lg font-semibold shadow-lg transition-all duration-300">
            Explore Packages
          </Link>
        </motion.div>
      </div>

      {/* Packages Section */}
      <div id="packages" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-[#0F5132] text-center mb-12">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {packages.map((pkg, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#0F5132]/20 cursor-pointer">
              <img src={pkg.image} alt={pkg.name} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0F5132] mb-3">{pkg.name}</h3>
                <ul className="text-[#5f4b32] space-y-2">
                  <li>🏨 {pkg.accommodation}</li>
                  <li>🚗 {pkg.transport}</li>
                  <li>⭐ {pkg.amenities}</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What's Included */}
      <div className="py-20 bg-[#f0f9f5]">
        <h2 className="text-4xl font-bold text-[#0F5132] text-center mb-12">What's Included</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {whatsIncluded.map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center p-6 rounded-2xl shadow-xl bg-white">
              <div className="text-[#ad8f60] mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-[#0F5132]">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-[#0F5132] text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#0F5132]/20 rounded-2xl overflow-hidden shadow-lg">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-[#0F5132] font-semibold hover:bg-[#f0f9f5] transition"
              >
                {item.question}
                <FaChevronDown className={`transition-transform duration-300 ${activeFAQ === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeFAQ === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4 text-[#5f4b32]">
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
