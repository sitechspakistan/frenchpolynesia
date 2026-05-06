import React from "react";

const features = [
  {
    icon: (
      <svg
        width="49"
        height="55"
        viewBox="0 0 49 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.375 17.5V30"
          stroke="#E31C90"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.875 2.5H31.875"
          stroke="#E31C90"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.875 17.5C4.125 21.15 2.5 25.7 2.5 30.625C2.5 42.7 12.3 52.5 24.375 52.5C36.45 52.5 46.25 42.7 46.25 30.625C46.25 18.55 36.45 8.75 24.375 8.75C21.225 8.75 18.25 9.4 15.55 10.6"
          stroke="#E31C90"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "PERSONALIZED JOURNEYS",
    desc: "Custom routes, unique stays, and experiences made just for you",
  },
  {
    icon: (
      <svg
        width="50"
        height="55"
        viewBox="0 0 50 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9998 2.5V9.99981"
          stroke="#E31C90"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.999 2.5V9.99981"
          stroke="#E31C90"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.4998 24.9993H32.4992"
          stroke="#E31C90"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.4998 34.999H24.9994"
          stroke="#E31C90"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 21.6246C2.5 9.87491 6.67489 6.72499 14.9997 6.25H34.9992C43.324 6.69999 47.4988 9.87491 47.4988 21.6246V37.4992"
          stroke="#E31C90"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.4992 52.4999H17.4996C4.99994 52.4999 2.5 47.3501 2.5 37.0503V31.8254"
          stroke="#E31C90"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M47.4989 37.499L32.4993 52.4987V44.9988C32.4993 39.999 34.9992 37.499 39.9991 37.499H47.4989Z"
          stroke="#E31C90"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "STRESS FREE PLANNING",
    desc: "We organize every detail from tickets to activities",
  },
  {
    icon: (
      <svg
        width="51"
        height="55"
        viewBox="0 0 51 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 9.92956C2.5 5.827 5.85209 2.5 10.0047 2.5H40.0234C44.176 2.5 47.5281 5.827 47.5281 9.92956V37.2217C47.5281 41.3242 44.176 44.6512 40.0234 44.6512H38.1222C36.121 44.6512 34.2198 45.4267 32.8189 46.8276L28.5412 51.0554C26.59 52.9816 23.413 52.9816 21.4618 51.0554L17.1841 46.8276C15.7833 45.4267 13.8571 44.6512 11.8808 44.6512H10.0047C5.85209 44.6512 2.5 41.3242 2.5 37.2217V20.1859"
          stroke="#E31C90"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5063 20.4107C12.5063 18.0842 14.4075 16.1829 16.734 16.1829C19.0604 16.1829 20.9616 18.0842 20.9616 20.4107C20.9616 25.1136 14.2824 25.6139 12.8065 30.0917C12.5063 31.0173 13.2818 31.9428 14.2574 31.9428H20.9616"
          stroke="#E31C90"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.1202 31.918V17.6342C35.1202 16.9838 34.695 16.4083 34.0696 16.2332C33.4442 16.0581 32.7688 16.3082 32.4186 16.8586C30.6175 19.7604 28.6662 23.0625 26.9652 25.9643C26.69 26.4396 26.69 27.065 26.9652 27.5403C27.2403 28.0156 27.7657 28.3156 28.341 28.3156H37.5218"
          stroke="#E31C90"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "SUPPORT EVERY STEP",
    desc: "Travel with confidence we're always here 24/7",
  },
];

const FeatureCards = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden">
        {features.map((f, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-center p-12 bg-blue-50 rounded-lg`}
          >
            <div className="mb-6 h-12 flex items-center justify-center">
              {f.icon}
            </div>
            <h3 className="text-lg font-extrabold  text-gray-900 mb-3">
              {f.title}
            </h3>
            <p className="text-base text-gray-500 ">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
