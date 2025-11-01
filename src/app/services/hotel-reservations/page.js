"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHotel,
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaWifi,
  FaUtensils,
  FaSnowflake,
  FaClock,
  FaShieldAlt,
  FaWhatsapp,
  FaBed,
  FaSwimmingPool,
  FaBuilding,
  FaHome,
} from "react-icons/fa";

const hotels = [
  {
    id: 1,
    name: "Makkah Clock Royal Tower",
    category: "Luxury 5-Star",
    location: "Direct view of Haram",
    distance: "Connected to Masjid al-Haram",
    stars: 5,
    icon: FaBuilding,
    iconColor: "from-amber-500 to-amber-600",
    description: "Ultra-luxury hotel with direct access to the Grand Mosque. Experience the pinnacle of comfort and convenience.",
    features: [
      "Direct Haram access",
      "Luxury rooms & suites",
      "Fine dining restaurants",
      "Spa & wellness center",
      "24/7 concierge",
      "Shopping mall access"
    ],
    amenities: ["Free WiFi", "Breakfast", "Room Service", "Gym", "Pool"],
    priceRange: "High-End",
    popular: true,
  },
  {
    id: 2,
    name: "Fairmont Makkah",
    category: "Luxury 5-Star",
    location: "Abraj Al Bait Complex",
    distance: "100m from Haram",
    stars: 5,
    icon: FaBuilding,
    iconColor: "from-blue-500 to-blue-600",
    description: "Modern luxury hotel with exceptional service and stunning views of the Holy Mosque.",
    features: [
      "Close to Haram",
      "Elegant rooms",
      "Multiple dining options",
      "Business center",
      "Family-friendly",
      "Excellent amenities"
    ],
    amenities: ["Free WiFi", "Breakfast", "AC", "Gym", "Restaurant"],
    priceRange: "High-End",
    popular: true,
  },
  {
    id: 3,
    name: "Swissotel Makkah",
    category: "Luxury 5-Star",
    location: "Near Haram",
    distance: "200m from Haram",
    stars: 5,
    icon: FaHotel,
    iconColor: "from-emerald-500 to-emerald-600",
    description: "Swiss hospitality meets Islamic tradition. Perfect blend of comfort and accessibility.",
    features: [
      "Walking distance to Haram",
      "Spacious rooms",
      "International cuisine",
      "Prayer facilities",
      "Shuttle service",
      "Modern facilities"
    ],
    amenities: ["Free WiFi", "Breakfast Buffet", "AC", "Safe", "Mini Bar"],
    priceRange: "Mid-High",
    popular: false,
  },
  {
    id: 4,
    name: "Pullman Zamzam Makkah",
    category: "Luxury 5-Star",
    location: "Abraj Al Bait",
    distance: "50m from Haram",
    stars: 5,
    icon: FaStar,
    iconColor: "from-[#ad8f60] to-[#d4a574]",
    description: "Contemporary hotel offering comfort and convenience for modern pilgrims.",
    features: [
      "Very close to Haram",
      "Modern design",
      "International buffet",
      "Prayer room in hotel",
      "Multilingual staff",
      "Family rooms available"
    ],
    amenities: ["Free WiFi", "Breakfast", "AC", "Restaurant", "Lounge"],
    priceRange: "Mid-High",
    popular: true,
  },
  {
    id: 5,
    name: "Hilton Suites Makkah",
    category: "Standard 4-Star",
    location: "Ajyad Area",
    distance: "500m from Haram",
    stars: 4,
    icon: FaBed,
    iconColor: "from-teal-500 to-teal-600",
    description: "Comfortable suites with excellent value and reliable international brand quality.",
    features: [
      "Suite-style rooms",
      "Kitchenette in rooms",
      "Good value",
      "Clean & comfortable",
      "Helpful staff",
      "Convenient location"
    ],
    amenities: ["Free WiFi", "Breakfast", "AC", "Kitchenette"],
    priceRange: "Mid-Range",
    popular: false,
  },
  {
    id: 6,
    name: "Budget Friendly Hotels",
    category: "Economy 3-Star",
    location: "Various Locations",
    distance: "500m-1km from Haram",
    stars: 3,
    icon: FaHome,
    iconColor: "from-green-500 to-green-600",
    description: "Clean, comfortable, and affordable hotels perfect for budget-conscious pilgrims.",
    features: [
      "Affordable rates",
      "Clean rooms",
      "Basic amenities",
      "Close to shops",
      "Shuttle available",
      "Value for money"
    ],
    amenities: ["WiFi", "AC", "Daily Cleaning", "Prayer Mat"],
    priceRange: "Budget",
    popular: false,
  },
];

const madinahHotels = [
  {
    id: 1,
    name: "Oberoi Madinah",
    stars: 5,
    distance: "Direct view of Masjid Nabawi",
    features: ["Ultra Luxury", "Direct Access", "Excellent Service"],
  },
  {
    id: 2,
    name: "Anwar Al Madinah Movenpick",
    stars: 5,
    distance: "Connected to Masjid Nabawi",
    features: ["Modern Luxury", "Excellent Location", "Family Friendly"],
  },
  {
    id: 3,
    name: "Shaza Al Madinah",
    stars: 5,
    distance: "200m from Masjid Nabawi",
    features: ["Contemporary Design", "Close Proximity", "Quality Service"],
  },
];

export default function HotelReservationsPage() {
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
              <FaHotel className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Hotel Reservations
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Stay close to the Sacred Mosques with our carefully selected hotels ranging from luxury 5-stars to budget-friendly options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#hotels"
                className="bg-white text-[#0F5132] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#ad8f60] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Hotels
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
        {/* Why Book With Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-[#0F5132] text-center mb-12">
            Why Book Hotels With Us?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: FaShieldAlt, title: "Verified Hotels", desc: "All hotels are personally inspected" },
              { icon: FaMapMarkerAlt, title: "Best Locations", desc: "Close to Haram for easy access" },
              { icon: FaClock, title: "24/7 Support", desc: "We're here whenever you need us" },
              { icon: FaStar, title: "Best Prices", desc: "Competitive rates guaranteed" },
            ].map((feature, index) => (
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
                <h3 className="font-bold text-lg text-[#0F5132] mb-2">{feature.title}</h3>
                <p className="text-[#5f4b32] text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Makkah Hotels */}
        <div id="hotels" className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0F5132] mb-2">
              Makkah Hotels
            </h2>
            <p className="text-[#5f4b32]">
              From luxury to budget - stay close to Masjid al-Haram
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#0F5132]/10 hover:border-[#ad8f60] h-full flex flex-col relative">
                  {hotel.popular && (
                    <div className="absolute top-4 right-4 bg-[#ad8f60] text-white px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
                      <FaStar /> POPULAR
                    </div>
                  )}
                  
                  {/* Hotel Header */}
                  <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] p-6 text-white text-center">
                    <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${hotel.iconColor} rounded-full flex items-center justify-center mb-3 shadow-lg`}>
                      <hotel.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{hotel.name}</h3>
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(hotel.stars)].map((_, i) => (
                        <FaStar key={i} className="text-[#ad8f60] text-sm" />
                      ))}
                    </div>
                    <p className="text-sm text-white/80">{hotel.category}</p>
                  </div>

                  {/* Hotel Details */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-2 text-sm text-white bg-[#ad8f60] px-3 py-2 rounded-lg mb-4">
                      <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">{hotel.location}</div>
                        <div className="text-xs text-white/90">{hotel.distance}</div>
                      </div>
                    </div>

                    <p className="text-[#5f4b32] text-sm mb-4 leading-relaxed">
                      {hotel.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-bold text-[#0F5132] mb-2 text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {hotel.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-1 text-xs text-[#5f4b32]">
                            <FaCheckCircle className="text-[#198754] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, idx) => (
                          <span key={idx} className="bg-[#F7F9F5] text-[#0F5132] px-2 py-1 rounded-full text-xs">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="mt-auto pt-4 border-t border-[#0F5132]/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[#ad8f60] font-bold">{hotel.priceRange}</span>
                      </div>
                      <a
                        href="https://wa.me/03179369176"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-[#0F5132] to-[#198754] text-white px-4 py-2.5 rounded-lg font-semibold text-center hover:from-[#ad8f60] hover:to-[#d4a574] transition-all duration-300 shadow-md text-sm"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Madinah Hotels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0F5132] text-center mb-12">
            Madinah Hotels
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {madinahHotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-[#0F5132]/10 hover:border-[#ad8f60]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaHotel className="text-[#0F5132] text-2xl" />
                  <h3 className="font-bold text-lg text-[#0F5132]">{hotel.name}</h3>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <FaStar key={i} className="text-[#ad8f60] text-sm" />
                  ))}
                </div>
                <div className="flex items-start gap-2 text-sm text-[#5f4b32] mb-3">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-[#ad8f60]" />
                  <span>{hotel.distance}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hotel.features.map((feature, idx) => (
                    <span key={idx} className="bg-[#F7F9F5] text-[#0F5132] px-2 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Booking Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-[#0F5132]/10 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#0F5132] text-center mb-8">
            Simple Booking Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Hotel", desc: "Select from our verified hotels" },
              { step: "2", title: "Contact Us", desc: "WhatsApp or call for availability" },
              { step: "3", title: "Confirm Booking", desc: "We handle all reservations" },
              { step: "4", title: "Enjoy Your Stay", desc: "Comfortable stay guaranteed" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-[#0F5132] to-[#198754] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-[#0F5132] mb-2">{item.title}</h3>
                <p className="text-[#5f4b32] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center bg-gradient-to-br from-[#0F5132] to-[#198754] rounded-3xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Hotel?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us now for the best rates and availability near the Sacred Mosques
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
