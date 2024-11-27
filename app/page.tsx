'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cover from "@/components/Cover";

export default function Home() {
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      setShowCover(false);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <main className="relative flex justify-center items-center flex-col mx-auto bg-black h-screen overflow-hidden">
      <AnimatePresence>
        {showCover && (
          <motion.section
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Cover />
          </motion.section>
        )}
      </AnimatePresence>

      <section className={`relative w-full h-full ${showCover ? "hidden" : "block"}`}>
        <div className="section hero h-screen flex items-center justify-center animate-fadeIn_long">
          <h1 className="text-white">Hello world</h1>
        </div>
      </section>
    </main>
  );
}
