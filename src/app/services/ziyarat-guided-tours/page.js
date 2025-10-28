"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ZiyaratGuidedToursPage() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F5132] mb-4">
            Discover the Rich History of Islam
          </h1>
          <p className="text-[#5f4b32] max-w-3xl mx-auto mb-6">
            Explore Sacred Sites with our Guided Tours in Makkah, Madinah, and Taif.
          </p>
          <Link href="/services/ziyarat-guided-tours#tours" className="px-8 py-3 bg-[#0F5132] hover:bg-[#0b3d25] text-white rounded-lg font-semibold shadow-md transition">
            Join a Tour
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg mb-12">
          <Image src="/images/ziyarat.jpg" alt="Ziyarat & Guided Tours" fill className="object-cover" priority />
        </motion.div>

        {/* Tour Options */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Tour Options</h2>
          <ul className="list-disc list-inside text-[#5f4b32] space-y-2">
            <li>Makkah Holy Sites Tour</li>
            <li>Madinah Historical Sites Tour</li>
            <li>Taif Scenic & Historical Tour</li>
          </ul>
        </motion.div>

        {/* Guides */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Guides</h2>
          <p className="text-[#5f4b32]">Experienced English-speaking guides provide historical insights, ensuring a meaningful spiritual experience.</p>
        </motion.div>

        {/* Tour Itineraries */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Tour Itineraries</h2>
          <p className="text-[#5f4b32]">Detailed schedules for each tour including prayer times, sightseeing, and guided activities.</p>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 border-t border-[#0F5132]/20 pt-6 text-center text-[#5f4b32] space-y-2">
          <p>Links: Umrah & Hajj Packages | Pilgrimage Assistance | Hotel Reservations | Transportation</p>
          <p>Contact: +92 300 0000000 | info@pilgrimageservices.com</p>
        </div>
      </div>
    </section>
  );
}
