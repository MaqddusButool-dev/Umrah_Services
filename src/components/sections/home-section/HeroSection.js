

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import img from "../../../../public/assets/images/home1.jpg";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    ksaNumber: "",
    country: "",
    date: "",
    time: "",
    pickup: "",
    destination: "",
    vehicle: "",
  });

  const [errors, setErrors] = useState({});

  // Validation logic
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/^\d{10,15}$/.test(formData.whatsapp))
      newErrors.whatsapp = "Enter a valid WhatsApp number (10–15 digits).";
    if (formData.ksaNumber && !/^(05\d{8}|(\+9665\d{8}))$/.test(formData.ksaNumber))
      newErrors.ksaNumber = "Enter a valid KSA number (format: 05XXXXXXXX).";
    if (!formData.date) newErrors.date = "Select a date.";
    if (new Date(formData.date) < new Date().setHours(0, 0, 0, 0))
      newErrors.date = "Date cannot be in the past.";
    if (!formData.time) newErrors.time = "Select a time.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
      setFormData({
        name: "",
        whatsapp: "",
        ksaNumber: "",
        country: "",
        date: "",
        time: "",
        pickup: "",
        destination: "",
        vehicle: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={img}
            alt="Luxury Umrah Transportation"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0F5132]/90 via-[#0F5132]/75 to-[#0F5132]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 grid md:grid-cols-2 items-center gap-10 md:gap-12">
          {/* ---------- Left Content ---------- */}
          <motion.div
            className="text-white text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="uppercase text-[#ad8f60] font-extrabold mb-3 text-xl tracking-widest">
              Hotels • Tourism • Transportation
            </p>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              RIHLAT AL FAKHAMA{" "}
              <span className="text-[#ad8f60]">TRAVELS & TOURS</span>
            </motion.h1>

            <motion.p
              className="text-gray-100 font-medium mb-6 text-sm sm:text-base leading-relaxed max-w-lg md:max-w-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              A trusted travel management company specializing in{" "}
              <span className="text-[#ad8f60] font-extrabold">
                HAJJ, UMRAH, VISA PROCESSING, HOTEL RESERVATIONS
              </span>{" "}
              and <span className="font-medium">Luxury Transportation</span>{" "}
              across Saudi Arabia. Experience seamless, comfortable, and
              spiritually fulfilling journeys with our professional team.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-[#ad8f60] hover:bg-[#b99a6b] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base">
                Explore Our Services
              </button>
              <button className="bg-white text-[#0F5132] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base">
                Book Your Trip
              </button>
            </motion.div>
          </motion.div>

          {/* ---------- Booking Form ---------- */}
          <motion.div
            className="bg-white/95 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm w-full max-w-md mx-auto md:max-w-none border border-gray-100"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F5132] mb-2 text-center md:text-left">
              Book Your Ride
            </h2>
            <p className="text-[#198754] font-medium mb-6 text-center md:text-left">
              24/7 Customer Assistance
            </p>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
                  />
                  {errors.whatsapp && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="ksaNumber"
                  placeholder="KSA Number (05XXXXXXXX)"
                  value={formData.ksaNumber}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
                />
                {errors.ksaNumber && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.ksaNumber}
                  </p>
                )}
              </div>

              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
                  />
                  {errors.date && (
                    <p className="text-red-600 text-xs mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
                  />
                  {errors.time && (
                    <p className="text-red-600 text-xs mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="pickup"
                  placeholder="Pick Up Location"
                  value={formData.pickup}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
                />
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
                />
              </div>

              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
              >
                <option value="">Select Vehicle</option>
                <option>CAMERY 4 SEATER</option>
                <option>STARIA 7 SEATER</option>
                <option>GMC 7 SEATER</option>
                <option>HIACE 10 SEATER</option>
                <option>COASTER 17 SEATER</option>
                <option>SONATA 4 SEATER</option>
                <option>HYUNDAI H1 7 SEATER</option>
                <option>CHEVROLET 7 SEATER</option>
              </select>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-[#0F5132] to-[#2EB67D] text-white font-semibold py-2 rounded-md transition transform hover:scale-[1.03] text-sm sm:text-base shadow-md"
              >
                Submit Booking
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
























// // "use client";

// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import img from "@/assets/images/home1.jpg";

// // export default function HeroSection() {
// //   return (
// //     <div className="font-sans bg-white text-gray-800 overflow-hidden">
// //       {/* ---------- Hero Section ---------- */}
// //       <section className="relative min-h-[90vh] flex items-center justify-center">
// //         {/* Optimized Next.js Background Image */}
// //         <div className="absolute inset-0">
// //           <Image
// //             src={img}
// //             alt="Umrah Cab Service"
// //             fill
// //             className="object-cover object-center"
// //             priority
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-r from-[#0F5132]/90 via-[#0F5132]/75 to-[#0F5132]/60" />
// //         </div>

// //         {/* Content */}
// //         <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-0 grid md:grid-cols-2 items-center gap-10 md:gap-12">
// //           {/* ---------- Left Content ---------- */}
// //           <motion.div
// //             className="text-white text-center md:text-left"
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //           >
// //             <p className="uppercase text-[#ad8f60] font-semibold mb-3 text-sm sm:text-base tracking-widest">
// //               Most Trusted Umrah Cab Service
// //             </p>

// //             <motion.h1
// //               className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug sm:leading-tight drop-shadow-lg"
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
// //             >
// //               Luxury Umrah Taxi Service in{" "}
// //               <span className="text-[#ad8f60]">Saudi Arabia</span>
// //             </motion.h1>

// //             <motion.p
// //               className="text-gray-100 font-medium mb-6 text-sm sm:text-base leading-relaxed max-w-lg md:max-w-none"
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
// //             >
// //               Looking for a reliable Umrah taxi service in Saudi Arabia? At{" "}
// //               <span className="text-[#20C997] font-semibold">
// //                 Umrah Cab Online
// //               </span>
// //               , we offer affordable and luxury transfers — from Jeddah Airport
// //               (JED) to Makkah and Madinah. Enjoy safe, comfortable, and 24/7
// //               available rides with professional drivers.
// //             </motion.p>

// //             <motion.div
// //               className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.6 }}
// //             >
// //               <button className="bg-[#ad8f60] hover:bg-[#b99a6b] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base">
// //                 About Our Service
// //               </button>

// //               <button className="bg-white text-[#0F5132] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base">
// //                 Book Your Umrah Taxi
// //               </button>
// //             </motion.div>
// //           </motion.div>

// //           {/* ---------- Booking Form ---------- */}
// //           <motion.div
// //             className="bg-white/95 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm w-full max-w-md mx-auto md:max-w-none border border-gray-100"
// //             initial={{ opacity: 0, x: 60 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
// //           >
// //             <h2 className="text-xl sm:text-2xl font-bold text-[#0F5132] mb-2 text-center md:text-left">
// //               Book Your Umrah Cab Online
// //             </h2>
// //             <p className="text-[#198754] font-medium mb-6 text-center md:text-left">
// //               24/7 Availability
// //             </p>

// //             <form className="space-y-3">
// //               {/* Row 1 */}
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //                 <input
// //                   type="text"
// //                   placeholder="Your Name"
// //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// //                   required
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="WhatsApp Number"
// //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// //                   required
// //                 />
// //               </div>

// //               {/* Row 2 (New Field for KSA Number) */}
// //               <input
// //                 type="text"
// //                 placeholder="KSA Number"
// //                 className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// //               />

// //               {/* Row 3 */}
// //               <input
// //                 type="text"
// //                 placeholder="Country"
// //                 className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// //               />

// //               {/* Row 4 */}
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //                 <input
// //                   type="date"
// //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// //                 />
// //                 <input
// //                   type="time"
// //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// //                 />
// //               </div>

// //               {/* Row 5 */}
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //                 <input
// //                   type="text"
// //                   placeholder="Pick Up Location"
// //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="Destination"
// //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// //                 />
// //               </div>

// //               {/* Row 6 */}
// //               <select className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm">
// //                 <option>Select Vehicle</option>
// //                 <option>Economy</option>
// //                 <option>Luxury</option>
// //                 <option>Van</option>
// //               </select>

// //               {/* Button */}
// //               <button
// //                 type="submit"
// //                 className="w-full bg-gradient-to-r from-[#0F5132] to-[#2EB67D] text-white font-semibold py-2 rounded-md transition transform hover:scale-[1.03] text-sm sm:text-base shadow-md"
// //               >
// //                 Book Now
// //               </button>
// //             </form>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

