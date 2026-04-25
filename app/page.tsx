"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const carnation = localFont({
  src: "./Carnation.ttf",
});

export default function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

      {/* ========== SECTION 1 ========== */}
      <section className="snap-start h-screen relative flex items-center justify-center flex-col overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className={`text-5xl md:text-7xl mb-16 text-[#CE6F79] ${carnation.className}`}>
            Scroll down
          </h1>

          {/* ARROWS */}
          <div
            onClick={scrollToSection}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* Arrow 1 */}
            <motion.div
              style={{
                width: 22,
                height: 22,
                borderRight: "3px solid #CE6F79",
                borderBottom: "3px solid #CE6F79",
                rotate: 45,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [-8, 0, 8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Arrow 2 */}
            <motion.div
              style={{
                width: 22,
                height: 22,
                borderRight: "3px solid #CE6F79",
                borderBottom: "3px solid #CE6F79",
                rotate: 45,
                marginTop: -10,
              }}
              animate={{
                opacity: [1, 1, 0],
                y: [0, 8, 16],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 2 ========== */}
      <section
        ref={sectionRef}
        className="snap-start h-screen relative flex items-center justify-center overflow-hidden"
      >

        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* IMAGE */}
        <img
          src="/thisone.jpeg"
          alt="envelope"
          className="relative z-10 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2 cursor-pointer transition duration-500 hover:scale-110"
          onClick={() => router.push("/second")}
        />
      </section>

    </main>
  );
}