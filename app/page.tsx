"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cover from "@/components/Cover";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Timeline from "@/components/TimeLine";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    const disableScroll = () => (document.body.style.overflow = "hidden");
    const enableScroll = () => (document.body.style.overflow = "auto");

    disableScroll();

    const timeout = setTimeout(() => {
      setShowCover(false);
      enableScroll();
    }, 3000);

    return () => {
      clearTimeout(timeout);
      enableScroll();
    };
  }, []);

  return (
    <>
      <header className="w-full fixed top-0 z-40">
        <Navbar />
      </header>

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

      <main
        className={`relative mx-auto flex flex-col items-center justify-center bg-black ${
          showCover ? "opacity-0 pointer-events-none" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <section id="intro" className="section hero">
          <Hero />
        </section>
        <section id="projects" className="section projects">
          <Projects />
        </section>
        <section id="about" className="section about">
          <About />
        </section>
        <section id="timeline" className="section timeline">
          <Timeline />
        </section>
        <section id="testimonials" className="section testimonials">
          <Testimonials />
        </section>
        <section id="footer" className="section footer">
          <Footer />
        </section>
        <Sidebar />
      </main>
    </>
  );
}
