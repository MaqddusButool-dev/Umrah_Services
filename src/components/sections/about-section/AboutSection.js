"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCarSide, FaClock, FaUserTie, FaDollarSign } from "react-icons/fa";
import aboutImg from "../../../../public/assets/images/about.jpg"; // ✅ Adjust if needed

export default function AboutSection() {
  const features = [
    {
      icon: <FaCarSide />,
      title: "Modern Fleet",
      desc: "Luxury cars and air-conditioned vans for every journey.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Availability",
      desc: "Always ready — day or night, anywhere in the Kingdom.",
    },
    {
      icon: <FaUserTie />,
      title: "Professional Drivers",
      desc: "Trained, courteous, and experienced in serving pilgrims.",
    },
    {
      icon: <FaDollarSign />,
      title: "Transparent Pricing",
      desc: "No hidden fees — only clear and fair rates.",
    },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* ---------- Left Content ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-[#0F5132] mb-6 leading-snug">
            TRUSTED  {" "}
            <span className="text-[#b99a6b]">
              UMRAH TRAVEL
            </span>
            {" "} PARTNER

          </h2>

          <p className="text-gray-700 leading-relaxed mb-1">
            We provide quality and reliable travel services for pilgrims across
            Saudi Arabia. From Jeddah Airport transfers to Makkah and Madinah
            trips, our mission is to make your journey comfortable, safe, and
            on time.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            With multilingual drivers, modern vehicles, and fair pricing,
            RIHLAT AL FAKHAMA is trusted by thousands of pilgrims and travelers
            every year.
          </p>

          {/* ---------- Features Grid ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 items-start bg-white rounded-xl p-4 shadow-sm border border-[#20C997]/10 hover:shadow-md transition-all"
              >
                <div className="text-[#b99a6b] text-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-[#0F5132]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------- Right Image ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src={aboutImg}
              alt="About RIHLAT AL FAKHAMA"
              width={600}
              height={420}
              className="w-full h-[420px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-6 left-6 bg-white/95 px-6 py-3 rounded-xl shadow-md border-l-4 border-[#b99a6b]">
              <p className="text-sm font-semibold text-[#0F5132]">
                Delivering Comfort & Trust since{" "}
                <span className="text-[#b99a6b]">2015</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
