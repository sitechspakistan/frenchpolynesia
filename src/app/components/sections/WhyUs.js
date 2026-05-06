import FeatureCard from "../ui/FeatureCard";

const features = [
  {
    title: "Personalized Itineraries",
    icon: (
      <svg
        width="42"
        height="37"
        viewBox="0 0 42 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.74558 5.09284L2.78815 6.2229C1.67827 6.86865 0.75 8.44267 0.75 9.73417V29.369C0.75 33.2032 3.47426 34.7772 6.78373 32.8803L11.526 30.1762C12.5551 29.591 14.2704 29.5304 15.3399 30.0753L25.9343 35.3826C27.0038 35.9072 28.7191 35.8669 29.7482 35.2817L38.486 30.2771C39.5959 29.6313 40.5242 28.0573 40.5242 26.7658V7.11081C40.5242 3.27667 37.7999 1.70265 34.4904 3.59954L29.7482 6.30362C28.7191 6.88883 27.0038 6.94937 25.9343 6.40452L15.3399 1.11744C14.2704 0.59277 12.5551 0.633129 11.526 1.21834"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.4026 2.08606V28.3197"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.8713 7.37341V34.3738"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    imgAlt: "Personalized Itineraries",
  },
  {
    title: "Exclusive Resort Partnerships",
    icon: (
      <svg
        width="26"
        height="37"
        viewBox="0 0 26 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1379 30.8745L19.8235 33.5601L25.1946 28.189"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.8085 35.75C9.59289 35.75 6.39496 34.9373 3.95676 33.3118C-0.318921 30.4496 -0.318921 25.7852 3.95676 22.9406C8.8155 19.6897 16.7838 19.6897 21.6426 22.9406"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.3272 4.21295C20.1753 5.46738 20.67 6.96917 20.67 8.59464C20.6523 12.835 17.3131 16.2803 13.108 16.4216C12.9314 16.4039 12.7193 16.4039 12.525 16.4216C8.31999 16.2803 4.98071 12.835 4.98071 8.59464C4.98071 4.26595 8.479 0.75 12.8254 0.75"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    imgAlt: "Exclusive Resort Partnerships",
  },
  {
    title: "End-To-End Support",
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.6825 7.7675C13.9975 8.205 14.225 8.6075 14.3825 8.9925C14.54 9.36 14.6275 9.7275 14.6275 10.06C14.6275 10.48 14.505 10.9 14.26 11.3025C14.0325 11.705 13.7 12.125 13.28 12.545L11.95 13.9275C11.7575 14.12 11.67 14.3475 11.67 14.6275C11.67 14.7675 11.6875 14.89 11.7225 15.03C11.775 15.17 11.8275 15.275 11.8625 15.38C12.1775 15.9575 12.72 16.71 13.49 17.62C14.2775 18.53 15.1175 19.4575 16.0275 20.385C16.9725 21.3125 17.8825 22.17 18.81 22.9575C19.72 23.7275 20.4725 24.2525 21.0675 24.5675C21.155 24.6025 21.26 24.655 21.3825 24.7075C21.5225 24.76 21.6625 24.7775 21.82 24.7775C22.1175 24.7775 22.345 24.6725 22.5375 24.48L23.8675 23.1675C24.305 22.73 24.725 22.3975 25.1275 22.1875C25.53 21.9425 25.9325 21.82 26.37 21.82C26.7025 21.82 27.0525 21.89 27.4375 22.0475C27.8225 22.205 28.225 22.4325 28.6625 22.73L34.455 26.8425C34.91 27.1575 35.225 27.525 35.4175 27.9625C35.5925 28.4 35.6975 28.8375 35.6975 29.3275C35.6975 29.9575 35.5575 30.605 35.26 31.235C34.9625 31.865 34.5775 32.46 34.07 33.02C33.2125 33.965 32.2675 34.6475 31.2 35.085C30.15 35.5225 29.0125 35.75 27.7875 35.75C26.0025 35.75 24.095 35.33 22.0825 34.4725C20.07 33.615 18.0575 32.46 16.0625 31.0075C14.05 29.5375 12.1425 27.91 10.3225 26.1075C8.52 24.2875 6.8925 22.38 5.44 20.385C4.005 18.39 2.85 16.395 2.01 14.4175C1.17 12.4225 0.75 10.515 0.75 8.695C0.75 7.505 0.96 6.3675 1.38 5.3175C1.8 4.25 2.465 3.27 3.3925 2.395C4.5125 1.2925 5.7375 0.75 7.0325 0.75C7.5225 0.75 8.0125 0.855 8.45 1.065C8.905 1.275 9.3075 1.59 9.6225 2.045"
          stroke="#333333"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.625 13C29.625 11.95 28.8025 10.34 27.5775 9.0275C26.4575 7.82 24.97 6.875 23.5 6.875"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.0175 1.2575C25.8975 0.925 24.725 0.75 23.5 0.75"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.7502 12.9992C35.7502 8.85168 33.6852 5.17668 30.5352 2.97168"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    imgAlt: "End-To-End Support",
  },
];

export default function WhyUs({
  paragraph = `At Travelista Travels, we specialize in crafting seamless, luxury
              travel experiences. With firsthand expertise and a passion for
              detail, we design unforgettable journeys tailored to you.`,
}) {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        {/* LEFT: Text */}
        <div className="w-1/2 pr-10">
          <h2 className="text-5xl font-bold mb-6">Why Travelista Travels</h2>
          <p className="text-base text-gray-700 mb-6">{paragraph}</p>
          <div className="flex flex-col gap-7">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                imgAlt={f.imgAlt}
                title={f.title}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Image Grid */}
        <div className="w-1/2 shrink-0 h-[520px] flex gap-3">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-3 pt-10">
            <div className="flex-1 rounded-2xl overflow-hidden h-[270px]">
              <img
                src="/assets/images/why/why-1.png"
                alt="resort view 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[230px] rounded-2xl overflow-hidden">
              <img
                src="/assets/images/why/why-2.png"
                alt="resort view 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-3 pb-10">
            <div className="h-[280px] rounded-2xl overflow-hidden flex-1">
              <img
                src="/assets/images/why/why-3.png"
                alt="resort view 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden flex-1">
              <img
                src="/assets/images/why/why-4.png"
                alt="resort view 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
