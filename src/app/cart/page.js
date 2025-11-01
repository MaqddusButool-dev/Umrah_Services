"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { FaTrash, FaShoppingCart, FaArrowLeft, FaCalendar, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    const whatsappNumber = "923179369176";
    
    // Create message with all booking details
    let message = "🚗 *New Booking Request* 🚗%0A%0A";
    
    cartItems.forEach((item, index) => {
      message += `*Booking ${index + 1}:*%0A`;
      message += `Vehicle: ${item.vehicleName}%0A`;
      message += `Name: ${item.name}%0A`;
      message += `Phone: ${item.phone}%0A`;
      message += `Email: ${item.email}%0A`;
      message += `Pickup: ${item.pickupLocation}%0A`;
      message += `Drop-off: ${item.dropoffLocation}%0A`;
      message += `Date: ${item.pickupDate}%0A`;
      message += `Time: ${item.pickupTime}%0A`;
      message += `Passengers: ${item.passengers}%0A`;
      message += `Price: $${item.price}%0A`;
      if (item.specialRequests) {
        message += `Special Requests: ${item.specialRequests}%0A`;
      }
      message += `%0A--------------------%0A%0A`;
    });
    
    message += `*Total Amount: $${getTotalPrice()}*`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Back Button */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link
              href="/taxi"
              className="inline-flex items-center gap-2 text-[#0F5132] hover:text-[#ad8f60] transition-colors font-semibold"
            >
              <FaArrowLeft />
              Back to Vehicles
            </Link>
          </div>
        </div>

        {/* Empty Cart Message */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShoppingCart className="text-4xl text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8">
              You haven't added any bookings to your cart yet.
            </p>
            <Link
              href="/taxi"
              className="inline-block bg-gradient-to-r from-[#0F5132] to-[#198754] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Browse Vehicles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0F5132] to-[#198754] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/taxi"
              className="inline-flex items-center gap-2 text-white hover:text-[#ad8f60] transition-colors font-semibold"
            >
              <FaArrowLeft />
              Back to Vehicles
            </Link>
          </div>
          <h1 className="text-4xl font-bold">Your Booking Cart</h1>
          <p className="text-lg opacity-90 mt-2">
            Review your bookings before proceeding
          </p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  {/* Vehicle Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-32 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.vehicleImage}
                        alt={item.vehicleName}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-[#0F5132]">
                            {item.vehicleName}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            Booking for {item.name}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-2"
                          title="Remove from cart"
                        >
                          <FaTrash className="text-xl" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Contact Information
                        </h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>📧 {item.email}</p>
                          <p>📞 {item.phone}</p>
                          <p>👤 {item.passengers} passenger(s)</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Trip Details
                        </h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p className="flex items-center gap-2">
                            <FaCalendar className="text-[#0F5132]" />
                            {item.pickupDate} at {item.pickupTime}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Route
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                          <FaMapMarkerAlt className="text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-semibold">From:</span> {item.pickupLocation}
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <FaMapMarkerAlt className="text-red-600 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-semibold">To:</span> {item.dropoffLocation}
                          </div>
                        </div>
                      </div>
                    </div>

                    {item.specialRequests && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-1">
                          Special Requests
                        </h4>
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                          {item.specialRequests}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Price */}
                  <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Price:</span>
                    <span className="text-2xl font-bold text-[#0F5132]">
                      ${item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-[#0F5132] mb-6 border-b-2 border-[#ad8f60] pb-3">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Bookings:</span>
                  <span className="font-semibold text-[#0F5132]">
                    {cartItems.length}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="font-semibold text-[#0F5132]">
                    ${getTotalPrice()}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">
                      Total Amount:
                    </span>
                    <span className="text-2xl font-bold text-[#0F5132]">
                      ${getTotalPrice()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#20b357] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  Checkout on WhatsApp
                </button>

                <button
                  onClick={clearCart}
                  className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
                >
                  Clear Cart
                </button>

                <Link
                  href="/taxi"
                  className="block w-full text-center bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Info Box */}
              <div className="mt-6 bg-[#F7F9F5] border-2 border-[#0F5132]/20 rounded-lg p-4">
                <h3 className="font-semibold text-[#0F5132] mb-2">
                  📝 Important Note
                </h3>
                <p className="text-sm text-gray-600">
                  After checkout, our team will contact you on WhatsApp to confirm your booking and provide payment details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
