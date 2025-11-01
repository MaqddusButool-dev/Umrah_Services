"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaClock,
  FaUsers,
  FaCar,
  FaMosque,
  FaMountain,
  FaCity,
  FaCheckCircle,
  FaStar,
  FaWhatsapp,
  FaHistory,
  FaKaaba,
  FaLandmark,
  FaSuitcase,
} from "react-icons/fa";

const tours = [
  {
    id: 1,
    title: "Makkah Holy Sites Tour",
    duration: "4-6 Hours",
    groupSize: "Up to 15 people",
    icon: FaKaaba,
    iconColor: "from-emerald-600 to-emerald-700",
    description: "Visit the most sacred historical sites in and around Makkah with experienced guides.",
    highlights: [
      "Cave of Hira (where revelation began)",
      "Jabal al-Nour (Mountain of Light)",
      "Jannat al-Mualla Cemetery",
      "Masjid Al-Jinn",
      "Masjid Aisha (Meeqat)",
      "Mount Arafat"
    ],
    included: ["Transportation", "Professional Guide", "Water & Refreshments", "Photo Stops"],
    price: "Contact for pricing",
    popular: true,
  },
  {
    id: 2,
    title: "Madinah Historical Tour",
    duration: "Full Day (8 Hours)",
    groupSize: "Up to 15 people",
    icon: FaMosque,
    iconColor: "from-teal-600 to-teal-700",
    description: "Explore the blessed city of Madinah and its significant historical Islamic landmarks.",
    highlights: [
      "Masjid Quba (First mosque)",
      "Masjid Qiblatain",
      "Mount Uhud & Martyrs Cemetery",
      "Seven Mosques",
      "Date Market",
      "Masjid Jummah"
    ],
    included: ["Luxury Transportation", "Expert Guide", "Lunch", "All Entry Fees"],
    price: "Contact for pricing",
    popular: true,
  },
  {
    id: 3,
    title: "Taif Scenic Tour",
    duration: "Full Day (10 Hours)",
    groupSize: "Up to 10 people",
    icon: FaMountain,
    iconColor: "from-green-600 to-green-700",
    description: "Escape to the beautiful mountains of Taif and explore its natural beauty and history.",
    highlights: [
      "Shubra Palace",
      "Taif Rose Gardens",
      "Al Hada Mountain",
      "Cable Car Ride",
      "Taif Souq (Market)",
      "Local Fruit Farms"
    ],
    included: ["Quality Transport", "Mountain Guide", "Meals", "Cable Car Tickets"],
    price: "Contact for pricing",
    popular: false,
  },
  {
    id: 4,
    title: "Badr Battlefield Tour",
    duration: "Half Day (5 Hours)",
    groupSize: "Up to 12 people",
    icon: FaHistory,
    iconColor: "from-amber-600 to-amber-700",
    description: "Visit the historic battlefield of Badr and learn about this significant Islamic battle.",
    highlights: [
      "Badr Battlefield",
      "Wells of Badr",
      "Martyrs' Memorial",
      "Battle Museum",
      "Historical Narration"
    ],
    included: ["Transportation", "History Guide", "Refreshments"],
    price: "Contact for pricing",
    popular: false,
  },
  {
    id: 5,
    title: "Jeddah City Tour",
    duration: "4-5 Hours",
    groupSize: "Up to 12 people",
    icon: FaCity,
    iconColor: "from-blue-600 to-blue-700",
    description: "Discover the modern and historical attractions of the beautiful coastal city of Jeddah.",
    highlights: [
      "King Fahd Fountain",
      "Jeddah Corniche",
      "Al-Balad (Old Town)",
      "Floating Mosque",
      "Red Sea Mall",
      "Traditional Souqs"
    ],
    included: ["City Transportation", "Local Guide", "Photo Stops", "Shopping Time"],
    price: "Contact for pricing",
    popular: false,
  },
  {
    id: 6,
    title: "Custom Private Tour",
    duration: "Flexible",
    groupSize: "Your Group",
    icon: FaSuitcase,
    iconColor: "from-purple-600 to-purple-700",
    description: "Design your own tour itinerary with our flexible private tour service.",
    highlights: [
      "Choose your destinations",
      "Flexible timing",
      "Private vehicle",
      "Dedicated guide",
      "Custom stops",
      "Family-friendly"
    ],
    included: ["Private Transport", "Personal Guide", "Customized Itinerary", "Flexible Schedule"],
    price: "Custom Quote",
    popular: false,
  },
];

const features = [
  {
    icon: FaUsers,
    title: "Expert Guides",
    description: "Knowledgeable guides fluent in multiple languages with deep understanding of Islamic history",
  },
  {
    icon: FaCar,
    title: "Comfortable Transport",
    description: "Modern, air-conditioned vehicles with professional drivers for your comfort",
  },
  {
    icon: FaClock,
    title: "Flexible Timing",
    description: "Tours scheduled around prayer times and your personal preferences",
  },
  {
    icon: FaStar,
    title: "Excellent Experience",
    description: "Small groups ensure personalized attention and enriching spiritual experience",
  },
];

export default function ZiyaratGuidedToursPage() {
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
              <FaMapMarkedAlt className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Ziyarat & Guided Tours
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover the rich Islamic history and sacred sites of Makkah, Madinah, and surrounding areas with our expert-guided tours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#tours"
                className="bg-white text-[#0F5132] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#ad8f60] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Explore Tours
              </a>
              <a
                href="https://wa.me/03179369176"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#20b357] transition-all duration-300 flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Book on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-[#0F5132] text-center mb-12">
            Why Choose Our Tours?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#0F5132]/10 text-center"
              >
                <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-lg text-[#0F5132] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#5f4b32] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tours Section */}
        <div id="tours" className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0F5132] mb-4">
              Available Tours
            </h2>
            <p className="text-[#5f4b32] max-w-2xl mx-auto">
              Choose from our carefully curated tours or create your own custom experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#0F5132]/10 hover:border-[#ad8f60] h-full flex flex-col relative">
                  {tour.popular && (
                    <div className="absolute top-4 right-4 bg-[#ad8f60] text-white px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
                      <FaStar /> POPULAR
                    </div>
                  )}
                  
                  {/* Tour Header */}
                  <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] p-8 text-white text-center">
                    <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${tour.iconColor} rounded-full flex items-center justify-center mb-4 shadow-xl`}>
                      <tour.icon className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                    <div className="flex justify-center gap-6 text-sm mt-4">
                      <div className="flex items-center gap-2">
                        <FaClock />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers />
                        <span>{tour.groupSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tour Details */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[#5f4b32] mb-4 leading-relaxed">
                      {tour.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-bold text-[#0F5132] mb-3 flex items-center gap-2">
                        <FaMapMarkedAlt /> Tour Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {tour.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-[#5f4b32]">
                            <FaCheckCircle className="text-[#198754] mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Included */}
                    <div className="mb-4">
                      <h4 className="font-bold text-[#0F5132] mb-2">Included:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tour.included.map((item, idx) => (
                          <span key={idx} className="bg-[#F7F9F5] text-[#0F5132] px-3 py-1 rounded-full text-xs font-semibold">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="mt-auto pt-4 border-t border-[#0F5132]/10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#ad8f60] font-bold text-lg">{tour.price}</span>
                      </div>
                      <a
                        href="https://wa.me/03179369176"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-[#0F5132] to-[#198754] text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-[#ad8f60] hover:to-[#d4a574] transition-all duration-300 shadow-md"
                      >
                        Book This Tour
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-[#0F5132]/10 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#0F5132] text-center mb-8">
            Important Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-[#5f4b32]">
            <div>
              <h3 className="font-bold text-lg text-[#0F5132] mb-3">What to Bring:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#198754] mt-1 flex-shrink-0" />
                  <span>Comfortable walking shoes</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#198754] mt-1 flex-shrink-0" />
                  <span>Sun protection (hat, sunglasses, sunscreen)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#198754] mt-1 flex-shrink-0" />
                  <span>Camera for memories</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#198754] mt-1 flex-shrink-0" />
                  <span>Water bottle</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#0F5132] mb-3">Tour Guidelines:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#198754] mt-1 flex-shrink-0" />
                  <span>Modest dress code required at all sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#198754] mt-1 flex-shrink-0" />
                  <span>Tours scheduled around prayer times</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#198754] mt-1 flex-shrink-0" />
                  <span>Pickup from your hotel included</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#198754] mt-1 flex-shrink-0" />
                  <span>Advance booking recommended</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center bg-gradient-to-br from-[#0F5132] to-[#198754] rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Sacred Sites?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your Ziyarat tour today and enrich your spiritual journey with our expert guides
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
