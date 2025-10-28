"use client";

import { motion } from "framer-motion";
import { FaCarSide, FaClock, FaUserTie, FaDollarSign } from "react-icons/fa";
import Image from "next/image";
import about from "../../../../public/assets/images/image.png";

export default function AboutSection() {
  const features = [
    { icon: <FaCarSide />, label: "Luxury Cars" },
    { icon: <FaClock />, label: "24/7 Service" },
    { icon: <FaUserTie />, label: "Expert Drivers" },
    { icon: <FaDollarSign />, label: "Fair Pricing" },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f8fff9] to-[#ecf9f2] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-20 lg:gap-28">

        {/* ---------- IMAGE SECTION ---------- */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative group">
            <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#20C997]/40 rounded-3xl -z-10"></div>

            <div className="overflow-hidden rounded-3xl shadow-2xl relative">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                <Image
                  src={about.src}
                  alt="Luxury Taxi"
                  width={600}
                  height={460}
                  className="w-full h-[460px] object-cover rounded-3xl transition duration-500 ease-in-out group-hover:scale-105"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-linear-to-t from-[#0F5132]/70 via-transparent to-transparent rounded-3xl"></div>
            </div>

            <motion.div
              className="absolute bottom-6 left-6 bg-white/95 shadow-xl px-8 py-4 rounded-2xl border-l-[6px] border-[#b99a6b] backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-[#0F5132] font-semibold text-lg">
                Providing <span className="text-[#b99a6b]">Comfort</span> and Care, Every Step
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ---------- CONTENT SECTION ---------- */}
        <motion.div
          className="w-full lg:w-1/2 space-y-3"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-3xl font-bold text-[#0F5132] leading-snug">
            EXPERIENCE <span className="text-[#b99a6b]">COMFORT & TRUST</span> <br /> IN EVERY RIDE
          </h2>

          <motion.div
            className="w-24 h-[3px] bg-[#b99a6b] rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          ></motion.div>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            <span className="text-[#b99a6b] font-semibold">Rihlat Al Fakhama Travels & Tours</span> is a trusted name in
            Saudi Arabia for premium Hajj, Umrah, and tourism services. From luxury transportation to hotel bookings, we
            ensure your journey is smooth, safe, and spiritually fulfilling. <br /> Our expert chauffeurs and modern
            fleet guarantee comfort and reliability at every step of your holy trip.
          </p>

          {/* ---------- FEATURES ---------- */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow-lg border border-[#20C997]/20 hover:border-[#b99a6b]/60 hover:-translate-y-1 hover:shadow-[#20C997]/30 transition-all duration-400"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
              >
                <div className="text-[#b99a6b] text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-800">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* ---------- CTA ---------- */}
          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <a
              href="#booking"
              className="inline-block bg-linear-to-r from-[#0F5132] to-[#2EB67D] text-white font-semibold px-10 py-3 rounded-full shadow-md hover:shadow-[#20C997]/40 transition-all duration-300"
            >
              Book Your Ride Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}




























// "use client";
// import { motion } from "framer-motion";
// import { FaCarSide, FaClock, FaUserTie, FaDollarSign } from "react-icons/fa";
// import Image from "next/image";

// import about from "@/assets/images/home1.jpg";

// export default function AboutSection() {
//   const features = [
//     { icon: <FaCarSide />, label: "Luxury Cars" },
//     { icon: <FaClock />, label: "24/7 Service" },
//     { icon: <FaUserTie />, label: "Expert Drivers" },
//     { icon: <FaDollarSign />, label: "Fair Pricing" },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-linear-to-b from-[#f8fff9] to-[#ecf9f2] py-20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-20 lg:gap-28">

//         {/* ---------- IMAGE SECTION ---------- */}
//         <motion.div
//           className="relative w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <div className="relative group">
//             <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#20C997]/40 rounded-3xl -z-10"></div>

//             <div className="overflow-hidden rounded-3xl shadow-2xl relative">
//               <motion.img
//                 src={about}
//                 alt="Luxury Taxi"
//                 className="w-full h-[460px] object-cover rounded-3xl transform transition duration-500 ease-in-out group-hover:scale-105"
//                 whileHover={{ scale: 1.05 }}
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-[#0F5132]/70 via-transparent to-transparent rounded-3xl"></div>
//             </div>

//             <motion.div
//               className="absolute bottom-6 left-6 bg-white/95 shadow-xl px-8 py-4 rounded-2xl border-l-[6px] border-[#b99a6b] backdrop-blur-md"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
//             >
//               <p className="text-[#0F5132] font-poppins font-semibold text-lg">
//                 Providing <span className="text-[#b99a6b]">Comfort</span> and Care, Every Step
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* ---------- CONTENT SECTION ---------- */}
//         <motion.div
//           className="w-full lg:w-1/2 space-y-3"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <h2 className="text-4xl md:text-3xl  font-bold text-[#0F5132] leading-snug">
//             EXPERIENCE <span className="text-[#b99a6b]">COMFORT & TRUST</span> <br /> IN EVERY RIDE
//           </h2>

//           <motion.div
//             className="w-24 h-[3px] bg-[#b99a6b] rounded-full"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//           ></motion.div>

//           <p className="text-gray-700  leading-relaxed text-base md:text-lg">
//             <span className="text-[#b99a6b] font-semibold">Umrah Taxi Service</span> provides smooth, reliable, and
//             comfortable travel solutions for pilgrims. We ensure peace, safety, and convenience — every step of the way
//             toward the Holy Cities. <br /> Our expert chauffeurs and premium vehicles promise timely service,
//             respectful interactions, and a luxurious experience designed for your sacred journey.
//           </p>

//           {/* ---------- FEATURES ---------- */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
//             {features.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 className="flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow-lg border border-[#20C997]/20 hover:border-[#b99a6b]/60 hover:-translate-y-1 hover:shadow-[#20C997]/30 transition-all duration-400"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
//               >
//                 <div className="text-[#b99a6b] text-3xl mb-2 animate-pulse-slow">
//                   {item.icon}
//                 </div>
//                 <p className="text-sm font-semibold text-gray-800">{item.label}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* ---------- CTA ---------- */}
//           <motion.div
//             className="pt-2"
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
//           >
//             <a
//               href="#booking"
//               className="inline-block bg-linear-to-r from-[#0F5132] to-[#2EB67D] text-white  font-semibold px-10 py-3 rounded-full shadow-md hover:shadow-[#20C997]/40 transition-all duration-300"
//             >
//               Book Your Ride Now
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
