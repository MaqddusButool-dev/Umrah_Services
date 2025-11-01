"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaSnowflake, FaUsers, FaClock, FaSuitcase, FaWifi, FaCarSide } from "react-icons/fa";

import camry from "../../../../public/assets/images/camry.png";
import hiace from "../../../../public/assets/images/hiace.png";
import gmc from "../../../../public/assets/images/gmc.png";
import coaster from "../../../../public/assets/images/coaster.png";
import staria from "../../../../public/assets/images/staria.png";

const cars = [
  {
    id: "CAMRY",
    title: "CAMRY",
    subtitle: "Comfort • 4 Seats • AC",
    img: camry,
    features: [
      { icon: <FaUsers />, label: "4 Seats" },
      { icon: <FaSnowflake />, label: "Air Conditioned" },
      { icon: <FaSuitcase />, label: "2 Luggage" },
      { icon: <FaWifi />, label: "Free WiFi" },
    ],
    pricePoints: [
      ["Jeddah Airport → Makkah Hotel", "250 SR"],
      ["Makkah Hotel → Madina Hotel", "500 SR"],
      ["Makkah Ziyarat", "250 SR"],
      ["Jeddah ↔ Taif", "700 SR"],
      ["Per Hour Rate", "100 SR"],
    ],
  },
  {
    id: "HIACE",
    title: "HIACE",
    subtitle: "Spacious • 12 Seats • AC",
    img: hiace,
    features: [
      { icon: <FaUsers />, label: "12 Seats" },
      { icon: <FaSnowflake />, label: "AC Available" },
      { icon: <FaSuitcase />, label: "8 Luggage" },
      { icon: <FaCarSide />, label: "Spacious Cabin" },
    ],
    pricePoints: [
      ["Jeddah Airport → Makkah Hotel", "300 SR"],
      ["Makkah → Madina", "550 SR"],
      ["Group Ziyarat", "300 SR"],
      ["Per Hour Rate", "120 SR"],
    ],
  },
  {
    id: "GMC-2022",
    title: "GMC-2022",
    subtitle: "Luxury • 6 Seats • AC",
    img: gmc,
    features: [
      { icon: <FaUsers />, label: "6 Luxury Seats" },
      { icon: <FaSnowflake />, label: "Dual Zone AC" },
      { icon: <FaWifi />, label: "WiFi & Charger" },
      { icon: <FaClock />, label: "24/7 Service" },
    ],
    pricePoints: [
      ["Jeddah Airport → Makkah Hotel", "400 SR"],
      ["Makkah → Madina", "600 SR"],
      ["Madina → Airport", "250 SR"],
    ],
  },
  {
    id: "COASTER",
    title: "COASTER",
    subtitle: "Group • 24 Seats • AC",
    img: coaster,
    features: [
      { icon: <FaUsers />, label: "24 Seats" },
      { icon: <FaSnowflake />, label: "AC" },
      { icon: <FaCarSide />, label: "Ideal for Groups" },
      { icon: <FaClock />, label: "24/7" },
    ],
    pricePoints: [
      ["Group Transfer Makkah → Madina", "800 SR"],
      ["Madina → Jeddah Airport", "500 SR"],
    ],
  },
  {
    id: "HYUNDAI-STARIA",
    title: "HYUNDAI STARIA",
    subtitle: "Family • 7 Seats • AC",
    img: staria,
    features: [
      { icon: <FaUsers />, label: "7 Seats" },
      { icon: <FaSnowflake />, label: "Cool AC" },
      { icon: <FaSuitcase />, label: "Spacious Trunk" },
      { icon: <FaClock />, label: "On-Time Pickup" },
    ],
    pricePoints: [
      ["Jeddah Airport → Makkah Hotel", "280 SR"],
      ["Makkah → Madina", "520 SR"],
    ],
  },
];

export default function CarPricing() {
  const [activeId, setActiveId] = useState(cars[0].id);
  const active = cars.find((c) => c.id === activeId);

  return (
    <section className="py-20 bg-gradient-to-r from-[#0F5132] via-[#0F5132] to-[#198754] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            CAR FOR <span className="text-[#d4a574]">EVERY BUDGET</span>
          </h2>
          <p className="mt-3 text-[#e5e5e5] font-medium">
            Airport trip pickup will be charged in advance.
          </p>

          <motion.div
            className="w-24 h-[3px] mt-3 bg-[#d4a574] rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          ></motion.div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cars.map((car) => {
            const isActive = car.id === activeId;
            return (
              <button
                key={car.id}
                onClick={() => setActiveId(car.id)}
                className={`relative rounded-full px-6 py-2.5 text-sm md:text-base font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#ad8f60] to-[#d4a574] text-white shadow-lg scale-105"
                    : "bg-white text-[#0F5132] border border-[#C6A654]/40 hover:bg-[#E9F6F0] hover:scale-105"
                }`}
              >
                {car.title}
                {isActive && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#d4a574] rounded-full shadow-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-[#C6A654]/30 p-6 md:p-10 md:flex items-center gap-8 relative overflow-hidden"
            >
              {/* Details */}
              <div className="md:flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0F5132]">
                      {active.title}
                    </h3>
                    <p className="text-sm text-[#198754] mt-1">
                      {active.subtitle}
                    </p>
                    <p className="mt-3 text-[#123C25]/80 leading-relaxed">
                      Experience a luxurious, comfortable, and reliable Umrah taxi
                      service with transparent rates, air-conditioned vehicles,
                      and licensed drivers. Your peace of mind is our priority.
                    </p>
                  </div>

                  <div className="hidden md:flex flex-col items-end gap-2">
                    <span className="bg-gradient-to-r from-[#0F5132] to-[#198754] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                      Limited Offer
                    </span>
                    <span className="bg-[#F6FBF9] text-[#0F5132] border border-[#C6A654]/30 px-3 py-1 rounded-full text-xs font-semibold">
                      Instant Confirmation
                    </span>
                  </div>
                </div>

                {/* Price List */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.pricePoints.map(([route, price], idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center bg-[#F6FBF9] border border-[#C6A654]/20 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition"
                    >
                      <span className="text-sm text-[#123C25]/80">{route}</span>
                      <span className="text-sm font-semibold text-[#0F5132]">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {active.features.map((f, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.08 }}
                      className="flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FBF9] to-[#E9F6F0] border border-[#C6A654]/20 rounded-xl py-3 shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="text-[#198754] text-xl mb-1">{f.icon}</div>
                      <p className="text-sm font-medium text-[#0F5132]">{f.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/taxi">
                    <button className="group bg-gradient-to-r from-[#0F5132] to-[#198754] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <span className="group-hover:bg-gradient-to-r group-hover:from-[#ad8f60] group-hover:to-[#d4a574] group-hover:text-white transition-all duration-300">
                        Book Now
                      </span>
                    </button>
                  </Link>

                  <Link href="/taxi">
                    <button className="bg-white text-[#0F5132] border-2 border-[#198754]/40 px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-gradient-to-r hover:from-[#ad8f60] hover:to-[#d4a574] hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      View All Vehicles
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-[360px] mt-8 md:mt-0 flex justify-center md:justify-end relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={active.img}
                    alt={active.title}
                    width={320}
                    height={240}
                    className="w-64 md:w-80 object-contain drop-shadow-2xl rounded-xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}




















// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaSnowflake, FaUsers, FaClock, FaSuitcase, FaWifi, FaCarSide } from "react-icons/fa";

// import camry from "../../../../public/assets/images/camry.png";
// import hiace from "../../../../public/assets/images/hiace.png";
// import gmc from "../../../../public/assets/images/gmc.png";
// import coaster from "../../../../public/assets/images/coaster.png";
// import staria from "../../../../public/assets/images/staria.png";

// const cars = [
//   {
//     id: "CAMRY",
//     title: "CAMRY",
//     subtitle: "Comfort • 4 Seats • AC",
//     img: camry,
//     features: [
//       { icon: <FaUsers />, label: "4 Seats" },
//       { icon: <FaSnowflake />, label: "Air Conditioned" },
//       { icon: <FaSuitcase />, label: "2 Luggage" },
//       { icon: <FaWifi />, label: "Free WiFi" },
//     ],
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "250 SR"],
//       ["Makkah Hotel → Madina Hotel", "500 SR"],
//       ["Makkah Ziyarat", "250 SR"],
//       ["Jeddah ↔ Taif", "700 SR"],
//       ["Per Hour Rate", "100 SR"],
//     ],
//   },
//   {
//     id: "HIACE",
//     title: "HIACE",
//     subtitle: "Spacious • 12 Seats • AC",
//     img: hiace,
//     features: [
//       { icon: <FaUsers />, label: "12 Seats" },
//       { icon: <FaSnowflake />, label: "AC Available" },
//       { icon: <FaSuitcase />, label: "8 Luggage" },
//       { icon: <FaCarSide />, label: "Spacious Cabin" },
//     ],
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "300 SR"],
//       ["Makkah → Madina", "550 SR"],
//       ["Group Ziyarat", "300 SR"],
//       ["Per Hour Rate", "120 SR"],
//     ],
//   },
//   {
//     id: "GMC-2022",
//     title: "GMC-2022",
//     subtitle: "Luxury • 6 Seats • AC",
//     img: gmc,
//     features: [
//       { icon: <FaUsers />, label: "6 Luxury Seats" },
//       { icon: <FaSnowflake />, label: "Dual Zone AC" },
//       { icon: <FaWifi />, label: "WiFi & Charger" },
//       { icon: <FaClock />, label: "24/7 Service" },
//     ],
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "400 SR"],
//       ["Makkah → Madina", "600 SR"],
//       ["Madina → Airport", "250 SR"],
//     ],
//   },
//   {
//     id: "COASTER",
//     title: "COASTER",
//     subtitle: "Group • 24 Seats • AC",
//     img: coaster,
//     features: [
//       { icon: <FaUsers />, label: "24 Seats" },
//       { icon: <FaSnowflake />, label: "AC" },
//       { icon: <FaCarSide />, label: "Ideal for Groups" },
//       { icon: <FaClock />, label: "24/7" },
//     ],
//     pricePoints: [
//       ["Group Transfer Makkah → Madina", "800 SR"],
//       ["Madina → Jeddah Airport", "500 SR"],
//     ],
//   },
//   {
//     id: "HYUNDAI-STARIA",
//     title: "HYUNDAI STARIA",
//     subtitle: "Family • 7 Seats • AC",
//     img: staria,
//     features: [
//       { icon: <FaUsers />, label: "7 Seats" },
//       { icon: <FaSnowflake />, label: "Cool AC" },
//       { icon: <FaSuitcase />, label: "Spacious Trunk" },
//       { icon: <FaClock />, label: "On-Time Pickup" },
//     ],
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "280 SR"],
//       ["Makkah → Madina", "520 SR"],
//     ],
//   },
// ];

// export default function CarPricing() {
//   const [activeId, setActiveId] = useState(cars[0].id);
//   const active = cars.find((c) => c.id === activeId);

//   return (
//     <section className="py-20 bg-linear-to-b from-[#f8fff9] to-[#ecf9f2] font-sans relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#0F5132] tracking-tight">
//             CAR FOR <span className="text-[#C19A6B]">EVERY BUDGET</span>
//           </h2>
//           <p className="mt-3 text-gray-600 font-medium">
//             Airport trip pickup will be charged in advance.
//           </p>

//           <motion.div
//             className="w-24 h-[3px] mt-3 bg-[#b99a6b] rounded-full mx-auto"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//           ></motion.div>
//         </div>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10">
//           {cars.map((car) => {
//             const isActive = car.id === activeId;
//             return (
//               <button
//                 key={car.id}
//                 onClick={() => setActiveId(car.id)}
//                 className={`relative rounded-full px-6 py-2.5 text-sm md:text-base font-semibold transition-all duration-300 ${
//                   isActive
//                     ? "bg-linear-to-r from-[#0F5132] to-[#2EB67D] text-white shadow-lg scale-105"
//                     : "bg-white text-[#0F5132] border border-[#C6A654]/40 hover:bg-[#E9F6F0] hover:scale-105"
//                 }`}
//               >
//                 {car.title}
//                 {isActive && (
//                   <motion.span
//                     layoutId="active-underline"
//                     className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#C6A654] rounded-full shadow-lg"
//                     transition={{ type: "spring", stiffness: 350, damping: 25 }}
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* Card */}
//         <div className="relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-[#C6A654]/30 p-6 md:p-10 md:flex items-center gap-8 relative overflow-hidden"
//             >
//               {/* Details */}
//               <div className="md:flex-1">
//                 <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
//                   <div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-[#0F5132]">
//                       {active.title}
//                     </h3>
//                     <p className="text-sm text-[#2EB67D] mt-1">
//                       {active.subtitle}
//                     </p>
//                     <p className="mt-3 text-[#123C25]/80 leading-relaxed">
//                       Experience a luxurious, comfortable, and reliable Umrah taxi
//                       service with transparent rates, air-conditioned vehicles,
//                       and licensed drivers. Your peace of mind is our priority.
//                     </p>
//                   </div>

//                   <div className="hidden md:flex flex-col items-end gap-2">
//                     <span className="bg-linear-to-r from-[#0F5132] to-[#2EB67D] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
//                       Limited Offer
//                     </span>
//                     <span className="bg-[#F6FBF9] text-[#0F5132] border border-[#C6A654]/30 px-3 py-1 rounded-full text-xs font-semibold">
//                       Instant Confirmation
//                     </span>
//                   </div>
//                 </div>

//                 {/* Price List */}
//                 <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {active.pricePoints.map(([route, price], idx) => (
//                     <div
//                       key={idx}
//                       className="flex justify-between items-center bg-[#F6FBF9] border border-[#C6A654]/20 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition"
//                     >
//                       <span className="text-sm text-[#123C25]/80">{route}</span>
//                       <span className="text-sm font-semibold text-[#0F5132]">
//                         {price}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Feature Menu (Unique Addition) */}
//                 <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
//                   {active.features.map((f, idx) => (
//                     <motion.div
//                       key={idx}
//                       whileHover={{ scale: 1.08 }}
//                       className="flex flex-col items-center justify-center bg-linear-to-br from-[#F9FBF9] to-[#E9F6F0] border border-[#C6A654]/20 rounded-xl py-3 shadow-md hover:shadow-lg transition-all"
//                     >
//                       <div className="text-[#2EB67D] text-xl mb-1">{f.icon}</div>
//                       <p className="text-sm font-medium text-[#0F5132]">{f.label}</p>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-10 flex flex-wrap items-center gap-4">
//                   <Link href="/taxi">
//                     <button className="bg-gradient-to-r from-[#0F5132] to-[#2EB67D] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
//                       Book Now
//                     </button>
//                   </Link>
//                   <Link href="/taxi">
//                     <button className="bg-white text-[#0F5132] border-2 border-[#C6A654]/40 px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-[#F6FBF9] hover:border-[#0F5132] transition-all duration-300">
//                       View All Vehicles
//                     </button>
//                   </Link>
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="md:w-[360px] mt-8 md:mt-0 flex justify-center md:justify-end relative">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9, y: 10 }}
//                   animate={{ opacity: 1, scale: 1, y: 0 }}
//                   whileHover={{ scale: 1.03, rotate: -1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Image
//                     src={active.img}
//                     alt={active.title}
//                     width={320}
//                     height={240}
//                     className="w-64 md:w-80 object-contain drop-shadow-2xl rounded-xl"
//                     priority
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaSnowflake,
//   FaUsers,
//   FaClock,
//   FaSuitcase,
//   FaWifi,
//   FaCarSide,
// } from "react-icons/fa";

// import camry from "../../../../public/assets/images/camry.png";
// import hiace from "../../../../public/assets/images/hiace.png";
// import gmc from "../../../../public/assets/images/gmc.png";
// import coaster from "../../../../public/assets/images/coaster.png";
// import staria from "../../../../public/assets/images/staria.png";

// const cars = [
//   {
//     id: "CAMRY",
//     title: "CAMRY",
//     subtitle: "Comfort • 4 Seats • AC",
//     img: camry,
//     features: [
//       { icon: <FaUsers />, label: "4 Seats" },
//       { icon: <FaSnowflake />, label: "Air Conditioned" },
//       { icon: <FaSuitcase />, label: "2 Luggage" },
//       { icon: <FaWifi />, label: "Free WiFi" },
//     ],
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "250 SR"],
//       ["Makkah Hotel → Madina Hotel", "500 SR"],
//       ["Makkah Ziyarat", "250 SR"],
//       ["Jeddah ↔ Taif", "700 SR"],
//       ["Per Hour Rate", "100 SR"],
//     ],
//   },
//   {
//     id: "HIACE",
//     title: "HIACE",
//     subtitle: "Spacious • 12 Seats • AC",
//     img: hiace,
//     features: [
//       { icon: <FaUsers />, label: "12 Seats" },
//       { icon: <FaSnowflake />, label: "AC Available" },
//       { icon: <FaSuitcase />, label: "8 Luggage" },
//       { icon: <FaCarSide />, label: "Spacious Cabin" },
//     ],
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "300 SR"],
//       ["Makkah → Madina", "550 SR"],
//       ["Group Ziyarat", "300 SR"],
//       ["Per Hour Rate", "120 SR"],
//     ],
//   },
//   {
//     id: "GMC-2022",
//     title: "GMC-2022",
//     subtitle: "Luxury • 6 Seats • AC",
//     img: gmc,
//     features: [
//       { icon: <FaUsers />, label: "6 Luxury Seats" },
//       { icon: <FaSnowflake />, label: "Dual Zone AC" },
//       { icon: <FaWifi />, label: "WiFi & Charger" },
//       { icon: <FaClock />, label: "24/7 Service" },
//     ],
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "400 SR"],
//       ["Makkah → Madina", "600 SR"],
//       ["Madina → Airport", "250 SR"],
//     ],
//   },
//   {
//     id: "COASTER",
//     title: "COASTER",
//     subtitle: "Group • 24 Seats • AC",
//     img: coaster,
//     features: [
//       { icon: <FaUsers />, label: "24 Seats" },
//       { icon: <FaSnowflake />, label: "AC" },
//       { icon: <FaCarSide />, label: "Ideal for Groups" },
//       { icon: <FaClock />, label: "24/7" },
//     ],
//     pricePoints: [
//       ["Group Transfer Makkah → Madina", "800 SR"],
//       ["Madina → Jeddah Airport", "500 SR"],
//     ],
//   },
//   {
//     id: "HYUNDAI-STARIA",
//     title: "HYUNDAI STARIA",
//     subtitle: "Family • 7 Seats • AC",
//     img: staria,
//     features: [
//       { icon: <FaUsers />, label: "7 Seats" },
//       { icon: <FaSnowflake />, label: "Cool AC" },
//       { icon: <FaSuitcase />, label: "Spacious Trunk" },
//       { icon: <FaClock />, label: "On-Time Pickup" },
//     ],
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "280 SR"],
//       ["Makkah → Madina", "520 SR"],
//     ],
//   },
// ];

// export default function CarPricing() {
//   const [activeId, setActiveId] = useState(cars[0].id);
//   const active = cars.find((c) => c.id === activeId);

//   return (
//     <section className="py-20 bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2] font-sans relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#0F5132] tracking-tight">
//             CAR FOR <span className="text-[#C19A6B]">EVERY BUDGET</span>
//           </h2>
//           <p className="mt-3 text-gray-600 font-medium">
//             Airport trip pickup will be charged in advance.
//           </p>

//           <motion.div
//             className="w-24 h-[3px] mt-3 bg-[#b99a6b] rounded-full mx-auto"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//           ></motion.div>
//         </div>

//         {/* Card with Menu Inside */}
//         <div className="relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-[#C6A654]/30 p-8 md:p-10 relative overflow-hidden"
//             >
//               {/* Tabs INSIDE card */}
//               <div className="flex flex-wrap justify-center gap-3 mb-10">
//                 {cars.map((car) => {
//                   const isActive = car.id === activeId;
//                   return (
//                     <button
//                       key={car.id}
//                       onClick={() => setActiveId(car.id)}
//                       className={`relative rounded-full px-5 py-2 text-sm md:text-base font-semibold transition-all duration-300 ${
//                         isActive
//                           ? "bg-gradient-to-r from-[#0F5132] to-[#2EB67D] text-white shadow-lg scale-105"
//                           : "bg-white text-[#0F5132] border border-[#C6A654]/40 hover:bg-[#E9F6F0] hover:scale-105"
//                       }`}
//                     >
//                       {car.title}
//                       {isActive && (
//                         <motion.span
//                           layoutId="active-underline"
//                           className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#C6A654] rounded-full shadow-lg"
//                           transition={{ type: "spring", stiffness: 350, damping: 25 }}
//                         />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

//               <div className="md:flex items-center gap-10">
//                 {/* Details */}
//                 <div className="md:flex-1">
//                   <h3 className="text-2xl md:text-3xl font-bold text-[#0F5132]">
//                     {active.title}
//                   </h3>
//                   <p className="text-sm text-[#2EB67D] mt-1">{active.subtitle}</p>
//                   <p className="mt-3 text-[#123C25]/80 leading-relaxed">
//                     Experience a luxurious, comfortable, and reliable Umrah taxi
//                     service with transparent rates, air-conditioned vehicles,
//                     and licensed drivers. Your peace of mind is our priority.
//                   </p>

//                   {/* Price List */}
//                   <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {active.pricePoints.map(([route, price], idx) => (
//                       <div
//                         key={idx}
//                         className="flex justify-between items-center bg-[#F6FBF9] border border-[#C6A654]/20 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition"
//                       >
//                         <span className="text-sm text-[#123C25]/80">{route}</span>
//                         <span className="text-sm font-semibold text-[#0F5132]">
//                           {price}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Feature Menu */}
//                   <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
//                     {active.features.map((f, idx) => (
//                       <motion.div
//                         key={idx}
//                         whileHover={{ scale: 1.08 }}
//                         className="flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FBF9] to-[#E9F6F0] border border-[#C6A654]/20 rounded-xl py-3 shadow-md hover:shadow-lg transition-all"
//                       >
//                         <div className="text-[#2EB67D] text-xl mb-1">{f.icon}</div>
//                         <p className="text-sm font-medium text-[#0F5132]">{f.label}</p>
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Buttons */}
//                   <div className="mt-10 flex flex-wrap items-center gap-4">
//                     <button className="bg-gradient-to-r from-[#0F5132] to-[#2EB67D] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-[1.03] transition">
//                       Book Now
//                     </button>
//                     <button className="bg-white text-[#0F5132] border border-[#C6A654]/40 px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-[#F6FBF9] transition">
//                       View Details
//                     </button>
//                   </div>
//                 </div>

//                 {/* Image */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9, y: 10 }}
//                   animate={{ opacity: 1, scale: 1, y: 0 }}
//                   whileHover={{ scale: 1.03, rotate: -1 }}
//                   transition={{ duration: 0.5 }}
//                   className="md:w-[360px] mt-8 md:mt-0 flex justify-center md:justify-end"
//                 >
//                   <Image
//                     src={active.img}
//                     alt={active.title}
//                     width={320}
//                     height={240}
//                     className="w-64 md:w-80 object-contain drop-shadow-2xl rounded-xl"
//                     priority
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }



















// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaSnowflake, FaUsers, FaClock } from "react-icons/fa";


// import camry from "../../../../public/assets/images/camry.png";
// import hiace from "../../../../public/assets/images/hiace.png";
// import gmc from "../../../../public/assets/images/gmc.png";
// import coaster from "../../../../public/assets/images/coaster.png";
// import staria from "../../../../public/assets/images/staria.png";

// const cars = [
//   {
//     id: "CAMRY",
//     title: "CAMRY",
//     subtitle: "Comfort • 4 Seats • AC",
//     img: camry,
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "250 SR"],
//       ["Makkah Hotel → Madina Hotel", "500 SR"],
//       ["Makkah Ziyarat", "250 SR"],
//       ["Jeddah ↔ Taif", "700 SR"],
//       ["Per Hour Rate", "100 SR"],
//     ],
//   },
//   {
//     id: "HIACE",
//     title: "HIACE",
//     subtitle: "Spacious • 12 Seats • AC",
//     img: hiace,
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "300 SR"],
//       ["Makkah → Madina", "550 SR"],
//       ["Group Ziyarat", "300 SR"],
//       ["Per Hour Rate", "120 SR"],
//     ],
//   },
//   {
//     id: "GMC-2022",
//     title: "GMC-2022",
//     subtitle: "Luxury • 6 Seats • AC",
//     img: gmc,
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "400 SR"],
//       ["Makkah → Madina", "600 SR"],
//       ["Madina → Airport", "250 SR"],
//     ],
//   },
//   {
//     id: "COASTER",
//     title: "COASTER",
//     subtitle: "Group • 24 Seats • AC",
//     img: coaster,
//     pricePoints: [
//       ["Group Transfer Makkah → Madina", "800 SR"],
//       ["Madina → Jeddah Airport", "500 SR"],
//     ],
//   },
//   {
//     id: "HYUNDAI-STARIA",
//     title: "HYUNDAI STARIA",
//     subtitle: "Family • 7 Seats • AC",
//     img: staria,
//     pricePoints: [
//       ["Jeddah Airport → Makkah Hotel", "280 SR"],
//       ["Makkah → Madina", "520 SR"],
//     ],
//   },
// ];

// export default function CarPricing() {
//   const [activeId, setActiveId] = useState(cars[0].id);
//   const active = cars.find((c) => c.id === activeId);

//   return (
//     <section className="py-20 bg-linear-to-b from-[#f8fff9] to-[#ecf9f2] font-sans relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#0F5132] tracking-tight">
//             CAR FOR <span className="text-[#C19A6B]">EVERY BUDGET</span>
//           </h2>
//           <p className="mt-3 text-gray-600 font-medium">
//             Airport trip pickup will be charged in advance.
//           </p>

//           <motion.div
//             className="w-24 h-[3px] mt-3 bg-[#b99a6b] rounded-full mx-auto"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//           ></motion.div>
//         </div>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10">
//           {cars.map((car) => {
//             const isActive = car.id === activeId;
//             return (
//               <button
//                 key={car.id}
//                 onClick={() => setActiveId(car.id)}
//                 className={`relative rounded-full px-6 py-2.5 text-sm md:text-base font-semibold transition-all duration-300 ${
//                   isActive
//                     ? "bg-linear-to-r from-[#0F5132] to-[#2EB67D] text-white shadow-lg scale-105"
//                     : "bg-white text-[#0F5132] border border-[#C6A654]/40 hover:bg-[#E9F6F0] hover:scale-105"
//                 }`}
//               >
//                 {car.title}
//                 {isActive && (
//                   <motion.span
//                     layoutId="active-underline"
//                     className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#C6A654] rounded-full shadow-lg"
//                     transition={{ type: "spring", stiffness: 350, damping: 25 }}
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* Card */}
//         <div className="relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-[#C6A654]/30 p-6 md:p-10 md:flex items-center gap-8 relative overflow-hidden"
//             >
//               {/* Details */}
//               <div className="md:flex-1">
//                 <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
//                   <div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-[#0F5132]">
//                       {active.title}
//                     </h3>
//                     <p className="text-sm text-[#2EB67D] mt-1">
//                       {active.subtitle}
//                     </p>
//                     <p className="mt-3 text-[#123C25]/80 leading-relaxed">
//                       Experience a luxurious, comfortable, and reliable Umrah taxi
//                       service with transparent rates, air-conditioned vehicles,
//                       and licensed drivers. Your peace of mind is our priority.
//                     </p>
//                   </div>

//                   <div className="hidden md:flex flex-col items-end gap-2">
//                     <span className="bg-gradient-to-r from-[#0F5132] to-[#2EB67D] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
//                       Limited Offer
//                     </span>
//                     <span className="bg-[#F6FBF9] text-[#0F5132] border border-[#C6A654]/30 px-3 py-1 rounded-full text-xs font-semibold">
//                       Instant Confirmation
//                     </span>
//                   </div>
//                 </div>

//                 {/* Price List */}
//                 <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {active.pricePoints.map(([route, price], idx) => (
//                     <div
//                       key={idx}
//                       className="flex justify-between items-center bg-[#F6FBF9] border border-[#C6A654]/20 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition"
//                     >
//                       <span className="text-sm text-[#123C25]/80">{route}</span>
//                       <span className="text-sm font-semibold text-[#0F5132]">
//                         {price}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-8 flex flex-wrap items-center gap-4">
//                   <button className="bg-gradient-to-r from-[#0F5132] to-[#2EB67D] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-[1.03] transition">
//                     Book Now
//                   </button>
//                   <button className="bg-white text-[#0F5132] border border-[#C6A654]/40 px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-[#F6FBF9] transition">
//                     View Details
//                   </button>

//                   <div className="ml-auto flex items-center gap-4 text-sm text-[#6B7B6E]">
//                     <span className="flex items-center gap-1">
//                       <FaUsers className="text-[#2EB67D]" /> Seats
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <FaSnowflake className="text-[#2EB67D]" /> AC
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <FaClock className="text-[#2EB67D]" /> 24/7
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* ✅ Optimized Image for Next.js */}
//               <div className="md:w-[360px] mt-8 md:mt-0 flex justify-center md:justify-end relative">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9, y: 10 }}
//                   animate={{ opacity: 1, scale: 1, y: 0 }}
//                   whileHover={{ scale: 1.03, rotate: -1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Image
//                     src={active.img}
//                     alt={active.title}
//                     width={320}
//                     height={240}
//                     className="w-64 md:w-80 object-contain drop-shadow-2xl rounded-xl"
//                     priority
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }
