"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const sectionRef = useRef(null);
  const router = useRouter();

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* First Section */}
      <div className="h-screen bg-pink-200 flex items-center justify-center flex-col">
        <h1 
          onClick={scrollToSection}
          className="text-2xl animate-bounce cursor-pointer"
        >
          Scroll Down
        </h1>
      </div>

      {/* Envelope Section */}
      <div 
        ref={sectionRef} 
        className="h-screen flex items-center justify-center bg-white"
      >
        <img
          src="/envelope.png"
          alt="envelope"
          className="w-40 cursor-pointer hover:scale-110 transition"
          onClick={() => router.push("/second")}
        />
      </div>
    </div>
  );
}