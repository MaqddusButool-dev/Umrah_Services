"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HotelReservationsPage() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F5132] mb-4">
            Stay Close to the Sacred Mosque
          </h1>
          <p className="text-[#5f4b32] max-w-3xl mx-auto mb-6">
            Luxury Hotel Accommodations Near Masjid al-Haram for comfort, convenience, and a memorable stay.
          </p>
          <Link href="/services/hotel-reservations#hotels" className="px-8 py-3 bg-[#0F5132] hover:bg-[#0b3d25] text-white rounded-lg font-semibold shadow-md transition">
            View Hotels
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg mb-12">
          <Image src="/images/hotel.jpg" alt="Hotel Reservations" fill className="object-cover" priority />
        </motion.div>

        {/* Top Hotels */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Top Hotels</h2>
          <ul className="list-disc list-inside text-[#5f4b32] space-y-2">
            <li>Makkah Clock Royal Tower – 5 Star Luxury</li>
            <li>Fairmont Makkah – Premium Comfort</li>
            <li>Swissotel Makkah – Convenient & Cozy</li>
          </ul>
        </motion.div>

        {/* Room Options */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Room Options</h2>
          <p className="text-[#5f4b32]">Choose from suites, deluxe rooms, or standard rooms with modern amenities, Wi-Fi, and breakfast included.</p>
        </motion.div>

        {/* Booking Process */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Booking Process</h2>
          <p className="text-[#5f4b32]">Contact us or book online. Confirm your room, select package, and receive instant confirmation for your stay.</p>
        </motion.div>

        {/* Customer Reviews */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Customer Reviews</h2>
          <blockquote className="text-[#5f4b32] italic">"Stayed at Makkah Clock Royal Tower and it was fantastic!" — Ahmed R.</blockquote>
          <blockquote className="text-[#5f4b32] italic">"Swissotel was very convenient for prayers. Loved the experience." — Fatima S.</blockquote>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 border-t border-[#0F5132]/20 pt-6 text-center text-[#5f4b32] space-y-2">
          <p>Links: Umrah & Hajj Packages | Pilgrimage Assistance | Transportation | Ziyarat Tours</p>
          <p>Contact: +92 300 0000000 | info@pilgrimageservices.com</p>
        </div>
      </div>
    </section>
  );
}
