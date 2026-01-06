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

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
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
      <div className="relative px-6 py-16 max-w-5xl mx-auto text-center text-white">

        {/* Sanskrit Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm md:text-lg tracking-widest text-white/80 mb-4"
        >
          ॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-8xl font-medium leading-tight mb-6 drop-shadow-lg"
        >
          Shree Swaminarayan <br />
          Mandir
        </motion.h1>

        {/* Location Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base md:text-lg text-white/90 mb-4"
        >
          Palatine, Chicago • Vadtaldham Tradition
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-white/80 mb-10"
        >
          A sacred abode of peace, devotion, and spiritual awakening
        </motion.p>

        {/* Buttons */}
        <motion.div
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
      </div>
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
  );
}