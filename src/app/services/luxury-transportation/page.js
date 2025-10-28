"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LuxuryTransportationPage() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F5132] mb-4">
            Travel in Comfort and Style
          </h1>
          <p className="text-[#5f4b32] max-w-3xl mx-auto mb-6">
            Premium Transportation Services for pilgrims, including airport transfers and guided Ziyarat tours.
          </p>
          <Link href="/services/luxury-transportation#transport" className="px-8 py-3 bg-[#0F5132] hover:bg-[#0b3d25] text-white rounded-lg font-semibold shadow-md transition">
            Book Now
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg mb-12">
          <Image src="/images/transport.jpg" alt="Luxury Transportation" fill className="object-cover" priority />
        </motion.div>

        {/* Fleet Overview */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Fleet Overview</h2>
          <ul className="list-disc list-inside text-[#5f4b32] space-y-2">
            <li>Luxury SUVs (GMC, Lexus)</li>
            <li>Hyundai H1 Vans for small groups</li>
            <li>Coaster Buses for larger groups</li>
          </ul>
        </motion.div>

        {/* Services Provided */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Services Provided</h2>
          <p className="text-[#5f4b32]">Airport transfers, Ziyarat tours, and intercity travel with fully AC vehicles and professional drivers.</p>
        </motion.div>

        {/* Safety Measures */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Safety Measures</h2>
          <p className="text-[#5f4b32]">Drivers are certified and experienced; vehicles are maintained daily to ensure comfort and safety.</p>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 border-t border-[#0F5132]/20 pt-6 text-center text-[#5f4b32] space-y-2">
          <p>Links: Umrah & Hajj Packages | Pilgrimage Assistance | Hotel Reservations | Ziyarat Tours</p>
          <p>Contact: +92 300 0000000 | info@pilgrimageservices.com</p>
        </div>
      </div>
    </section>
  );
}
