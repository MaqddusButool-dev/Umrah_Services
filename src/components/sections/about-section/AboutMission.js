"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import carImg from "../../../../public/assets/images/about_gmc.jpg";

export default function AboutMission() {
  const tabs = [
    { id: "services", label: "SERVICES" },
    { id: "mission", label: "OUR MISSION" },
    { id: "goals", label: "OUR GOALS" },
  ];

  const [activeTab, setActiveTab] = useState("services");

  const tabContent = {
    services: (
      <div className="mt-8 space-y-6 text-gray-100">
        <p>
          At{" "}
          <span className="font-semibold text-[#d4a574]">
            Rihlat Al Fakhama Travels & Tours
          </span>
          , we offer reliable, comfortable, and professional transport services
          across the Kingdom — catering to individuals, families, and groups for
          Umrah, Ziyarat, and intercity transfers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl text-[#d4a574]">🚖</div>
            <div>
              <h4 className="font-semibold text-white text-lg">Luxury Fleet</h4>
              <p className="text-gray-200 text-sm">
                Choose from our premium range — GMC, Camry, Hyundai H1, Hiace,
                and Coaster.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-4xl text-[#d4a574]">💰</div>
            <div>
              <h4 className="font-semibold text-white text-lg">
                Transparent Pricing
              </h4>
              <p className="text-gray-200 text-sm">
                Affordable, fixed rates — no hidden costs, only trusted service.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    mission: (
      <div className="mt-8 text-gray-100 leading-relaxed space-y-4">
        <p>
          Our mission is to redefine travel comfort for Umrah pilgrims by
          providing punctual, safe, and seamless transportation across Saudi
          Arabia.
        </p>
        <p>
          We are committed to professionalism and hospitality, ensuring your
          sacred journey is peaceful and stress-free.
        </p>
      </div>
    ),
    goals: (
      <div className="mt-8 text-gray-100 leading-relaxed space-y-4">
        <p>
          Our goal is to be the most trusted Umrah and travel partner in the
          Kingdom, setting benchmarks in reliability and excellence.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Expand to all major cities in Saudi Arabia</li>
          <li>Offer multilingual 24/7 customer support</li>
          <li>Enable online booking & real-time tracking</li>
          <li>Maintain top-tier customer satisfaction</li>
        </ul>
      </div>
    ),
  };

  return (
    <section className="bg-gradient-to-r from-[#0F5132] via-[#0F5132] to-[#198754] py-20 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            RIHLAT AL FAKHAMA <br />
            <span className="text-[#d4a574]">TRAVELS & TOURS</span>
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-8 mt-8 border-b border-[#d4a574]/40 pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 font-semibold text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-[#d4a574] border-b-4 border-[#d4a574]"
                    : "text-gray-200 hover:text-[#ad8f60]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Animated Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-[#d4a574]/20 blur-2xl rounded-3xl"></div>
            <Image
              src={carImg}
              alt="Luxury Travel Car"
              className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl border border-[#d4a574]/40"
              width={600}
              height={400}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
