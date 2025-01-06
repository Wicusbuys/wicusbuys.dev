import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Projects: React.FC = () => {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[auto]">
      {items.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          link={item.link}
        />
      ))}
    </BentoGrid>
  );
};

const items = [
  {
    title: "Contemporary Carve",
    description: "E-commerce website built with HTML, CSS, JS, and PHP.",
    header: (
      <img
        src="/images/contemporary_carve_1.png"
        alt="Contemporary Carve Screenshot"
        className="w-full h-auto object-contain rounded-xl"
      />
    ),
    link: "https://github.com/Wicusbuys/ContemporaryCarve-eCommerce_JsPHPXAMPP",
    className: "md:col-span-2",
  },
  {
    title: "WicusBuys.com",
    description: "My first portfolio website using HTML and CSS.",
    header: (
      <img
        src="/images/wicusbuys_1.png"
        alt="Portfolio Website Screenshot"
        className="w-full h-auto object-contain rounded-xl"
      />
    ),
    link: "https://wicusbuys.netlify.app/",
    className: "md:col-span-1",
  },
  {
    title: "Galvatrack",
    description:
      "Android application to track order processes using Android Studio and Java.",
    header: (
      <img
        src="/images/gt_1.png"
        alt="Galvatrack Screenshot"
        className="w-full h-auto object-contain rounded-xl"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "Upcoming - SA ID Validator",
    description:
      "Online site to validate SA IDs incorporating a payment system for coffee.",
    header: (
      <img
        src="/images/coming_soon.png"
        alt="SA ID Validator Placeholder"
        className="w-full h-auto object-contain rounded-xl"
      />
    ),
    className: "md:col-span-2",
  },
  {
    title: "Upcoming - Client Relationship Manager",
    description: "Client management and information system.",
    header: (
      <img
        src="/images/coming_soon.png"
        alt="Client Relationship Manager Placeholder"
        className="w-full h-auto object-contain rounded-xl"
      />
    ),
    className: "md:col-span-3",
  },
];

export default Projects;
