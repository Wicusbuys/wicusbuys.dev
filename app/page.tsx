'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cover from "@/components/Cover";

export default function Home() {

  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowCover(false), 3000); // 3 seconds fade-out
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="relative h-screen flex justify-center items-center flex-col overflow-hidden mx-auto bg-black">
      <AnimatePresence>
        {showCover && (
          <motion.section
            className="section cover h-svh"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Cover />
          </motion.section>
        )}
      </AnimatePresence>

      {!showCover && (
        <section className="section hero h-screen">
          <h1 className="text-white">Hello world</h1>
        </section>
      )}  
    </main>
  );
}