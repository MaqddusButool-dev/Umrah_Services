"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: "umrah-hajj-packages",
    title: "Umrah & Hajj Packages",
    description:
      "Complete arrangements from visa processing to accommodation and transportation in Makkah & Madinah.",
    page: "/services/umrah-hajj-packages",
    details:
      "We take care of everything: visa applications, flights (if needed), hotel stays in Makkah & Madinah, guided rituals, and transport throughout your sacred journey.",
  },
  {
    id: "pilgrimage-assistance",
    title: "Pilgrimage Assistance",
    description:
      "Hotel bookings, transportation, and guided Ziyarat tours ensuring a spiritually fulfilling journey.",
    page: "/services/pilgrimage-assistance",
    details:
      "Our team assists you step–by–step: pre-departure support, on-ground transfers, Ziyarat tours with experienced guides, and 24/7 assistance during your stay.",
  },
  {
    id: "hotel-reservations",
    title: "Hotel Reservations",
    description:
      "Premium and budget-friendly hotels near Haram Makkah and Masjid-e-Nabawi for your comfort.",
    page: "/services/hotel-reservations",
    details:
      "Choose from luxury, standard, or budget hotels. We book close to the Holy Mosques so you spend less time commuting and more time in worship.",
  },
  {
    id: "luxury-transportation",
    title: "Luxury Transportation",
    description:
      "A fleet including GMCs, Lexus, and Coaster Buses for airport transfers, Ziyarat tours, and city travel.",
    page: "/services/luxury-transportation",
    details:
      "Our vehicles are air-conditioned, well-maintained, and driven by professional drivers who ensure your comfort and safety.",
  },
  {
    id: "ziyarat-guided-tours",
    title: "Ziyarat & Guided Tours",
    description:
      "Organized trips to sacred sites in Makkah, Madinah, and Taif, guided by experienced professionals.",
    page: "/services/ziyarat-guided-tours",
    details:
      "Visit Masjid Quba, Mount Uhud, Masjid Ayesha, and more — our guides share historical insights to enrich your journey.",
  },
];

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(null);

  const toggleService = (id) => setActiveId(activeId === id ? null : id);

  return (
    <section className="relative overflow-hidden py-24 px-6 bg-linear-to-b from-[#f8fff9] to-[#ecf9f2] min-h-screen">
      {/* Decorative circles */}
      <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#ad8f60]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] bg-[#0F5132]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F5132] mb-4">
            Our Core Services
          </h1>
          <p className="text-[#5f4b32] max-w-3xl mx-auto leading-relaxed">
            Explore our premium services, designed for comfort, convenience, and a spiritually fulfilling journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((svc, index) => (
            <motion.div
              key={svc.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white/80 backdrop-blur-lg border ${
                activeId === svc.id ? "border-[#ad8f60] shadow-xl" : "border-[#0F5132]/10 shadow-md"
              } rounded-3xl p-8 cursor-pointer transition-all duration-300`}
              onClick={() => toggleService(svc.id)}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-[#0F5132]">{svc.title}</h3>
                <motion.div
                  animate={{ rotate: activeId === svc.id ? 180 : 0 }}
                  className="text-[#ad8f60] text-lg"
                >
                  <FaChevronDown />
                </motion.div>
              </div>

              {/* Short Description */}
              <p className="mt-3 text-[#5f4b32] leading-relaxed">{svc.description}</p>

              {/* Expanded Details */}
              <AnimatePresence>
                {activeId === svc.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4 }}
                    className="pt-4 border-t border-[#ad8f60]/30 space-y-4"
                  >
                    <p className="text-[#0F5132] leading-relaxed">{svc.details}</p>

                    <div className="flex flex-wrap gap-4 mt-2">
                      <Link
                        href={svc.page}
                        className="px-6 py-2 bg-[#0F5132] hover:bg-[#0b3d25] text-white rounded-lg font-semibold shadow-md transition-all duration-300 text-center"
                      >
                        View Details
                      </Link>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-6 py-2 bg-[#ad8f60] hover:bg-[#927040] text-white rounded-lg font-semibold shadow-md transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleService(svc.id);
                        }}
                      >
                        Close
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


























// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronDown } from "react-icons/fa";
// import Link from "next/link";

// const services = [
//   {
//     id: "umrah-hajj-packages",
//     title: "Umrah & Hajj Packages",
//     description:
//       "Complete arrangements from visa processing to accommodation and transportation in Makkah & Madinah.",
//     page: "/services/umrah-hajj-packages",
//     details:
//       "We take care of everything: visa applications, flights (if needed), hotel stays in Makkah & Madinah, guided rituals, and transport throughout your sacred journey.",
//   },
//   {
//     id: "pilgrimage-assistance",
//     title: "Pilgrimage Assistance",
//     description:
//       "Hotel bookings, transportation, and guided Ziyarat tours ensuring a spiritually fulfilling journey.",
//     page: "/services/pilgrimage-assistance",
//     details:
//       "Our team assists you step–by–step: pre-departure support, on-ground transfers, Ziyarat tours with experienced guides, and 24/7 assistance during your stay.",
//   },
//   {
//     id: "hotel-reservations",
//     title: "Hotel Reservations",
//     description:
//       "Premium and budget-friendly hotels near Haram Makkah and Masjid-e-Nabawi for your comfort.",
//     page: "/services/hotel-reservations",
//     details:
//       "Choose from luxury, standard, or budget hotels. We book close to the Holy Mosques so you spend less time commuting and more time in worship.",
//   },
//   {
//     id: "luxury-transportation",
//     title: "Luxury Transportation",
//     description:
//       "A fleet including GMCs, Lexus, and Coaster Buses for airport transfers, Ziyarat tours, and city travel.",
//     page: "/services/luxury-transportation",
//     details:
//       "Our vehicles are air-conditioned, well-maintained, and driven by professional drivers who ensure your comfort and safety.",
//   },
//   {
//     id: "ziyarat-guided-tours",
//     title: "Ziyarat & Guided Tours",
//     description:
//       "Organized trips to sacred sites in Makkah, Madinah, and Taif, guided by experienced professionals.",
//     page: "/services/ziyarat-guided-tours",
//     details:
//       "Visit Masjid Quba, Mount Uhud, Masjid Ayesha, and more — our guides share historical insights to enrich your journey.",
//   },
// ];

// export default function ServicesPage() {
//   const [activeId, setActiveId] = useState(null);

//   const toggleService = (id) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   return (
//     <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2]">
//       {/* Decorative background circles */}
//       <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#ad8f60]/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] bg-[#0F5132]/5 rounded-full blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F5132] mb-4">
//             Our Core Services
//           </h1>
//           <p className="text-[#5f4b32] max-w-2xl mx-auto leading-relaxed">
//             Explore our premium services, designed for comfort, convenience, and a spiritually fulfilling journey.
//           </p>
//         </motion.div>

//         {/* Service Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((svc, index) => (
//             <motion.div
//               key={svc.id}
//               layout
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               whileHover={{ scale: 1.03 }}
//               className={`relative bg-white/80 backdrop-blur-lg border ${
//                 activeId === svc.id ? "border-[#ad8f60] shadow-lg" : "border-[#0F5132]/10 shadow-md"
//               } rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300`}
//               onClick={() => toggleService(svc.id)}
//             >
//               {/* Header */}
//               <div className="flex justify-between items-center">
//                 <h3 className="text-2xl font-semibold text-[#0F5132]">{svc.title}</h3>
//                 <motion.div
//                   animate={{ rotate: activeId === svc.id ? 180 : 0 }}
//                   className="text-[#ad8f60] text-lg"
//                 >
//                   <FaChevronDown />
//                 </motion.div>
//               </div>

//               {/* Description */}
//               <p className="mt-3 text-[#5f4b32] leading-relaxed">{svc.description}</p>

//               {/* Expanded Details */}
//               <AnimatePresence>
//                 {activeId === svc.id && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                     animate={{ opacity: 1, height: "auto", marginTop: 16 }}
//                     exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="pt-4 border-t border-[#ad8f60]/30 space-y-4"
//                   >
//                     <p className="text-[#0F5132] leading-relaxed">{svc.details}</p>

//                     <div className="flex gap-4">
//                       <Link
//                         href={svc.page}
//                         className="px-6 py-2 bg-[#0F5132] hover:bg-[#0b3d25] text-white rounded-lg font-semibold shadow-md transition-all duration-300 text-center"
//                       >
//                         View Details
//                       </Link>

//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.97 }}
//                         className="px-6 py-2 bg-[#ad8f60] hover:bg-[#927040] text-white rounded-lg font-semibold shadow-md transition-all duration-300"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           toggleService(svc.id);
//                         }}
//                       >
//                         Close
//                       </motion.button>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
