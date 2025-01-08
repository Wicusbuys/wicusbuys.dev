"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const AnimatedTestimonials = ({
  testimonials,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const calculateMaxHeight = () => {
      if (containerRef.current) {
        const heights = Array.from(containerRef.current.children).map(
          (child) => (child as HTMLElement).offsetHeight
        );
        setMaxHeight(Math.max(...heights));
      }
    };
  
    calculateMaxHeight();
  
    window.addEventListener("resize", calculateMaxHeight);
  
    return () => window.removeEventListener("resize", calculateMaxHeight);
  }, [testimonials]);

  return (
    <div className="mx-auto px-8 max-w-2xl antialiased font-sans py-20 md:max-w-3xl lg:max-w-4xl">
      <div className="relative grid grid-cols-1">
        <div className="flex justify-between flex-col">
          <div
            className="relative flex items-center justify-center"
            ref={containerRef}
            style={{ height: maxHeight }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
              key={index}
              initial={{
                y: 10,
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                y: index === active ? 0 : 10,
                opacity: index === active ? 1 : 0,
                scale: index === active ? 1 : 0.95,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              style={{
                position: index === active ? "static" : "absolute",
                width: "100%",
              }}
            >
                <div
                  className="p-8 rounded-2xl flex flex-col justify-center"
                  style={{
                    background: "linear-gradient(180deg, #4B23FF, #A100FF)",
                  }}
                >
                  <div className="flex flex-col h-full justify-center">
                    <p className="text-lg text-white">{testimonial.quote}</p>
                    <h3 className="text-base text-gray-200 mt-6">
                      {testimonial.name}
                    </h3>
                    <p className="text-base text-gray-200">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-6 pt-12">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-secondary-light flex items-center justify-center group/button hover:bg-white transition-colors duration-300"
            >
              <IconArrowLeft className="h-5 w-5 text-black" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-secondary-light flex items-center justify-center group/button hover:bg-white transition-colors duration-300"
            >
              <IconArrowRight className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
