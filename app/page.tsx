"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

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
    <main>
      {/* First Section */}
      <section className="relative h-screen flex items-center justify-center flex-col text-white overflow-hidden">

        {/* 🎥 Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl font-serif mb-10 text-[#CE6F79]">
            Scroll down
          </h1>

          <div
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={scrollToSection}
          >
            <div className="arrow arrow1" />
            <div className="arrow arrow2" />
          </div>
        </div>
      </section>

      {/* Envelope Section */}
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-center bg-white"
      >
        <img
          src="/envelope.png"
          alt="envelope"
          className="w-40 cursor-pointer transition hover:scale-110"
          onClick={() => router.push("/second")}
        />
      </section>
    </main>
  );
}