import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
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

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col space-y-4",
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
        <div className="group-hover/bento:translate-x-2 transition duration-200 font-bold text-xl text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="group-hover/bento:translate-x-2 transition duration-200 font-normal text-lg text-neutral-300">
          {description}
        </div>
      </a>
    </div>
  );
};
