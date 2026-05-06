import Image from "next/image";

export default function DestinationCard({
  imageSrc = "",
  category = "",
  date = "",
  title = "",
  href = "",
}) {
  return (
    <div className="bg-white flex flex-col p-3 rounded-2xl shadow">
      {/* Image */}
      <div className="w-full h-[340px] relative overflow-hidden rounded-xl">
        <Image
          src={`/assets/images${imageSrc}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex  items-center justify-between mt-4 px-1">
        {/* Category & Date */}
        <div>
          <p className="text-sm text-gray-400">{date}</p>
          <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
            {title}
          </h3>
        </div>

        {/* Button */}
        <div className="ml-3 flex-shrink-0">
          <Image
            src="/assets/icons/round-arrow-pink.svg"
            width={34}
            height={34}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}
