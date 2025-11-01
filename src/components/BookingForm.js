"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { FaCalendar, FaClock, FaMapMarkerAlt, FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

export default function BookingForm({ vehicle }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    passengers: "1",
    specialRequests: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create booking item
    const bookingItem = {
      vehicleName: vehicle.name,
      vehicleImage: vehicle.image,
      price: vehicle.price,
      ...formData,
      bookingDate: new Date().toISOString(),
    };

    // Add to cart
    addToCart(bookingItem);

    // Show success message
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      pickupLocation: "",
      dropoffLocation: "",
      pickupDate: "",
      pickupTime: "",
      passengers: "1",
      specialRequests: "",
    });

    // Redirect to cart after 2 seconds
    setTimeout(() => {
      router.push("/cart");
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
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
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Booking Added to Cart!
        </h3>
        <p className="text-green-700">
          Redirecting you to cart...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-[#0F5132] mb-6 border-b-2 border-[#ad8f60] pb-3">
        Book Your Ride
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <FaUser className="text-[#0F5132]" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <FaPhone className="text-[#0F5132]" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition"
              placeholder="+966 XXX XXX XXX"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <FaEnvelope className="text-[#0F5132]" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Location Details */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <FaMapMarkerAlt className="text-[#0F5132]" />
            Pickup Location *
          </label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition"
            placeholder="e.g., Madinah Hotel, Jeddah Airport"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <FaMapMarkerAlt className="text-[#0F5132]" />
            Drop-off Location *
          </label>
          <input
            type="text"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition"
            placeholder="e.g., Makkah Hotel, Madinah"
          />
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <FaCalendar className="text-[#0F5132]" />
              Pickup Date *
            </label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <FaClock className="text-[#0F5132]" />
              Pickup Time *
            </label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        {/* Passengers */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <FaUser className="text-[#0F5132]" />
            Number of Passengers *
          </label>
          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition"
          >
            {[...Array(vehicle.seats)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i + 1 === 1 ? "Passenger" : "Passengers"}
              </option>
            ))}
          </select>
        </div>

        {/* Special Requests */}
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">
            Special Requests (Optional)
          </label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-transparent outline-none transition resize-none"
            placeholder="Any special requirements or notes..."
          />
        </div>

        {/* Price Display */}
        <div className="bg-[#F7F9F5] border-2 border-[#0F5132]/20 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-700">
              Total Price:
            </span>
            <span className="text-2xl font-bold text-[#0F5132]">
              ${vehicle.price}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            * Price is per day. Final price may vary based on distance and duration.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0F5132] to-[#198754] text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:from-[#ad8f60] hover:to-[#d4a574]"
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
}

