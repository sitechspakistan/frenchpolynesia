import Image from "next/image";
import React, { useEffect } from "react";

const SpecialistModal = ({ specialist, onClose }) => {
  useEffect(() => {
    if (specialist) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [specialist]);

  if (!specialist) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="
          bg-white overflow-hidden shadow-2xl rounded-3xl
          flex flex-col md:flex-row
          w-[80%]  md:w-4xl
          h-[80vh] md:h-[60vh] overflow-y-auto md:overflow-hidden
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ Mobile: Close Button — sabse upar */}
        <div
          className="flex sm:hidden items-center justify-end px-5 py-4  cursor-pointer flex-shrink-0"
          onClick={onClose}
        >
          <Image
            src="/assets/icons/close.svg"
            alt="Close Modal"
            width={28}
            height={28}
          />
        </div>

        {/* Image */}
        <div className="relative w-full md:w-[50%] h-[220px] md:h-full flex-shrink-0">
          <Image
            src={specialist.image}
            alt={specialist.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="px-6  pb-8 pt-5 md:pt-6 flex flex-col justify-start gap-3 w-full md:w-[50%] gap-3 md:h-auto md:overflow-y-auto
 "
        >
          {/* Desktop: Close Button — content ke andar top right */}
          <div
            className="hidden md:flex items-center justify-between cursor-pointer"
            onClick={onClose}
          >
            <h3 className="text-2xl font-bold">{specialist.name}</h3>
            <Image
              src="/assets/icons/close.svg"
              alt="Close Modal"
              width={32}
              height={32}
            />
          </div>

          <p className="text-sm font-semibold text-[#666666]">
            {specialist.specialization}
          </p>
          <p className="text-[#666666] text-base leading-relaxed mt-2">
            "{specialist.quote}"
          </p>

          <p>
            For contact please send email to <br />
            <a
              href={`mailto:${specialist.email}`}
              className="text-gray-600 underline"
            >
              {specialist.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialistModal;
