// "use client";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] overflow-hidden pt-20 pb-40 sm:pb-52">
//       {/* Decorative background circle */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-green-100 rounded-full blur-3xl opacity-40" />

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-3xl sm:text-5xl font-extrabold text-[#0F5132] leading-tight max-w-2xl"
//         >
//           Book Your Ride With Comfort & Convenience
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-gray-700 text-base sm:text-lg mt-4 max-w-xl"
//         >
//           Experience a seamless ride experience with our professional drivers and modern fleet — fast, easy, and reliable.
//         </motion.p>

//         {/* Call to action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mt-6"
//         >
//           <button className="bg-gradient-to-r from-[#0F5132] to-[#2EB67D] text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:scale-[1.05] transition-transform duration-300">
//             Explore Rides
//           </button>
//         </motion.div>
//       </div>

//       {/* Floating Booking Form */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="absolute left-1/2 bottom-[-8rem] sm:bottom-[-6rem] transform -translate-x-1/2 w-[90%] sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%] bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-green-100"
//       >
//         <h3 className="text-xl sm:text-2xl font-bold text-[#0F5132] text-center mb-4">
//           Booking Form
//         </h3>

//         <form className="flex flex-col gap-4 sm:gap-5">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none transition-all text-sm sm:text-base"
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none transition-all text-sm sm:text-base"
//             />
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="text"
//               placeholder="Pickup Location"
//               className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none transition-all text-sm sm:text-base"
//             />
//             <input
//               type="text"
//               placeholder="Dropoff Location"
//               className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none transition-all text-sm sm:text-base"
//             />
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="date"
//               className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none transition-all text-sm sm:text-base"
//             />
//             <input
//               type="time"
//               className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none transition-all text-sm sm:text-base"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#0F5132] to-[#2EB67D] text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300 text-sm sm:text-base"
//           >
//             Submit Booking Request
//           </button>

//           <p className="text-center text-xs text-gray-500 mt-2">
//             This will be added to your cart. Review and complete on WhatsApp.
//           </p>
//         </form>
//       </motion.div>
//     </section>
//   );
// }

























"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import img from "../../../../public/assets/images/home1.jpg";

export default function HeroSection() {
  const router = useRouter();
  const { addToCart } = useCart();
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
  const [showSuccess, setShowSuccess] = useState(false);

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
      // Determine vehicle price based on selection
      const vehiclePrices = {
        "CAMERY 4 SEATER": "150",
        "STARIA 7 SEATER": "250",
        "GMC 7 SEATER": "280",
        "HIACE 10 SEATER": "350",
        "COASTER 17 SEATER": "500",
        "SONATA 4 SEATER": "140",
        "HYUNDAI H1 7 SEATER": "240",
        "CHEVROLET 7 SEATER": "260",
      };

      // Create booking item
      const bookingItem = {
        vehicleName: formData.vehicle || "CAMERY 4 SEATER",
        vehicleImage: "/assets/images/camry.png",
        price: vehiclePrices[formData.vehicle] || "150",
        name: formData.name,
        email: formData.whatsapp + "@whatsapp.user",
        phone: formData.whatsapp,
        pickupLocation: formData.pickup,
        dropoffLocation: formData.destination,
        pickupDate: formData.date,
        pickupTime: formData.time,
        passengers: "1",
        specialRequests: `Country: ${formData.country}${formData.ksaNumber ? `, KSA Number: ${formData.ksaNumber}` : ''}`,
        bookingDate: new Date().toISOString(),
      };

      // Add to cart
      addToCart(bookingItem);

      // Show success message
      setShowSuccess(true);

      // Reset form
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

      // Redirect to cart after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        router.push("/cart");
      }, 2000);
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
      <section className="relative min-h-[92vh] flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={img}
            alt="Luxury Umrah Transportation"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F5132]/95 via-[#0F5132]/85 to-[#0F5132]/70" />
          
          {/* Animated overlay patterns */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#ad8f60] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 grid md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* ---------- Left Content ---------- */}
          <motion.div
            className="text-white text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span className="bg-[#ad8f60] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ Quality Travel Services
              </span>
            </motion.div>

            <p className="uppercase text-[#ad8f60] font-bold mb-3 text-base tracking-wider">
              Hotels • Tourism • Transportation
            </p>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              RIHLAT AL FAKHAMA{" "}
              <span className="text-[#ad8f60] block mt-2">TRAVELS & TOURS</span>
            </motion.h1>

            <motion.p
              className="text-white/90 font-medium mb-8 text-base sm:text-lg leading-relaxed max-w-lg md:max-w-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              A trusted travel management company specializing in{" "}
              <span className="text-[#ad8f60] font-bold">
                HAJJ, UMRAH, VISA PROCESSING, HOTEL RESERVATIONS
              </span>{" "}
              and <span className="font-semibold text-white">Luxury Transportation</span>{" "}
              across Saudi Arabia. Experience seamless, comfortable, and
              spiritually fulfilling journeys with our professional team.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-[#ad8f60] text-xl">✓</span>
                <span className="text-sm font-medium">24/7 Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-[#ad8f60] text-xl">✓</span>
                <span className="text-sm font-medium">Licensed Drivers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-[#ad8f60] text-xl">✓</span>
                <span className="text-sm font-medium">Best Rates</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/services">
                <button className="bg-gradient-to-r from-[#ad8f60] to-[#d4a574] hover:from-[#d4a574] hover:to-[#ad8f60] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-sm sm:text-base w-full sm:w-auto">
                  Explore Our Services
                </button>
              </Link>
              <Link href="/taxi">
                <button className="bg-white text-[#0F5132] hover:bg-[#F7F9F5] px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-sm sm:text-base w-full sm:w-auto border-2 border-white">
                  Book Your Taxi
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ---------- Booking Form ---------- */}
          <motion.div
            className="bg-white/98 rounded-3xl shadow-2xl p-6 sm:p-8 backdrop-blur-md w-full max-w-md mx-auto md:max-w-none border-2 border-[#ad8f60]/30"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          >
            {showSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Booking Added!
                </h3>
                <p className="text-gray-600">
                  Redirecting to your bookings...
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F5132] mb-2 text-center md:text-left">
                  Quick Booking Form
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
                className="w-full bg-gradient-to-r from-[#0F5132] to-[#2EB67D] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl text-sm sm:text-base shadow-md"
              >
                Submit Booking Request
              </button>

              <p className="text-center text-xs text-gray-500 mt-2">
                This will be added to your cart. Review and complete on WhatsApp.
              </p>
              </form>
              </>
              
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
























// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import img from "@/assets/images/home1.jpg";

// // // export default function HeroSection() {
// // //   return (
// // //     <div className="font-sans bg-white text-gray-800 overflow-hidden">
// // //       {/* ---------- Hero Section ---------- */}
// // //       <section className="relative min-h-[90vh] flex items-center justify-center">
// // //         {/* Optimized Next.js Background Image */}
// // //         <div className="absolute inset-0">
// // //           <Image
// // //             src={img}
// // //             alt="Umrah Cab Service"
// // //             fill
// // //             className="object-cover object-center"
// // //             priority
// // //           />
// // //           <div className="absolute inset-0 bg-gradient-to-r from-[#0F5132]/90 via-[#0F5132]/75 to-[#0F5132]/60" />
// // //         </div>

// // //         {/* Content */}
// // //         <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-0 grid md:grid-cols-2 items-center gap-10 md:gap-12">
// // //           {/* ---------- Left Content ---------- */}
// // //           <motion.div
// // //             className="text-white text-center md:text-left"
// // //             initial={{ opacity: 0, x: -50 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // //           >
// // //             <p className="uppercase text-[#ad8f60] font-semibold mb-3 text-sm sm:text-base tracking-widest">
// // //               Most Trusted Umrah Cab Service
// // //             </p>

// // //             <motion.h1
// // //               className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug sm:leading-tight drop-shadow-lg"
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
// // //             >
// // //               Luxury Umrah Taxi Service in{" "}
// // //               <span className="text-[#ad8f60]">Saudi Arabia</span>
// // //             </motion.h1>

// // //             <motion.p
// // //               className="text-gray-100 font-medium mb-6 text-sm sm:text-base leading-relaxed max-w-lg md:max-w-none"
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
// // //             >
// // //               Looking for a reliable Umrah taxi service in Saudi Arabia? At{" "}
// // //               <span className="text-[#20C997] font-semibold">
// // //                 Umrah Cab Online
// // //               </span>
// // //               , we offer affordable and luxury transfers — from Jeddah Airport
// // //               (JED) to Makkah and Madinah. Enjoy safe, comfortable, and 24/7
// // //               available rides with professional drivers.
// // //             </motion.p>

// // //             <motion.div
// // //               className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.6 }}
// // //             >
// // //               <button className="bg-[#ad8f60] hover:bg-[#b99a6b] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base">
// // //                 About Our Service
// // //               </button>

// // //               <button className="bg-white text-[#0F5132] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base">
// // //                 Book Your Umrah Taxi
// // //               </button>
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* ---------- Booking Form ---------- */}
// // //           <motion.div
// // //             className="bg-white/95 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm w-full max-w-md mx-auto md:max-w-none border border-gray-100"
// // //             initial={{ opacity: 0, x: 60 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
// // //           >
// // //             <h2 className="text-xl sm:text-2xl font-bold text-[#0F5132] mb-2 text-center md:text-left">
// // //               Book Your Umrah Cab Online
// // //             </h2>
// // //             <p className="text-[#198754] font-medium mb-6 text-center md:text-left">
// // //               24/7 Availability
// // //             </p>

// // //             <form className="space-y-3">
// // //               {/* Row 1 */}
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Your Name"
// // //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// // //                   required
// // //                 />
// // //                 <input
// // //                   type="text"
// // //                   placeholder="WhatsApp Number"
// // //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// // //                   required
// // //                 />
// // //               </div>

// // //               {/* Row 2 (New Field for KSA Number) */}
// // //               <input
// // //                 type="text"
// // //                 placeholder="KSA Number"
// // //                 className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// // //               />

// // //               {/* Row 3 */}
// // //               <input
// // //                 type="text"
// // //                 placeholder="Country"
// // //                 className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// // //               />

// // //               {/* Row 4 */}
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// // //                 <input
// // //                   type="date"
// // //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// // //                 />
// // //                 <input
// // //                   type="time"
// // //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// // //                 />
// // //               </div>

// // //               {/* Row 5 */}
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Pick Up Location"
// // //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// // //                 />
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Destination"
// // //                   className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm"
// // //                 />
// // //               </div>

// // //               {/* Row 6 */}
// // //               <select className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#20C997] outline-none text-sm">
// // //                 <option>Select Vehicle</option>
// // //                 <option>Economy</option>
// // //                 <option>Luxury</option>
// // //                 <option>Van</option>
// // //               </select>

// // //               {/* Button */}
// // //               <button
// // //                 type="submit"
// // //                 className="w-full bg-gradient-to-r from-[#0F5132] to-[#2EB67D] text-white font-semibold py-2 rounded-md transition transform hover:scale-[1.03] text-sm sm:text-base shadow-md"
// // //               >
// // //                 Book Now
// // //               </button>
// // //             </form>
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

