'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cover from "@/components/Cover";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Work from "@/components/Projects";
import About from "@/components/About";
import Timeline from "@/components/TimeLine";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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
    <main className="relative flex justify-center items-center flex-col mx-auto bg-black">
      <header className="w-full">
          <Navbar/>
        </header>
      <section className="section cover">
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
      </section>
      <section className={`section hero ${showCover ? "hidden" : "block"}`}>
          <Hero/>
      </section>
      <section className="Work">
          <Work />
      </section>
      <section className="About">
          <About/>
      </section>
      <section className="Education-Work">
        {/* <Timeline/> */}
      </section>
      <section className="Testimonials">
          {/* <Testimonials/> */}
      </section>
      <section>
        {/* <Footer/> */}
      </section>
      {/* <Sidebar /> */}
    </main>
  );
}
