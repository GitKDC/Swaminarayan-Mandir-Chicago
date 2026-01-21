// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef, useState } from 'react';

// interface Accomplishment {
//   year?: string;
//   title: string;
//   description: string;
//   images: string[];
//   category: 'spiritual' | 'social' | 'literary' | 'architectural';
// }

// const accomplishmentsData: Accomplishment[] = [
//   {
//     title: 'Established Ekantik Dharma',
//     description:
//       'Established ekantik dharma and destroyed adharma, reviving the eternal principles of righteousness and devotion that had been lost for ages.',
//     images: ['https://placehold.co/400x300/9d0b0b/ffffff?text=Ekantik+Dharma'],
//     category: 'spiritual',
//   },
//   {
//     title: 'Initiated Over 2000 Sadhus',
//     description:
//       'Initiated over 2000 sadhus, of which 500 were initiated as paramhans. Through these sadhus, He continues to remain on earth, guiding devotees toward salvation.',
//     images: [
//       'https://placehold.co/400x300/b11226/ffffff?text=Sadhu+Initiation',
//       'https://placehold.co/400x300/9d0b0b/ffffff?text=Paramhans',
//     ],
//     category: 'spiritual',
//   },
//   {
//     title: 'Built Six Grand Mandirs',
//     description:
//       'Built mandirs in Ahmedabad, Dholera, Junagadh, Bhuj, Gadhpur, and Vadtal. Installed murtis for bhaktas to always have the darshan of Bhagvan\'s divine form.',
//     images: [
//       'https://placehold.co/400x300/9d0b0b/ffffff?text=Ahmedabad+Dham',
//       'https://placehold.co/400x300/b11226/ffffff?text=Vadtal+Dham',
//       'https://placehold.co/400x300/9d0b0b/ffffff?text=Junagadh+Dham',
//     ],
//     category: 'architectural',
//   },
//   {
//     title: 'Established Two Acharya Seats',
//     description:
//       'Established two seats of leadership (gadi) and appointed two acharyas to protect and promote the sampradaya for future generations.',
//     images: ['https://placehold.co/400x300/b11226/ffffff?text=Acharya+Gadi'],
//     category: 'spiritual',
//   },
//   {
//     title: 'Authored Sacred Scriptures',
//     description:
//       'Revealed the philosophy of the Vedas in simple words. Wrote shastras, authenticated ancient scriptures, and summarized the essence of all shastras in the Shikshapatri.',
//     images: [
//       'https://placehold.co/400x300/9d0b0b/ffffff?text=Writing+Shastras',
//       'https://placehold.co/400x300/b11226/ffffff?text=Shikshapatri',
//     ],
//     category: 'literary',
//   },
//   {
//     title: 'Social Reforms & Humanitarian Work',
//     description:
//       'Opened charity houses for the poor, organized food and water aid during droughts, stopped the practice of sati and female infanticide, and saved countless lives.',
//     images: [
//       'https://placehold.co/400x300/9d0b0b/ffffff?text=Charity+Work',
//       'https://placehold.co/400x300/b11226/ffffff?text=Social+Reform',
//     ],
//     category: 'social',
//   },
//   {
//     title: 'Promoted Education for All',
//     description:
//       'Encouraged bhaktas to educate females, enabling them to give spiritual talks. Championed equality by teaching that moksh is attainable by everyone.',
//     images: ['https://placehold.co/400x300/9d0b0b/ffffff?text=Education+Reform'],
//     category: 'social',
//   },
//   {
//     title: 'Stopped Animal Sacrifice',
//     description:
//       'Stopped the cruel practice of animal sacrifice in yagnas, promoting ahimsa (non-violence) and compassion toward all living beings.',
//     images: ['https://placehold.co/400x300/b11226/ffffff?text=Ahimsa'],
//     category: 'social',
//   },
//   {
//     title: 'Broke Caste Barriers',
//     description:
//       'Allowed members from all varnas into the Swaminarayan Sampraday. Appointed people from lower varnas as personal attendants and ate alongside them, promoting social equality.',
//     images: ['https://placehold.co/400x300/9d0b0b/ffffff?text=Social+Equality'],
//     category: 'social',
//   },
//   {
//     title: 'Built International Relations',
//     description:
//       'Maintained excellent relationships with the British Imperial Government, who gifted land for the Amdavad mandir. Also maintained harmony with people of all religions.',
//     images: [
//       'https://placehold.co/400x300/b11226/ffffff?text=British+Relations',
//       'https://placehold.co/400x300/9d0b0b/ffffff?text=Sir+John+Malcolm',
//     ],
//     category: 'social',
//   },
// ];

// const categoryColors = {
//   spiritual: 'bg-purple-100 text-purple-700 border-purple-300',
//   social: 'bg-green-100 text-green-700 border-green-300',
//   literary: 'bg-blue-100 text-blue-700 border-blue-300',
//   architectural: 'bg-orange-100 text-orange-700 border-orange-300',
// };

// function AccomplishmentCard({ accomplishment, index }: { accomplishment: Accomplishment; index: number }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 100 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true, margin: '-100px' }}
//       transition={{ delay: index * 0.1 }}
//       className="flex-shrink-0 w-[400px] md:w-[500px]"
//       data-testid={`accomplishment-card-${index}`}
//     >
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full border-2 border-brand-muted hover:border-brand-secondary transition-all duration-300">
//         {/* Image Gallery */}
//         <div className="relative h-64 bg-gray-200 overflow-hidden group">
//           <motion.img
//             key={currentImageIndex}
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             src={accomplishment.images[currentImageIndex]}
//             alt={accomplishment.title}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//             data-testid={`accomplishment-image-${index}`}
//           />
          
//           {/* Image Navigation */}
//           {accomplishment.images.length > 1 && (
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//               {accomplishment.images.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentImageIndex(idx)}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     idx === currentImageIndex
//                       ? 'bg-white w-8'
//                       : 'bg-white/50 hover:bg-white/75'
//                   }`}
//                   aria-label={`View image ${idx + 1}`}
//                   data-testid={`image-nav-${index}-${idx}`}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Category Badge */}
//           <div className="absolute top-4 right-4">
//             <span
//               className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border ${
//                 categoryColors[accomplishment.category]
//               }`}
//             >
//               {accomplishment.category}
//             </span>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6 space-y-4">
//           <h3 className="font-serif text-2xl text-brand-primary font-bold leading-tight">
//             {accomplishment.title}
//           </h3>
//           <p className="text-text-primary leading-relaxed">{accomplishment.description}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function Accomplishments() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const { scrollXProgress } = useScroll({ container: scrollRef });
  
//   const progressWidth = useTransform(scrollXProgress, [0, 1], ['0%', '100%']);

//   const handleScroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const scrollAmount = 520; // card width + gap
//       const newPosition =
//         scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
//       scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="bg-bg-page py-16" data-testid="accomplishments-panel">
//       {/* Header */}
//       <div className="text-center mb-12 px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="font-serif text-5xl md:text-6xl text-brand-primary mb-4"
//         >
//           Divine Accomplishments
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-xl text-text-secondary max-w-3xl mx-auto"
//         >
//           A timeline of sacred achievements that transformed millions of lives
//         </motion.p>
//         <div className="w-32 h-1 bg-brand-secondary mx-auto mt-6" />

//         {/* Category Legend */}
//         <div className="flex flex-wrap justify-center gap-3 mt-8">
//           <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border ${categoryColors.spiritual}`}>
//             Spiritual
//           </span>
//           <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border ${categoryColors.social}`}>
//             Social
//           </span>
//           <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border ${categoryColors.literary}`}>
//             Literary
//           </span>
//           <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border ${categoryColors.architectural}`}>
//             Architectural
//           </span>
//         </div>
//       </div>

//       {/* Instructions */}
//       <div className="text-center mb-6 px-6">
//         <p className="text-text-secondary flex items-center justify-center gap-2">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
//           </svg>
//           Scroll horizontally to explore all accomplishments
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//           </svg>
//         </p>
//       </div>

//       {/* Timeline Container */}
//       <div className="relative">
//         {/* Navigation Buttons */}
//         <button
//           onClick={() => handleScroll('left')}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-brand-secondary transition-colors"
//           aria-label="Scroll left"
//           data-testid="scroll-left-button"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={() => handleScroll('right')}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-brand-secondary transition-colors"
//           aria-label="Scroll right"
//           data-testid="scroll-right-button"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Horizontal Scroll Area */}
//         <div
//           ref={scrollRef}
//           className="overflow-x-auto overflow-y-hidden scrollbar-hide px-12 md:px-20 py-8"
//           style={{
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none',
//           }}
//           data-testid="timeline-scroll-container"
//         >
//           {/* Timeline Track */}
//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="absolute top-32 left-0 right-0 h-1 bg-border-soft" />
//             <motion.div
//               className="absolute top-32 left-0 h-1 bg-brand-secondary"
//               style={{ width: progressWidth }}
//             />

//             {/* Cards */}
//             <div className="flex gap-8 relative">
//               {accomplishmentsData.map((accomplishment, index) => (
//                 <div key={index} className="relative">
//                   {/* Timeline Node */}
//                   {/* <div className="absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-brand-primary border-4 border-white shadow-lg z-10" /> */}
                  
//                   <AccomplishmentCard accomplishment={accomplishment} index={index} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="max-w-4xl mx-auto px-6 mt-8">
//           <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//             <motion.div
//               className="h-full bg-brand-secondary"
//               style={{ width: progressWidth }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="text-center mt-16 px-6"
//       >
//         <div className="max-w-4xl mx-auto bg-brand-muted rounded-2xl p-8">
//           <p className="text-2xl font-serif text-brand-primary italic leading-relaxed">
//             "Through these divine accomplishments, Lord Swaminarayan established a legacy of compassion,
//             equality, and spiritual enlightenment that continues to inspire millions."
//           </p>
//         </div>
//       </motion.div>

//       <style>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }


import { motion } from "framer-motion";
/* ================= TYPES ================= */

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: "spiritual" | "social" | "literary" | "architectural";
}

/* ================= DATA ================= */

// const accomplishmentsData: TimelineItem[] = [
//   {
//     id: 1,
//     title: "Established Ekantik Dharma",
//     description:
//       "Established ekantik dharma and destroyed adharma, reviving the eternal principles of righteousness and devotion that had been lost for ages.",
//     images: ["/src/assets/accomplishment/accomplishment1.png"],
//     category: "spiritual",
//   },
//   {
//     id: 2,
//     title: "Initiated Over 2000 Sadhus",
//     description:
//       "Initiated over 2000 sadhus, of which 500 were initiated as paramhans. Through these sadhus, He continues to remain on earth, guiding devotees toward salvation.",
//     images: [
//       "https://placehold.co/400x300/b11226/ffffff?text=Sadhu+Initiation",
//       "https://placehold.co/400x300/9d0b0b/ffffff?text=Paramhans",
//     ],
//     category: "spiritual",
//   },
//   {
//     id: 3,
//     title: "Built Six Grand Mandirs",
//     description:
//       "Built mandirs in Ahmedabad, Dholera, Junagadh, Bhuj, Gadhpur, and Vadtal. Installed murtis for bhaktas to always have the darshan of Bhagvan's divine form.",
//     images: [
//       "https://placehold.co/400x300/9d0b0b/ffffff?text=Ahmedabad+Dham",
//       "https://placehold.co/400x300/b11226/ffffff?text=Vadtal+Dham",
//       "https://placehold.co/400x300/9d0b0b/ffffff?text=Junagadh+Dham",
//     ],
//     category: "architectural",
//   },
//   {
//     id: 4,
//     title: "Established Two Acharya Seats",
//     description:
//       "Established two seats of leadership (gadi) and appointed two acharyas to protect and promote the sampradaya for future generations.",
//     images: ["https://placehold.co/400x300/b11226/ffffff?text=Acharya+Gadi"],
//     category: "spiritual",
//   },
//   {
//     id: 5,
//     title: "Authored Sacred Scriptures",
//     description:
//       "Revealed the philosophy of the Vedas in simple words. Wrote shastras, authenticated ancient scriptures, and summarized the essence of all shastras in the Shikshapatri.",
//     images: [
//       "https://placehold.co/400x300/9d0b0b/ffffff?text=Writing+Shastras",
//       "https://placehold.co/400x300/b11226/ffffff?text=Shikshapatri",
//     ],
//     category: "literary",
//   },
//   {
//     id: 6,
//     title: "Social Reforms & Humanitarian Work",
//     description:
//       "Opened charity houses for the poor, organized food and water aid during droughts, stopped the practice of sati and female infanticide, and saved countless lives.",
//     images: [
//       "https://placehold.co/400x300/9d0b0b/ffffff?text=Charity+Work",
//       "https://placehold.co/400x300/b11226/ffffff?text=Social+Reform",
//     ],
//     category: "social",
//   },
//   {
//     id: 7,
//     title: "Promoted Education for All",
//     description:
//       "Encouraged bhaktas to educate females, enabling them to give spiritual talks. Championed equality by teaching that moksh is attainable by everyone.",
//     images: ["https://placehold.co/400x300/9d0b0b/ffffff?text=Education+Reform"],
//     category: "social",
//   },
//   {
//     id: 8,
//     title: "Stopped Animal Sacrifice",
//     description:
//       "Stopped the cruel practice of animal sacrifice in yagnas, promoting ahimsa (non-violence) and compassion toward all living beings.",
//     images: ["https://placehold.co/400x300/b11226/ffffff?text=Ahimsa"],
//     category: "social",
//   },
//   {
//     id: 9,
//     title: "Broke Caste Barriers",
//     description:
//       "Allowed members from all varnas into the Swaminarayan Sampraday. Appointed people from lower varnas as personal attendants and ate alongside them, promoting social equality.",
//     images: ["https://placehold.co/400x300/9d0b0b/ffffff?text=Social+Equality"],
//     category: "social",
//   },
//   {
//     id: 10,
//     title: "Built International Relations",
//     description:
//       "Maintained excellent relationships with the British Imperial Government, who gifted land for the Amdavad mandir. Also maintained harmony with people of all religions.",
//     images: [
//       "https://placehold.co/400x300/b11226/ffffff?text=British+Relations",
//       "https://placehold.co/400x300/9d0b0b/ffffff?text=Sir+John+Malcolm",
//     ],
//     category: "social",
//   },
// ];
const accomplishmentsData: TimelineItem[] = [
  {
    id: 1,
    title: "Establishment of Ekantik Dharma & Spiritual Order",
    description:
      "Established ekantik dharma, destroyed adharma, and restored true devotion and righteousness. Revealed the philosophy of the Vedas in simple words, teaching the eternal spiritual path for all souls.",
    images: ["/src/assets/accomplishment/accomplishment1.png"],
    category: "spiritual",
  },
  {
    id: 2,
    title: "Formation of the Sadhu & Paramhans Tradition",
    description:
      "Initiated over 2000 sadhus, of which 500 were paramhans. Through these sadhus, Bhagwan Swaminarayan continues to guide devotees on earth, preserving spiritual wisdom and discipline.",
    images: ["/src/assets/accomplishment/accomplishment2.png"],
    category: "spiritual",
  },
  {
    id: 3,
    title: "Mandir Construction & Murti Pratishtha",
    description:
      "Built mandirs and installed divine murtis so that bhaktas could always have darshan of Bhagvan’s murti and remain spiritually connected.",
    images: ["/src/assets/accomplishment/accomplishment3.png"],
    category: "architectural",
  },
  {
    id: 4,
    title: "Revelation, Authentication & Composition of Shastras",
    description:
      "Wrote sacred shastras, authenticated ancient scriptures, validated shastras written by His sadhus, and preserved true spiritual knowledge for future generations.",
    images: ["/src/assets/accomplishment/accomplishment6.png"],
    category: "literary",
  },
  {
    id: 5,
    title: "Shikshapatri – Universal Code of Conduct",
    description:
      "Summarised the essence of all shastras in the Shikshapatri, providing a universal moral, social, and spiritual code for humanity.",
    images: ["/src/assets/accomplishment/accomplishment7.png"],
    category: "literary",
  },
  {
    id: 6,
    title: "Humanitarian Service & Social Reforms",
    description:
      "Opened charity houses for the poor, organised food and water aid during droughts, and eradicated cruel practices such as sati, female infanticide, and animal sacrifice, upholding compassion, ahimsa, and the sanctity of life.",
    images: ["/src/assets/accomplishment/accomplishment8.png"],
    category: "social",
  },
  {
    id: 7,
    title: "Equality, Education & Moksh for All",
    description:
      "Encouraged education for women, broke caste barriers by allowing all varnas into the Sampraday, ate with lower varnas, and taught that the jeev is neither male nor female, proving that moksh is attainable by everyone.",
    images: ["/src/assets/accomplishment/accomplishment7.png"],
    category: "social",
  },
  {
    id: 8,
    title: "Leadership, Interfaith Harmony & Global Relations",
    description:
      "Established two seats of leadership (gadīs) and appointed two acharyas to protect the Sampraday. Maintained harmony with all religions, had followers from other faiths, built strong relations with the British Government who gifted land for the Amdavad mandir, and presented the Shikshapatri to Sir John Malcolm (now preserved in the Bodleian Library, Oxford).",
    images: ["/src/assets/accomplishment/accomplishment5.png"],
    category: "social",
  },
];

/* ================= COMPONENT ================= */

export default function VerticalTimeline() {
  return (
    <section className="bg-[#fffaf4] py-24">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-red-200 -translate-x-1/2" />

        <div className="space-y-32">
          {accomplishmentsData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Bullet */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-[#9d0b0b] border-4 border-white shadow-lg" />
                </div>

                {/* Content */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 items-start gap-12 w-full ${
                  isLeft ? "pr-16" : "pl-16"
                 }`}
                >
                {/* TEXT */}
                <div className={isLeft ? "text-right order-1" : "text-left order-2"}>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#9d0b0b]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-700 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>

                {/* IMAGES */}
                <div
                className={
                  isLeft
                    ? "order-2 pl-8 md:pl-16"
                    : "order-1 pr-8 md:pr-16"
                }
              >
              <div className="grid grid-cols-1 gap-8">
                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className="w-full h-auto rounded-xl overflow-overflow-visiable"
                    >
                      <img
                        src={img}
                        alt={item.title}
                        className="w-full h-auto object-contain hover:scale-150 transition duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
