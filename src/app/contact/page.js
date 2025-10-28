"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[700px] bg-linear-to-br from-[#e8f7ef] via-[#f5efe6] to-[#f8f5f0] py-20"
    >
      {/*Background Image */}
      <Image
        src="/assets/images/about.jpg"
        alt="Contact background"
        fill
        priority
        className="absolute inset-0 object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f5132]/60 backdrop-blur-[1px] z-10" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6 lg:px-12 gap-12 z-20">
        {/* ---------- Left Content ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#C19A6B] drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
            GET IN TOUCH
          </h2>

          <p className="text-gray-100 leading-relaxed mb-8 max-w-lg">
            At <span className="text-[#C19A6B] font-semibold">Saudia Taxi</span>,
            we’re dedicated to providing exceptional Umrah taxi service and
            customer support. Our team is available 24/7 to assist with
            inquiries, bookings, and travel guidance.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#C19A6B]" /> +1 (914) 904-7760
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#C19A6B]" /> info@saudiataxi.com
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#C19A6B]" /> Al Mursalat, Makkah
              24243, Saudi Arabia
            </p>
          </div>

          <p className="mt-8 text-gray-200">
            Stay connected with us on social media for updates and promotions:
          </p>
          <div className="flex gap-4 mt-4">
            {[
              { icon: FaFacebookF, href: "#" },
              { icon: FaYoutube, href: "#" },
              { icon: FaGoogle, href: "#" },
              { icon: FaInstagram, href: "#" },
            ].map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="bg-[#C19A6B] hover:bg-[#b28a5f] p-3 rounded-full text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ---------- Right Form ---------- */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[#0F5132] text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-[#C19A6B] focus:outline-none focus:border-[#0F5132] py-2 bg-transparent"
              />
            </div>
            <div>
              <label className="text-[#0F5132] text-sm font-semibold">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-[#C19A6B] focus:outline-none focus:border-[#0F5132] py-2 bg-transparent"
              />
            </div>
            <div>
              <label className="text-[#0F5132] text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border-b-2 border-[#C19A6B] focus:outline-none focus:border-[#0F5132] py-2 bg-transparent"
              />
            </div>
            <div>
              <label className="text-[#0F5132] text-sm font-semibold">
                Phone No
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-[#C19A6B] focus:outline-none focus:border-[#0F5132] py-2 bg-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[#0F5132] text-sm font-semibold">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border-b-2 border-[#C19A6B] focus:outline-none focus:border-[#0F5132] py-2 bg-transparent"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-[#0F5132] hover:bg-[#0b3d25] text-white font-semibold py-3 rounded-lg shadow-md transition-all"
          >
            SUBMIT
          </button>
        </motion.form>
      </div>
    </section>
  );
}























// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaYoutube,
//   FaGoogle,
//   FaInstagram,
// } from "react-icons/fa";
// import bgImg from "../../../public/assets/images/about_gmc.jpg"; 

// export default function Contact() {
//   return (
//     <section
//       className="relative bg-linear-to-br from-[#e8f7ef] via-[#f5efe6] to-[#f8f5f0] py-20"
//     >
//       {/* Background Image */}
//       <Image
//         src={bgImg.src}
//         alt="Contact background"
//         fill
//         priority
//         className="absolute inset-0 object-cover object-center -z-10"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#0f5132]/70 backdrop-blur-[1px]" />

//       <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6 lg:px-12 gap-12 z-10">
//         {/* ---------- Left Content ---------- */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex-1 text-white"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#C19A6B]">
//             Get in Touch
//           </h2>

//           <p className="text-gray-100 leading-relaxed mb-8 max-w-lg">
//             At <span className="text-[#C19A6B] font-semibold">Saudia Taxi</span>, 
//             we’re dedicated to providing exceptional Umrah taxi service and 
//             customer support. Our team is available 24/7 to assist with 
//             inquiries, bookings, and travel guidance.
//           </p>

//           <div className="space-y-4">
//             <p className="flex items-center gap-3">
//               <FaPhoneAlt className="text-[#C19A6B]" /> +1 (914) 904-7760
//             </p>
//             <p className="flex items-center gap-3">
//               <FaEnvelope className="text-[#C19A6B]" /> info@saudiataxi.com
//             </p>
//             <p className="flex items-center gap-3">
//               <FaMapMarkerAlt className="text-[#C19A6B]" /> Al Mursalat, Makkah 24243, Saudi Arabia
//             </p>
//           </div>

//           <p className="mt-8 text-gray-200">
//             Stay connected with us on social media for updates and promotions:
//           </p>
//           <div className="flex gap-4 mt-4">
//             <a
//               href="#"
//               className="bg-[#C19A6B] hover:bg-[#b28a5f] p-3 rounded-full text-white transition"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="#"
//               className="bg-[#C19A6B] hover:bg-[#b28a5f] p-3 rounded-full text-white transition"
//             >
//               <FaYoutube />
//             </a>
//             <a
//               href="#"
//               className="bg-[#C19A6B] hover:bg-[#b28a5f] p-3 rounded-full text-white transition"
//             >
//               <FaGoogle />
//             </a>
//             <a
//               href="#"
//               className="bg-[#C19A6B] hover:bg-[#b28a5f] p-3 rounded-full text-white transition"
//             >
//               <FaInstagram />
//             </a>
//           </div>
//         </motion.div>

//         {/* ---------- Right Form ---------- */}
//         <motion.form
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex-1 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="text-[#0F5132] text-sm font-semibold">Name</label>
//               <input
//                 type="text"
//                 className="w-full border-b-2 border-[#C19A6B] focus:outline-none focus:border-[#0F5132] py-2 bg-transparent"
//               />
//             </div>
//             <div>
//               <label className="text-[#0F5132] text-sm font-semibold">Last Name</label>
//               <input
//                 type="text"
//                 className="w-full border-b-2 border-[#C19A6B] focus:outline-none focus:border-[#0F5132] py-2 bg-transparent"
//               />
//             </div>
//             <div>
//               <label className="text-[#0F5132] text-sm font-semibold">Email Address</label>
//               <input
//                 type="email"
//                 className="w-full border-b-2 border-[#C19A6B] focus:outline-none focus:border-[#0F5132] py-2 bg-transparent"
//               />
//             </div>
//             <div>
//               <label className="text-[#0F5132] text-sm font-semibold">Phone No</label>
//               <input
//                 type="text"
//                 className="w-full border-b-2 border-[#C19A6B] focus:outline-none focus:border-[#0F5132] py-2 bg-transparent"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="text-[#0F5132] text-sm font-semibold">Message</label>
//               <textarea
//                 rows="4"
//                 placeholder="Write your message..."
//                 className="w-full border-b-2 border-[#C19A6B] focus:outline-none focus:border-[#0F5132] py-2 bg-transparent"
//               ></textarea>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="mt-6 w-full bg-[#0F5132] hover:bg-[#0b3d25] text-white font-semibold py-3 rounded-lg shadow-md transition-all"
//           >
//             SUBMIT
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   );
// }
