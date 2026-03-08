
import { motion } from "framer-motion";
import image1 from "@/assets/accomplishment/accomplishment1.png";
import accomplishment2 from "@/assets/accomplishment/accomplishment2.png";
import accomplishment3 from "@/assets/accomplishment/accomplishment3.png";
import accomplishment5 from "@/assets/accomplishment/accomplishment4.2.png"
import accomplishment6 from "@/assets/accomplishment/accomplishment6.png";
import accomplishment7 from "@/assets/accomplishment/accomplishment7.png";
import accomplishment8 from "@/assets/accomplishment/accomplishment8.png";
/* ================= TYPES ================= */

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: "spiritual" | "social" | "literary" | "architectural";
}

const accomplishmentsData: TimelineItem[] = [
  {
    id: 1,
    title: "Establishment of Ekantik Dharma & Spiritual Order",
    description:
      "• Initiated over 2000 sadhus, of which 500 were initiated as paramhans  He remains on earth through these sadhus.",
    images: [image1],
    category: "spiritual",
  },
  {
    id: 2,
    title: "Formation of the Sadhu & Paramhans Tradition",
    description:
      "• Built mandirs, and installed murtis for bhaktas to always have the darshan of Bhagvan’s murti.",
    images: [accomplishment2],
    category: "spiritual",
  },
  {
    id: 3,
    title: "Mandir Construction & Murti Pratishtha",
    description:
      "• Established two seats of leadership (gadi), and two acharyas to protect and promote the sampradaya.",
    images: [accomplishment3],
    category: "architectural",
  },
  {
    id: 4,
    title: "Spiritual Teachings & Social Reforms",
    description:
      "• Revealed the philosophy of the Veds in simple words \n"+
      "• Wrote shastras, and authenticated ancient shastras, and shastras written by His sadhus \n"+
      "• Summarised the essence of all the shastras in the Shikshapatri \n"+
      "• Opened charity-houses for the poor \n"+
      "• Organised food and water aid for people during times of drought \n"+
      "• Stopped the practice of sati, as it was suicide/murder (some were forced) – human life is only given and taken by Bhagvan \n"+
      "• Stopped female infanticide (killing of baby girls) \n"+
      "• Encouraged the bhaktas to educate females, which meant they were able to give talks about Bhagvan \n",
    images: [accomplishment5],
    category: "architectural",
  },
 {
  id: 5,
  title: "Revelation, Authentication & Composition of Shastras",
  description:
    "• Stopped the sacrifice of animals in yagnas.\n" +
    "• Allowed members from all varnas (castes) into the Swaminarayan Sampraday.\n" +
    "• Instructed His paramhans to collect alms from all sections of society.\n" +
    "• Appointed people from the lower varnas as His personal attendants and ate along with them.\n" +
    "• However, taking food from members of lower varnas was not supported by Him.\n" +
    "• Dispelled the myth that moksh was not attainable by everyone.\n" +
    "• Taught mumukshu bhaktas that the jeev is neither male nor female and everyone is equal in the eyes of Bhagvan.",
  images: [accomplishment6],
  category: "literary",
},

  {
    id: 6,
    title: "Shikshapatri – Universal Code of Conduct",
    description:
      "• Had good relationships with the British Imperial Government, so they gifted Him with land to build a mandir in Amdavad.\n"+
      "• Maintained good relationships with people of other religions; had followers from other religions even though some of His attendants were Muslims, they wore a kanthi and followed the panchvartman",
    images: [accomplishment7],
    category: "literary",
  },
  {
    id: 7,
    title: "Humanitarian Service & Social Reforms",
    description:
      "• Gave the Governor of Bombay, Sir john Malcolm, a copy of the Shikshapatri (is kept in Bodleian Library in Oxford) ",
    images: [accomplishment8],
    category: "social",
  },
  // {
  //   id: 7,
  //   title: "Equality, Education & Moksh for All",
  //   description:
  //     "• Encouraged education for women, broke caste barriers by allowing all varnas into the Sampraday, ate with lower varnas, and taught that the jeev is neither male nor female, proving that moksh is attainable by everyone.",
  //   images: [accomplishment7],
  //   category: "social",
  // },
  // {
  //   id: 8,
  //   title: "Leadership, Interfaith Harmony & Global Relations",
  //   description:
  //     "• Established two seats of leadership (gadīs) and appointed two acharyas to protect the Sampraday. Maintained harmony with all religions, had followers from other faiths, built strong relations with the British Government who gifted land for the Amdavad mandir, and presented the Shikshapatri to Sir John Malcolm (now preserved in the Bodleian Library, Oxford).",
  //   images: [accomplishment5],
  //   category: "social",
  // },
];

/* ================= COMPONENT ================= */

export default function VerticalTimeline() {
  return (
    <section className="bg-[#fffaf4] py-24">
      
      {/* ========== DESKTOP TIMELINE (md and above) ========== */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-200 -translate-x-1/2" />

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
                  <div className={isLeft ? "text-left order-1" : "text-left order-2"}>
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#9d0b0b]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-700 leading-relaxed text-lg whitespace-pre-line">
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
                          className="w-full h-auto object-contain hover:scale-150 transition duration-800"
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
      </div>

      {/* ========== MOBILE LAYOUT (below md) ========== */}
      <div className="block md:hidden px-4 py-12">
        <div className="max-w-lg mx-auto space-y-6">
          {accomplishmentsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Images Section - Centered */}
              <div className="flex flex-col gap-3 p-4 bg-gray-50">
                {item.images.map((img, i) => (
                  <div 
                    key={i} 
                    className="flex justify-center w-full"
                  >
                    <div className="w-full max-w-xs h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#9d0b0b] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
