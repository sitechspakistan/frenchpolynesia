import Image from "next/image";

export default function FeatureCard({ imgAlt = "", icon = "", title }) {
  return (
    <>
      <div className="flex items-center gap-4">
        {/* Image Box */}
        <div className="h-[80px] w-[80px] bg-white shadow-md rounded-md flex items-center justify-center">
          {icon}
        </div>
        <span className="font-semibold text-gray-800 text-base">{title}</span>
      </div>
    </>
  );
}
