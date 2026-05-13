import Button from "./Button";

// PackageCard.jsx
const PackageCard = ({
  badge = "Essential Luxury",
  title = "HONEYMOON",
  description = "Your first taste of paradise",
  price = 4800,
  priceUnit = "couple",
  nights = 5,
  location = "Bora Bora",
  features = [],
  footerNote = "Best for first-timers",
}) => {
  return (
    <>
      <div className="bg-(--section-bg) rounded-2xl p-2 h-full">
        <div className="w-full h-full bg-white rounded-xl border border-blue-100 shadow-sm p-6 flex flex-col w-full">
          {/* Badge & Title */}
          <div className="mb-5">
            <p className="text-gray-500 text-base mb-1">{badge}</p>
            <h2 className="text-2xl font-black tracking-wide text-gray-900 mb-2">
              {title}
            </h2>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>

          {/* Price */}
          <div className="mb-5">
            <div className="flex items-end mb-3">
              <span className="text-4xl font-black text-gray-900">
                ${price.toLocaleString()}
              </span>
              <span className="text-gray-500 text-base mb-1">
                / {priceUnit}
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              {nights} nights · {location}
            </p>
          </div>

          {/* Features */}
          <div className="border border-blue-100 rounded-sm p-5 mb-5 flex-grow">
            <ul className="flex flex-col gap-2">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-baseline  gap-2 text-black text-sm"
                >
                  <span className="mt-1 text-black">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer & Button */}
          <div className="border-t border-(--section-bg)">
            <p className="text-gray-400 text-sm my-3 text-center">
              {nights} nights · {footerNote}
            </p>
          </div>
          <Button className="w-[70%] self-center">Book Package</Button>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
