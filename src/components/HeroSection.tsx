"use client"

import { useEffect, useState } from "react";

import Hero1 from "@/assets/Hero1.jpeg"
import Hero2 from "@/assets/Hero2.jpeg"
import Hero3 from "@/assets/Hero3.jpeg"

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const images = [
   Hero1, Hero2, Hero3
];

const aboutSections = [
  {
    id: 1,
    category: "Bhagwan Swaminarayan",
    title: "About Bhagwan Swaminarayan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam nesciunt accusantium assumenda veritatis ducimus commodi optio, asperiores aspernatur repudiandae exercitationem eum maxime beatae sint sunt hic qui ratione reprehenderit? Saepe voluptates vitae amet iste numquam ab sunt, voluptatibus repudiandae assumenda mollitia velit impedit pariatur quia inventore officia illo. Quibusdam."
  },
  {
    id: 2,
    category: "Uddhav Sampraday",
    title: "About Udhhav Sampraday",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam nesciunt accusantium assumenda veritatis ducimus commodi optio, asperiores aspernatur repudiandae exercitationem eum maxime beatae sint sunt hic qui ratione reprehenderit? Saepe voluptates vitae amet iste numquam ab sunt, voluptatibus repudiandae assumenda mollitia velit impedit pariatur quia inventore officia illo. Quibusdam."
  },
  {
    id: 3,
    category: "Our Journey",
    title: "Our Journey",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam nesciunt accusantium assumenda veritatis ducimus commodi optio, asperiores aspernatur repudiandae exercitationem eum maxime beatae sint sunt hic qui ratione reprehenderit? Saepe voluptates vitae amet iste numquam ab sunt, voluptatibus repudiandae assumenda mollitia velit impedit pariatur quia inventore officia illo. Quibusdam."
  }
]

const aboutCategories = ["Bhagwan Swaminarayan", "Uddhav Sampraday", "Our Journey"];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [activeAbout, setActiveAbout] = useState("Bhagwan Swaminarayan");

  const filteredAbout = aboutSections.filter(
    section => section.category === activeAbout
  );
  console.log(filteredAbout);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section
      className="relative h-screen pt-5 flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>

      {/* Decorative animated leaf */}
      <motion.div 
        className="absolute top-20 right-20 opacity-20"
        animate={{ 
          rotate: [0, 10, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
       
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full">

      {/* Horizontal transparent background */}
      <div className="absolute inset-0 bg-bla"></div>

      {/* Text content */}
      {/* <div className="relative px-6 py-16 max-w-5xl mx-auto text-center text-white"> */}

        {/* Sanskrit Line */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm md:text-lg tracking-widest text-white/80 mb-4"
        >
          ॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥
        </motion.p> */}

        {/* Main Heading */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-8xl font-medium leading-tight mb-6 drop-shadow-lg"
        >
          Shree Swaminarayan <br />
          Mandir
        </motion.h1> */}

        {/* Location Line */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base md:text-lg text-white/90 mb-4"
        >
          Palatine, Chicago • Vadtaldham Tradition
        </motion.p> */}

        {/* Description */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-white/80 mb-10"
        >
          A sacred abode of peace, devotion, and spiritual awakening
        </motion.p> */}

        {/* Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button>
            Today&apos;s Darshan
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Upcoming Events
          </Button>
        </motion.div>
      </div> */}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 flex space-x-3 z-10">
        {images.map((_, index) => (
          <motion.span
            key={index}
            onClick={() => setCurrent(index)}
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === index ? "bg-white w-8" : "bg-white/50"
            }`}
          ></motion.span>
        ))}
      </div>
    </section>

    {/*ABOUT SECTION*/}
    <section className="bg-[#faf7f4] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest text-gray-500 mb-4">
            ॥ SHREE SWAMINARAYANO VI JAYATE ॥
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            About Shree Swaminarayan Mandir
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Vadtal Dham, Palatine, Chicago is a divine spiritual center rooted in the
            Swaminarayan Sampraday and established to nurture devotion, culture,
            and righteousness.
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-12">
          {aboutCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveAbout(category)}
              className={`px-4 py-2 rounded-md transition
                ${activeAbout === category
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="max-w-2xl mx-auto">
            {filteredAbout.map(item => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.description}
                </p>

              </div>
            ))}
        </div>
     </section>
    </>
  );
}