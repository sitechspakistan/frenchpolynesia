export default function DestinationSecCard({
  tagline = "Adventure Meets Beauty",
  name = "MOOREA",
  description = "Moorea offers lush mountains, adventure activities, and scenic beauty.",
  activities = ["MOUNTAIN HIKING", "DIVING", "WHALE WATCHING"],
  bestTime = "July to October — whale watching season and perfect hiking weather.",
  perfectFor = "Adventure travelers, divers, and those seeking dramatic natural landscapes.",
  image = "/moorea.jpg",
  imageAlt = "Moorea destination",
  imagePosition = "left",
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden bg-white max-w-7xl mx-auto gap-5 mb-10 last:mb-0  ${imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} `}
    >
      {/* Left: Image */}
      <div className="w-full md:w-[45%] flex-shrink-0 p-4 bg-(--section-bg) rounded-xl ">
        <img
          src={image}
          alt={imageAlt}
          className="object-cover h-full rounded-sm"
        />
      </div>

      {/* Right: Content */}
      <div
        className={`w-full md:w-[55%] flex flex-col justify-center py-0 md:py-12 gap-4 md:gap-10`}
      >
        {/* Tagline */}
        <div>
          <p className="text-gray-500 text-base font-normal tracking-wide mb-1">
            {tagline}
          </p>

          {/* Destination Name */}
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 md:mb-3">
            {name}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed ">
            {description}
          </p>
        </div>

        {/* Things To Do */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 tracking-widest uppercase mb-2">
            Things To Do
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {activities.map((activity, index) => (
              <span
                key={index}
                className="border border-pink-500 text-pink-500 text-[11px] font-bold tracking-widest px-3 md:px-4 py-1 md:py-2 rounded-sm uppercase"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>

        {/* Best Time To Visit */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 tracking-widest uppercase mb-1 md:mb-2">
            Best Time To Visit
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">{bestTime}</p>
        </div>

        {/* Perfect For */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 tracking-widest uppercase mb-1 md:mb-2">
            Perfect For
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {perfectFor}
          </p>
        </div>
      </div>
    </div>
  );
}
