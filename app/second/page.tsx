"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SecondPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

      {/* GLOBAL BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 -z-10" />

      {/* ========== SECTION 1 ========== */}
      <section className="snap-start h-screen flex items-center justify-center overflow-hidden">

        <div className="relative z-10 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4">

          {/* INTRO TEXT */}
          {!showVideo && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              onAnimationComplete={() => setShowVideo(true)}
            >
              <h1 className="text-[#CE6F79] text-4xl md:text-5xl font-semibold text-center">
                You’re Invited 💌
              </h1>
            </motion.div>
          )}

          {/* VIDEO (starts AFTER text) */}
          {showVideo && (
            <motion.video
              src="/inv.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          )}

        </div>
      </section>

      {/* ========== SECTION 2 ========== */}
      <section className="snap-start h-screen flex flex-col items-center justify-center gap-6">

        <p className="text-[#CE6F79] text-3xl md:text-4xl font-semibold mb-7 text-center px-4 ">
          Our location 📍
        </p>

        <div className="relative w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3">

          <img src="/loc.png" alt="location" className="w-full" />

          <button
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/b7hPRVd7ztRGsx8T8?g_st=iw",
                "_blank"
              )
            }
            className="absolute left-1/2 -translate-x-1/2 bottom-[20%]
            px-6 py-3 bg-[#CE6F79]/90 backdrop-blur-md text-white
            rounded-full text-base md:text-lg hover:scale-110 transition shadow-xl cursor-pointer"
          >
            Open Location
          </button>

        </div>
      </section>

      {/* ========== SECTION 3 ========== */}
<section className="snap-start h-screen flex flex-col items-center justify-center gap-6">

  <p className="text-[#CE6F79] text-3xl md:text-4xl font-semibold mb-7 text-center px-4">
     Scan to join & share memories 📸
  </p>

  <img
    src="/qr.png"
    alt="QR Code"
    className="w-2/3 md:w-1/4 rounded-xl shadow-xl"
  />

  {/* BUTTON */}
  <button
    onClick={() =>
      window.open(
        "https://chat.whatsapp.com/CUMUG63le4F3PUxQToDELf?mode=gi_t",
        "_blank"
      )
    }
    className="
      px-6 py-3
      bg-[#CE6F79]
      text-white
      rounded-full
      text-base md:text-lg
      font-semibold
      hover:scale-110
      transition
      shadow-lg
      mt-4
      cursor-pointer
    "
  >
      You can join now <span className="text-pink-400">💗</span>

  </button>

</section>

    </main>
  );
}