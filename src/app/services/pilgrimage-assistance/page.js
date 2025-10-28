"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PilgrimageAssistancePage() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#f8fff9] to-[#ecf9f2] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F5132] mb-4">
            Seamless Support for Your Spiritual Journey
          </h1>
          <p className="text-[#5f4b32] max-w-3xl mx-auto mb-6">
            Comprehensive Pilgrimage Assistance Services to make your journey smooth and spiritually fulfilling.
          </p>
          <Link href="/services/pilgrimage-assistance#services" className="px-8 py-3 bg-[#0F5132] hover:bg-[#0b3d25] text-white rounded-lg font-semibold shadow-md transition">
            Learn More
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg mb-12">
          <Image src="/images/pilgrimage.jpg" alt="Pilgrimage Assistance" fill className="object-cover" priority />
        </motion.div>

        {/* Services Offered */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Services Offered</h2>
          <ul className="list-disc list-inside text-[#5f4b32] space-y-2">
            <li>Hotel bookings near holy sites</li>
            <li>Transportation arrangements</li>
            <li>Guided tours and Ziyarat visits</li>
          </ul>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Why Choose Us</h2>
          <ul className="list-disc list-inside text-[#5f4b32] space-y-2">
            <li>Experienced staff with deep knowledge of pilgrimage logistics</li>
            <li>Personalized services tailored to your needs</li>
            <li>High customer satisfaction rates</li>
          </ul>
        </motion.div>

        {/* Client Stories */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Client Stories</h2>
          <blockquote className="text-[#5f4b32] italic">
            "The team helped us every step of the way. Felt safe and guided throughout." — Ahmed S.
          </blockquote>
          <blockquote className="text-[#5f4b32] italic">
            "Amazing service and support. Highly recommend!" — Sara M.
          </blockquote>
        </motion.div>

        {/* Booking Info */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Booking Information</h2>
          <p className="text-[#5f4b32]">
            Contact us to start your pilgrimage journey. Phone: +92 300 0000000 | Email: info@pilgrimageservices.com
          </p>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 border-t border-[#0F5132]/20 pt-6 text-center text-[#5f4b32] space-y-2">
          <p>Links: Umrah & Hajj Packages | Hotel Reservations | Transportation | Ziyarat Tours</p>
          <p>Contact: +92 300 0000000 | info@pilgrimageservices.com</p>
        </div>
      </div>
    </section>
  );
}
