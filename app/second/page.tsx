"use client";

import { motion } from "framer-motion";

export default function SecondPage() {
  return (
    <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

      {/* ========== GLOBAL BACKGROUND VIDEO ========== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* dark overlay optional */}
      <div className="fixed inset-0 bg-black/30 -z-10" />

      {/* ========== SECTION 1 ========== */}
      
    <section className="snap-start h-screen flex items-center justify-center overflow-hidden">

  <div className="relative z-10 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4">

    {/* VIDEO */}
    <motion.video
      src="/inv.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full rounded-2xl"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    />

    {/* TEXT BEFORE / INTRO */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      <h1 className="text-white text-4xl md:text-5xl font-semibold text-center">
        You’re Invited 💌
      </h1>
    </motion.div>

  </div>
</section>

      {/* ========== SECTION 2 ========== */}
    <p className="relative z-10 text-white text-4xl mt-16 mb-7 font-semibold flex items-center justify-center gap-2">
  Our location <span>📍</span>
</p>
      <section className="snap-start h-screen flex items-center justify-center">

        <div className="relative z-10 w-3/4 md:w-1/3">

          <img
            src="/loc.png"
            alt="location"
            className="w-full"
          />

          <button
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/b7hPRVd7ztRGsx8T8?g_st=iw",
                "_blank"
              )
            }
            className="absolute bottom-40 left-1/2 -translate-x-1/2 px-6 py-3 bg-[#CE6F79] text-white rounded-full text-lg hover:scale-110 transition shadow-lg"
          >
            Open Location
          </button>

        </div>
      </section>

      {/* ========== SECTION 3 ========== */}
      <section className="snap-start h-screen flex flex-col items-center justify-center gap-6">
  <p className="relative z-10 text-white text-4xl mb-7 font-semibold">
          Scan to join WhatsApp group 📸
        </p>

        <img
          src="/qr.png"
          alt="QR Code"
          className="relative z-10 w-2/3 md:w-1/4 rounded-xl shadow-xl"
        />

      

      </section>

    </main>
  );
}