import React from "react";

const features = [
  {
    desc: "Destination specialists in French Polynesia",
  },
  {
    desc: "Personalized concierge-level planning",
  },
  {
    desc: "Insider knowledge of the best islands, resorts, and experiences",
  },
  {
    desc: "Seamless coordination between islands and flights",
  },
  {
    desc: "Customized itineraries designed around your travel style",
  },
  {
    desc: "Exclusive luxury perks and preferred partnerships",
  },
  {
    desc: "Support before, during, and after your trip",
  },
  {
    desc: "Access to experiences most travelers never find on their own",
  },
];

const AboutFeatureCard = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 overflow-hidden">
        {features.map((f, i) => (
          <div
            key={i}
            className={`flex items-center justify-center p-10 md:p-6 bg-blue-50 rounded-lg gap-5`}
          >
            <svg
              className="w-10 h-10 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M8.5 12.5L10.5 14.5L15.5 9.5"
                  stroke="#e31c90"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                  stroke="#e31c90"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </g>
            </svg>
            <p className="text-base text-gray-500 ">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFeatureCard;
