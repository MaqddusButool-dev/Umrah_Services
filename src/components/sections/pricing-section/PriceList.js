"use client";

import { useState } from "react";

export default function PriceList() {
  const [search, setSearch] = useState("");

  const priceList = [
    { route: "Jeddah Airport to Makkah Hotel", camry: "250 SR", gmc: "550 SR", staria: "350 SR", hiace: "400 SR", coaster: "800 SR" },
    { route: "Jeddah Airport to Jeddah Hotel", camry: "200 SR", gmc: "400 SR", staria: "250 SR", hiace: "300 SR", coaster: "500 SR" },
    { route: "Jeddah Hotel to Jeddah Airport", camry: "—", gmc: "300 SR", staria: "250 SR", hiace: "300 SR", coaster: "500 SR" },
    { route: "Makkah Hotel to Madina Hotel", camry: "450 SR", gmc: "1000 SR", staria: "550 SR", hiace: "650 SR", coaster: "1100 SR" },
    { route: "Jeddah Airport to Madina Hotel", camry: "450 SR", gmc: "1000 SR", staria: "550 SR", hiace: "650 SR", coaster: "1100 SR" },
    { route: "Madina Airport to Madina Hotel", camry: "150 SR", gmc: "400 SR", staria: "200 SR", hiace: "350 SR", coaster: "500 SR" },
    { route: "Madina Hotel to Madina Airport", camry: "120 SR", gmc: "300 SR", staria: "150 SR", hiace: "300 SR", coaster: "450 SR" },
    { route: "Makkah Ziyarat", camry: "200 SR", gmc: "500 SR", staria: "300 SR", hiace: "400 SR", coaster: "600 SR" },
    { route: "Madina Ziyarat", camry: "200 SR", gmc: "400 SR", staria: "250 SR", hiace: "350 SR", coaster: "550 SR" },
    { route: "Jeddah to Taif and Return", camry: "600 SR", gmc: "1300 SR", staria: "700 SR", hiace: "1300 SR", coaster: "1500 SR" },
    { route: "Makkah to Taif and Return", camry: "450 SR", gmc: "700 SR", staria: "600 SR", hiace: "700 SR", coaster: "1000 SR" },
    { route: "Per Hour Rate", camry: "100 SR", gmc: "200 SR", staria: "100 SR", hiace: "150 SR", coaster: "250 SR" },
    { route: "Madina Hotel to Makkah Hotel", camry: "450 SR", gmc: "1000 SR", staria: "550 SR", hiace: "650 SR", coaster: "1100 SR" },
    { route: "Makkah Hotel to Jeddah Airport", camry: "200 SR", gmc: "500 SR", staria: "300 SR", hiace: "400 SR", coaster: "700 SR" },
    { route: "Masjid Ayesha Meeqat", camry: "100 SR", gmc: "300 SR", staria: "150 SR", hiace: "300 SR", coaster: "300 SR" },
    { route: "Masjid Jurana Meeqat", camry: "150 SR", gmc: "350 SR", staria: "150 SR", hiace: "400 SR", coaster: "400 SR" },
    { route: "Madina Ziarat and Wadiya Jin", camry: "300 SR", gmc: "600 SR", staria: "350 SR", hiace: "500 SR", coaster: "650 SR" },
    { route: "Makkah Hotel to Train Station", camry: "100 SR", gmc: "300 SR", staria: "150 SR", hiace: "200 SR", coaster: "400 SR" },
    { route: "Makkah Train Station to Makkah Hotel", camry: "100 SR", gmc: "300 SR", staria: "150 SR", hiace: "200 SR", coaster: "400 SR" },
    { route: "Medina Train Station to Medina Hotel", camry: "100 SR", gmc: "300 SR", staria: "150 SR", hiace: "200 SR", coaster: "400 SR" },
    { route: "Medina Hotel to Medina Train Station", camry: "100 SR", gmc: "300 SR", staria: "150 SR", hiace: "200 SR", coaster: "400 SR" },
  ];

  const filteredList = priceList.filter((item) =>
    item.route.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gradient-to-r from-[#0F5132] via-[#0F5132] to-[#198754] py-20 px-4 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          SAUDIA TAXI <span className="text-[#d4a574]">PRICE LIST</span>
        </h2>
        <p className="text-center text-gray-200 mb-8 max-w-3xl mx-auto">
          Discover our affordable and transparent taxi fares across Saudi Arabia.
          Choose your vehicle — from comfortable 4-seaters to spacious 18-seater Coasters.
        </p>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search route..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-[#d4a574]/50 bg-[#ffffff1a] text-white rounded-lg px-4 py-2 w-full md:w-1/2 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-[#0F5132]/40 backdrop-blur-md rounded-lg shadow-2xl border border-[#d4a574]/30">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-[#d4a574] text-[#0F5132] sticky top-0">
              <tr>
                <th className="px-4 py-3 font-bold">Routes</th>
                <th className="px-4 py-3 font-bold">4 Seater Camry/Sonata</th>
                <th className="px-4 py-3 font-bold">7 Seater Staria</th>
                <th className="px-4 py-3 font-bold">11 Seater Hiace</th>
                <th className="px-4 py-3 font-bold">7 Seater GMC/Chevrolet</th>
                <th className="px-4 py-3 font-bold">18 Seater Coaster</th>
              </tr>
            </thead>
            <tbody>
              {filteredList.length > 0 ? (
                filteredList.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-[#ffffff1a]" : "bg-[#ffffff0d]"
                    } hover:bg-[#d4a574]/20 transition-all duration-300`}
                  >
                    <td className="px-4 py-3 font-medium text-[#d4a574]">{item.route}</td>
                    <td className="px-4 py-3 text-gray-100">{item.camry}</td>
                    <td className="px-4 py-3 text-gray-100">{item.staria}</td>
                    <td className="px-4 py-3 text-gray-100">{item.hiace}</td>
                    <td className="px-4 py-3 text-gray-100">{item.gmc}</td>
                    <td className="px-4 py-3 text-gray-100">{item.coaster}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-300">
                    No routes found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}




























// "use client";

// import { useState } from "react";

// export default function PriceList() {
//   const [search, setSearch] = useState("");

// const priceList = [
//   { route: "Jeddah Airport to Makkah Hotel", camry: "250 SR", gmc: "550 SR", staria: "350 SR", hiace: "400 SR", coaster: "800 SR" },
//   { route: "Jeddah Airport to Jeddah Hotel", camry: "200 SR", gmc: "400 SR", staria: "250 SR", hiace: "300 SR", coaster: "500 SR" },
//   { route: "Jeddah Hotel to Jeddah Airport", camry: "—", gmc: "300 SR", staria: "250 SR", hiace: "300 SR", coaster: "500 SR" },
//   { route: "Makkah Hotel to Madina Hotel", camry: "450 SR", gmc: "1000 SR", staria: "550 SR", hiace: "650 SR", coaster: "1100 SR" },
//   { route: "Jeddah Airport to Madina Hotel", camry: "450 SR", gmc: "1000 SR", staria: "550 SR", hiace: "650 SR", coaster: "1100 SR" },
//   { route: "Madina Airport to Madina Hotel", camry: "150 SR", gmc: "400 SR", staria: "200 SR", hiace: "350 SR", coaster: "500 SR" },
//   { route: "Madina Hotel to Madina Airport", camry: "120 SR", gmc: "300 SR", staria: "150 SR", hiace: "300 SR", coaster: "450 SR" },
//   { route: "Makkah Ziyarat", camry: "200 SR", gmc: "500 SR", staria: "300 SR", hiace: "400 SR", coaster: "600 SR" },
//   { route: "Madina Ziyarat", camry: "200 SR", gmc: "400 SR", staria: "250 SR", hiace: "350 SR", coaster: "550 SR" },
//   { route: "Jeddah to Taif and Return", camry: "600 SR", gmc: "1300 SR", staria: "700 SR", hiace: "1300 SR", coaster: "1500 SR" },
//   { route: "Makkah to Taif and Return", camry: "450 SR", gmc: "700 SR", staria: "600 SR", hiace: "700 SR", coaster: "1000 SR" },
//   { route: "Per Hour Rate", camry: "100 SR", gmc: "200 SR", staria: "100 SR", hiace: "150 SR", coaster: "250 SR" },
//   { route: "Madina Hotel to Makkah Hotel", camry: "450 SR", gmc: "1000 SR", staria: "550 SR", hiace: "650 SR", coaster: "1100 SR" },
//   { route: "Makkah Hotel to Jeddah Airport", camry: "200 SR", gmc: "500 SR", staria: "300 SR", hiace: "400 SR", coaster: "700 SR" },
//   { route: "Masjid Ayesha Meeqat", camry: "100 SR", gmc: "300 SR", staria: "150 SR", hiace: "300 SR", coaster: "300 SR" },
//   { route: "Masjid Jurana Meeqat", camry: "150 SR", gmc: "350 SR", staria: "150 SR", hiace: "400 SR", coaster: "400 SR" },
//   { route: "Madina Ziarat and Wadiya Jin", camry: "300 SR", gmc: "600 SR", staria: "350 SR", hiace: "500 SR", coaster: "650 SR" },
//   { route: "Makkah Hotel to Train Station", camry: "100 SR", gmc: "300 SR", staria: "150 SR", hiace: "200 SR", coaster: "400 SR" },
//   { route: "Makkah Train Station to Makkah Hotel", camry: "100 SR", gmc: "300 SR", staria: "150 SR", hiace: "200 SR", coaster: "400 SR" },
//   { route: "Medina Train Station to Medina Hotel", camry: "100 SR", gmc: "300 SR", staria: "150 SR", hiace: "200 SR", coaster: "400 SR" },
//   { route: "Medina Hotel to Medina Train Station", camry: "100 SR", gmc: "300 SR", staria: "150 SR", hiace: "200 SR", coaster: "400 SR" },
// ];

//   const filteredList = priceList.filter((item) =>
//     item.route.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       {/* ---------- PRICE LIST SECTION ---------- */}
//       <section className="bg-linear-to-b from-[#f8fff9] to-[#ecf9f2] py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0F5132] mb-4">
//             SAUDIA TAXI <span className="text-[#b99a6b]">PRICE LIST</span>
//           </h2>

//           <p className="text-center text-[#5f4b32] mb-8 max-w-3xl mx-auto">
//             Discover our affordable and transparent taxi fares across Saudi Arabia. 
//             Choose your vehicle — from comfortable 4-seaters to spacious 18-seater Coasters.
//           </p>

//           {/* ---------- SEARCH BOX ---------- */}
//           <div className="flex justify-center mb-6">
//             <input
//               type="text"
//               placeholder="Search route..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="border border-[#4a6a4f] rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#2e5134]"
//             />
//           </div>

//           {/* ---------- PRICE TABLE ---------- */}
//           <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
//             <table className="min-w-full text-sm text-left border-collapse">
//               <thead className="bg-[#0F5132] text-white sticky top-0">
//                 <tr>
//                   <th className="px-4 py-3">Routes</th>
//                   <th className="px-4 py-3">4 Seater Camry/Sonata</th>
//                   <th className="px-4 py-3">7 Seater Staria</th>
//                   <th className="px-4 py-3">11 Seater Hiace</th>
//                   <th className="px-4 py-3">7 Seater GMC/Chevrolet</th>
//                   <th className="px-4 py-3">18 Seater Coaster</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredList.length > 0 ? (
//                   filteredList.map((item, index) => (
//                     <tr
//                       key={index}
//                       className={`${
//                         index % 2 === 0 ? "bg-[#f2ede4]" : "bg-white"
//                       } hover:bg-[#e8dcc5] transition`}
//                     >
//                       <td className="px-4 py-3 font-medium text-[#0F5132]">{item.route}</td>
//                       <td className="px-4 py-3 text-[#5f4b32]">{item.camry}</td>
//                       <td className="px-4 py-3 text-[#5f4b32]">{item.staria}</td>
//                       <td className="px-4 py-3 text-[#5f4b32]">{item.hiace}</td>
//                       <td className="px-4 py-3 text-[#5f4b32]">{item.gmc}</td>
//                       <td className="px-4 py-3 text-[#5f4b32]">{item.coaster}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="text-center py-4 text-gray-500">
//                       No routes found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

     
//     </>
//   );
// }

