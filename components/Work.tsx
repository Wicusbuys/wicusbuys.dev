import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid"

const Work = () => {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-auto h-full pt-12 mb-12">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border bg-black"></div>
);
const items = [
  {
    title: "Contemporary Carve",
    description: "E-commerce website built with HTML, CSS, JS and PHP",
    header: (
      <img
        src="/images/contemporary_carve_1.png"
        alt="Contemporary Carve"
        className="w-full h-auto object-contain rounded-xl"
      />
    ),
    className: "flex-[60%] min-w-[30]"
  },
  {
    title: "WicusBuys.com",
    description: "My first portfolio website using HTML and CSS",
    header: (
      <img
        src="/images/wicusbuys_1.png"
        alt="Contemporary Carve"
        className="w-full max-h-[30rem] object-cover rounded-xl"
      />
    ),
    className: "flex-[30%] min-w-[20%]"
  },
  {
    title: "Galvatrack",
    description: "Android application to track order process using Android Studio and Java",
    header: (
      <img
        src="/images/gt_1.png"
        alt="Contemporary Carve"
        className="w-full max-h-[30rem] object-contain rounded-xl"
      />
    ),
    className: "flex-[30%] min-w-[20%]"
  },
  {
    title: "Upcomming - SA ID Validator",
    description:
      "Online site to validate SA ID's incorporating payment system for coffee.",
    header: (
      <img
        src="/images/contemporary_carve_1.png"
        alt="Contemporary Carve"
        className="w-full h-auto object-contain rounded-xl"
      />
    ),
    className: "flex-[60%] min-w-[30]"
  },
  {
    title: "Upcomming - Client Relationship Manager",
    description:
      "Client management and information system.",
    header: (
      <img
        src="/images/contemporary_carve_1.png"
        alt="Contemporary Carve"
        className="w-full h-auto object-contain rounded-xl"
      />
    ),
    className: "flex-[20%] min-w-[20%]"
  },
];

export default Work