import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl pt-12 mb-48 px-8 md:px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  link?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  header,
  link,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group hover:shadow-xl transition-shadow duration-200 p-4 bg-black border border-white/20 flex flex-col space-y-4",
        className
      )}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full no-underline"
      >
        {header}
        <div className="group-hover:translate-x-2 transition-transform duration-200 font-bold text-xl text-neutral-200 my-2">
          {title}
        </div>
        <div className="group-hover:translate-x-2 transition-transform duration-200 font-normal text-lg text-neutral-300">
          {description}
        </div>
      </a>
    </div>
  );
};
