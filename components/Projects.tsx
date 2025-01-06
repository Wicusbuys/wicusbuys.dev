import React from "react";
import Image from "next/image";
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
      <Image
        src="/images/contemporary_carve_1.webp"
        alt="Contemporary Carve Screenshot"
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-xl"
        quality={100}
      />
    ),
    link: "https://github.com/Wicusbuys/ContemporaryCarve-eCommerce_JsPHPXAMPP",
    className: "md:col-span-2",
  },
  {
    title: "WicusBuys.com",
    description: "My first portfolio website using HTML and CSS.",
    header: (
      <Image
        src="/images/wicusbuys_1.webp"
        alt="Portfolio Website Screenshot"
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-xl"
        quality={100}
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
      <Image
        src="/images/gt_1.webp"
        alt="Galvatrack Screenshot"
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-xl"
        quality={100}
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "Upcoming - SA ID Validator",
    description:
      "Online site to validate SA IDs incorporating a payment system for coffee.",
    header: (
      <Image
        src="/images/coming_soon.webp"
        alt="SA ID Validator Placeholder"
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-xl"
        quality={100}
      />
    ),
    className: "md:col-span-2",
  },
  {
    title: "Upcoming - Client Relationship Manager",
    description: "Client management and information system.",
    header: (
      <Image
        src="/images/coming_soon.webp"
        alt="Client Relationship Manager Placeholder"
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-xl"
        quality={100}
      />
    ),
    className: "md:col-span-3",
  },
];

export default Projects;
