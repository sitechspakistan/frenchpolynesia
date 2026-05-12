import Image from "next/image";

export default function FeatureCard({ imgAlt = "", icon = "", title }) {
  return (
    <>
      <div className="flex items-center gap-4">
        {/* Image Box */}
        <div className="h-[40px] w-[40px] md:h-[80px] md:w-[80px] bg-white shadow-md rounded-md flex items-center justify-center [&_svg]:w-[24px] [&_svg]:h-[24px] md:[&_svg]:w-[40px] md:[&_svg]:h-[40px]">
          {icon}
        </div>
        <span className="font-semibold text-gray-800 text-sm md:text-base">
          {title}
        </span>
      </div>
    </>
  );
}
