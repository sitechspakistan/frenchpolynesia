import React from "react";

const SpecialistCard = ({ specialist, onClick }) => {
  return (
    <div
      className="bg-white flex flex-col p-3 rounded-2xl shadow justify-between"
      onClick={() => onClick(specialist)}
    >
      {/* Image */}
      <div className="w-full h-[340px]">
        <img
          src={`${specialist.image}`}
          alt={specialist.name}
          // fill="true"
          className="rounded-xl h-full w-full object-cover h-[340px]"
        />
      </div>

      {/* Content */}
      <div className="flex  items-center justify-between mt-4 px-1">
        {/* Category & Date */}
        <div>
          <p className="text-sm text-gray-400">{specialist.specialization}</p>
          <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide line-clamp-2">
            {specialist.name}
          </h3>
        </div>

        {/* Button */}
        <div className="ml-3 flex-shrink-0">
          <img
            src="/assets/icons/round-arrow-pink.svg"
            width={34}
            height={34}
            alt={specialist.name}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;
