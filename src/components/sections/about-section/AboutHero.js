"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "../../../../public/assets/images/about.jpg";

export default function AboutHero() {
  return (
    <section className="relative min-h-[30vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Luxury Taxi Background"
          fill
          className="object-cover brightness-90"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0F5132]/90 via-[#0F5132]/75 to-[#0F5132]/45"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <p className="text-white font-bold uppercase tracking-widest mb-3 drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]">
            RIHLAT AL FAKHAMA TRAVELS & TOURS
          </p>

          {/* --- Main Heading (2 Lines) --- */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-4 drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
            EXPERIENCE{" "}
            <span className="text-[#C6A654] drop-shadow-[0_1px_6px_rgba(198,166,84,0.6)]">
              LUXURY, COMFORT & SAFE RIDES
            </span>
            <br /> EVERY STEP OF YOUR JOURNEY
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] max-w-2xl mx-auto">
            Enjoy stress-free transfers between Jeddah, Makkah, and Madinah with
            professional drivers, modern vehicles, and guaranteed on-time
            service.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#booking"
              className="inline-block bg-linear-to-r from-[#C6A654] to-[#AD8F60] hover:from-[#AD8F60] hover:to-[#C6A654] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Now
            </a>
            <a
              href="#contact"
              className="inline-block bg-white text-[#0F5132] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}














// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import heroImg from "../../../../public/assets/images/about.jpg";

// export default function AboutHero() {
//   return (
//     <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src={heroImg}
//           alt="Luxury Taxi Background"
//           fill
//           className="object-cover"
//           priority
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-linear-to-r from-[#0F5132]/85 to-[#0F5132]/45"></div>
//       </div>

//       {/*  Text Content */}
//       <div className="relative max-w-7xl mx-auto px-6 py-20 text-white z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="md:max-w-2xl"
//         >
//           <p className="text-[#b99a6b] font-bold uppercase tracking-widest mb-3">
//             Trusted Umrah Taxi & Transfer Services
//           </p>

//           <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
//             LUXURY, SAFE & PUNCTUAL RIDES{" "}
//             <span className="text-[#b99a6b]">EVERY STEP</span> OF THE WAY
//           </h1>

//           <div className="flex gap-4 flex-wrap">
//             <a
//               href="#booking"
//               className="inline-block bg-[#ad8f60] hover:bg-[#b99a6b] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//             >
//               Book Now
//             </a>
//             <a
//               href="#contact"
//               className="inline-block bg-white text-[#0F5132] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
//             >
//               Contact Us
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
