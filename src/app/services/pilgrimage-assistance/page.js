"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaCar,
  FaHotel,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaClock,
  FaStar,
  FaWhatsapp,
  FaPassport,
  FaUserTie,
  FaUmbrella,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaPassport,
    title: "Visa Assistance",
    description: "Help with Umrah and Hajj visa applications and processing for a smooth journey.",
    features: [
      "Document verification",
      "Application submission",
      "Status tracking",
      "Fast processing"
    ]
  },
  {
    id: 2,
    icon: FaCar,
    title: "Airport Transfers",
    description: "Comfortable pickup and drop-off service from airports to your accommodation.",
    features: [
      "Meet & greet service",
      "Luggage assistance",
      "Direct hotel transfer",
      "Professional drivers"
    ]
  },
  {
    id: 3,
    icon: FaHotel,
    title: "Accommodation Booking",
    description: "Luxury and budget hotels near Haram Makkah and Masjid-e-Nabawi.",
    features: [
      "Close to Holy sites",
      "All price ranges",
      "Verified hotels",
      "Easy check-in"
    ]
  },
  {
    id: 4,
    icon: FaMapMarkedAlt,
    title: "Ziyarat Tours",
    description: "Guided tours to sacred historical sites with knowledgeable guides.",
    features: [
      "Expert guides",
      "Historical insights",
      "Comfortable transport",
      "Flexible schedule"
    ]
  },
  {
    id: 5,
    icon: FaUserTie,
    title: "Personal Guide",
    description: "Dedicated guide to assist throughout your pilgrimage journey.",
    features: [
      "24/7 availability",
      "Multilingual support",
      "Local knowledge",
      "Personalized service"
    ]
  },
  {
    id: 6,
    icon: FaPhoneAlt,
    title: "24/7 Support",
    description: "Round-the-clock customer support for any assistance you need.",
    features: [
      "Emergency contact",
      "WhatsApp support",
      "Quick response",
      "Problem resolution"
    ]
  },
];

const packages = [
  {
    id: 1,
    name: "Economy Package",
    price: "Budget Friendly",
    duration: "7-10 Days",
    icon: FaUmbrella,
    iconColor: "from-blue-500 to-blue-600",
    features: [
      "3-Star Hotel near Haram",
      "Airport transfers",
      "Basic Ziyarat tour",
      "24/7 support",
      "Prayer mat & Zamzam"
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Standard Package",
    price: "Mid Range",
    duration: "10-14 Days",
    icon: FaStar,
    iconColor: "from-[#ad8f60] to-[#d4a574]",
    features: [
      "4-Star Hotel close to Haram",
      "Airport transfers",
      "Complete Ziyarat tours",
      "Personal guide",
      "SIM card included",
      "Umrah kit"
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Deluxe Package",
    price: "Luxury",
    duration: "14-21 Days",
    icon: FaStar,
    iconColor: "from-amber-400 to-amber-600",
    features: [
      "5-Star Hotel with Haram view",
      "Private car transfers",
      "VIP Ziyarat tours",
      "Dedicated guide",
      "Fine dining options",
      "Quality Umrah kit",
      "Laundry service"
    ],
    popular: false,
  },
];

export default function PilgrimageAssistancePage() {
  return (
    <section className="bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F5132] to-[#198754] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="mx-auto w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
              <FaHandsHelping className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Pilgrimage Assistance
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Complete support for your Hajj and Umrah journey from planning to completion. We handle everything so you can focus on your worship.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#services"
                className="bg-white text-[#0F5132] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#ad8f60] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </a>
              <a
                href="https://wa.me/03179369176"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#20b357] transition-all duration-300 flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Get Assistance
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Services We Provide */}
        <div id="services" className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0F5132] mb-4">
              Complete Pilgrimage Support
            </h2>
            <p className="text-[#5f4b32] max-w-2xl mx-auto">
              From arrival to departure, we provide comprehensive assistance for your sacred journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#0F5132]/10 hover:border-[#ad8f60] h-full">
                  <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="text-white text-3xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0F5132] mb-3 group-hover:text-[#ad8f60] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#5f4b32] mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-[#0F5132]">
                        <FaCheckCircle className="text-[#198754] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Assistance Packages */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-[#0F5132] text-center mb-4">
            Assistance Packages
          </h2>
          <p className="text-center text-[#5f4b32] mb-12 max-w-2xl mx-auto">
            Choose the package that best suits your needs and budget
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="relative"
              >
                <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  pkg.popular ? "border-[#ad8f60]" : "border-[#0F5132]/10"
                } hover:border-[#ad8f60] h-full flex flex-col`}>
                  {pkg.popular && (
                    <div className="bg-[#ad8f60] text-white text-center py-2 font-bold text-sm flex items-center justify-center gap-2">
                      <FaStar /> MOST POPULAR
                    </div>
                  )}
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="text-center mb-6">
                      <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${pkg.iconColor} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                        <pkg.icon className="text-3xl text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F5132] mb-2">
                        {pkg.name}
                      </h3>
                      <div className="text-[#ad8f60] font-bold text-xl mb-1">{pkg.price}</div>
                      <div className="text-sm text-[#5f4b32] flex items-center justify-center gap-2">
                        <FaClock />
                        {pkg.duration}
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <FaCheckCircle className="text-[#198754] mt-0.5 flex-shrink-0" />
                          <span className="text-[#0F5132]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://wa.me/03179369176"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full ${
                        pkg.popular
                          ? "bg-gradient-to-r from-[#ad8f60] to-[#d4a574]"
                          : "bg-gradient-to-r from-[#0F5132] to-[#198754]"
                      } text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-all duration-300 shadow-md`}
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* How We Help */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-[#0F5132]/10 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#0F5132] text-center mb-12">
            How We Assist You
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Pre-Departure", desc: "Visa, documentation & planning assistance" },
              { step: "2", title: "Arrival", desc: "Airport pickup and hotel check-in support" },
              { step: "3", title: "During Stay", desc: "24/7 support, tours & guidance" },
              { step: "4", title: "Departure", desc: "Checkout assistance and airport transfer" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-[#0F5132] mb-2">{item.title}</h3>
                <p className="text-[#5f4b32] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Why Choose Us */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-br from-[#F7F9F5] to-white rounded-3xl p-12 border border-[#0F5132]/10 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#0F5132] text-center mb-12">
            Why Choose Our Assistance?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-white text-3xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-3">Experienced Team</h3>
              <p className="text-[#5f4b32] leading-relaxed">
                Years of experience helping thousands of pilgrims complete their sacred journey
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="text-white text-3xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-3">Personalized Care</h3>
              <p className="text-[#5f4b32] leading-relaxed">
                Individual attention and customized support based on your specific needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-3xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0F5132] mb-3">Always Available</h3>
              <p className="text-[#5f4b32] leading-relaxed">
                24/7 support team ready to assist you at any time during your pilgrimage
              </p>
            </div>
          </div>
        </motion.div> */}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center bg-gradient-to-br from-[#0F5132] to-[#198754] rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Need Pilgrimage Assistance?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help make your Hajj or Umrah journey smooth, comfortable, and spiritually fulfilling
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#0F5132] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#ad8f60] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/03179369176"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#20b357] transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
