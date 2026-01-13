// import santImage from "@/assets/sant.jpg";
// import { useState } from "react";
// import SantModal from "./SantModal";

// type Sant = {
//   id: number;
//   name: string;
//   image: string;
//   description: string;

//   // optional / future fields
//   role?: string;
//   biography?: string[];
// };


// const sants = [
//   {
//     id: 1,
//     name: "Maharaj Shree",
//     image: santImage,
//     description: "Guiding devotees on the path of dharma and devotion for over three decades.",
//   },
//   {
//     id: 2,
//     name: "Guru DharmaPrasadDasji",
//     image: santImage,
//     description: "Dedicated to teaching scriptures and conducting daily spiritual discourses.",
//   },
//   {
//     id: 3,
//     name: "Guru BhaktiPrasadDasji",
//     image: santImage,
//     description: "Inspiring the youth to embrace spiritual values in modern life.",
//   },
// ];

// const SantsSection = () => {
//   const [selectedSant, setSelectedSant] = useState<Sant | null> (null);

//   return (
//     <section id="sants" className="py-20 md:py-32">
//       <div className="container mx-auto px-4">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-primary text-sm tracking-widest uppercase block mb-3">
//             Spiritual Guidance
//           </span>

//           <h2 className="text-3xl md:text-5xl text-foreground sacred-heading mb-6">
//             Our Revered Sants
//           </h2>

//           <p className="text-muted max-w-2xl mx-auto">
//             The resident sants of our mandir dedicate their lives to spiritual service,
//             guiding devotees with wisdom, compassion, and the teachings of Lord Swaminarayan.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto ">
//             {sants.map((sant) => (
//                 <div
//                 key={sant.id}
//                 className="temple-card text-center bg-[#FBE8DC] rounded-lg py-6 flex flex-col hover:shadow-xl"
//                 >
//                 {/* Image */}
//                 <div className="relative w-44 h-44 mx-auto mb-6">
//                     <div className="absolute inset-0 rounded-full bg-gradient-saffron opacity-20" />
//                     <img
//                     src={sant.image}
//                     alt={sant.name}
//                     className="relative w-full h-full rounded-full object-cover border-4 border-card"
//                     />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl mb-2">{sant.name}</h3>

//                 <p className="text-muted text-sm px-4 leading-relaxed flex-1">
//                     {sant.description}
//                 </p>

//                 {/* Divider */}
//                 <div className="mt-4 mx-6 border-t border-black/10" />

//                 {/* View More */}
//                 <button
//                     onClick={() => setSelectedSant(sant)}
//                     className="mt-4 inline-flex items-center justify-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
//                 >
//                     Know More
//                     <span className="text-lg">→</span>
//                 </button>
//                 {selectedSant && (
//                     <SantModal
//                         sant={selectedSant}
//                         onClose={() => setSelectedSant(null)}
//                     />
//                 )}
//                 </div>
//             ))}
//         </div>

//         {/* Quote */}
//         <div className="mt-20 max-w-3xl mx-auto">
//           <div className="temple-card text-center relative">
//             <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl">
//               "
//             </span>

//             <blockquote className="italic text-xl leading-relaxed mb-4">
//               He who constantly meditates on God becomes divine; just as iron,
//               when placed in fire, becomes fire-like.
//             </blockquote>

//             <cite className="text-muted text-sm">
//               — Shree Swaminarayan Bhagwan, Vachanamrut
//             </cite>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SantsSection;
