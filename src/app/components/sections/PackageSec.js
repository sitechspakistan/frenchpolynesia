import React from "react";
import PackageCard from "../ui/PackageCard";

const packages = [
  {
    badge: "Essential Luxury",
    title: "HONEYMOON",
    description: "Your first taste of paradise",
    price: 4800,
    priceUnit: "couple",
    nights: 5,
    location: "Bora Bora",
    footerNote: "Best for first-timers",
    features: [
      "Overwater bungalow (5 nights)",
      "Daily breakfast included",
      "Lagoon snorkeling tour",
      "Sunset cruise",
      "Airport boat transfer",
      "Private chef dinner",
      "Spa treatments",
    ],
  },
  {
    badge: "Signature Luxury",
    title: "LUXURY ESCAPE",
    description: "The perfect honeymoon escape",
    price: 8500,
    priceUnit: "couple",
    nights: 7,
    location: "Bora Bora",
    footerNote: "Honeymoon favourite",
    features: [
      "Overwater villa with private pool",
      "Breakfast & dinner daily",
      "Private lagoon tour",
      "Romantic sunset cruise",
      "Couples spa treatment",
      "Private candlelit beach dinner",
      "24/7 concierge service",
    ],
  },
  {
    badge: "Adventure Luxury",
    title: "ADVENTURE",
    description: "Thrills meet tropical paradise",
    price: 6200,
    priceUnit: "couple",
    nights: 7,
    location: "Bora Bora + Moorea",
    footerNote: "2 islands",
    features: [
      "Overwater bungalow (4 nights)",
      "Garden villa Moorea (3 nights)",
      "Scuba diving (2 dives)",
      "Jet Ski island tour",
      "ATV mountain adventure",
      "Whale watching (seasonal)",
      "Spa treatments",
    ],
  },
  {
    badge: "Wellness Luxury",
    title: "RELAXATION RETREAT",
    description: "Restore body, mind & soul",
    price: 7900,
    priceUnit: "couple",
    nights: 7,
    location: "Bora Bora",
    footerNote: "Full wellness retreat",
    features: [
      "Overwater villa (7 nights)",
      "All meals included",
      "Daily spa treatment",
      "Yoga sessions at sunrise",
      "Seawater thalasso therapy",
      "Private meditation motu trip",
      "Nutritionist meal planning",
    ],
  },
  {
    badge: "Ultimate Luxury",
    title: "GRAND TOUR",
    description: "Three islands, one epic journey",
    price: 14500,
    priceUnit: "couple",
    nights: 10,
    location: "Bora Bora + Tahiti + Moorea",
    footerNote: "All-inclusive · 3 islands",
    features: [
      "Overwater villas all 3 islands",
      "All meals & premium drinks",
      "Private inter-island flights",
      "All signature experiences",
      "Private chef & butler",
      "Full spa access daily",
      "Dedicated Travelista guide",
    ],
  },
];

const PackageSec = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {packages.slice(0, 3).map((pkg, i) => (
            <PackageCard key={i} {...pkg} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          {packages.slice(3).map((pkg, i) => (
            <div key={i} className="w-full md:w-1/3">
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSec;
