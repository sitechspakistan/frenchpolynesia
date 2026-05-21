import Button from "../ui/Button";
import FeatureCard from "../ui/FeatureCard";

export default function WhyUs({
  paragraph = `At The French Polynesia, we don't just book vacations - we curate seamless, deeply personalized journeys throughout the islands of French Polynesia. From the overwater bungalows of Bora Bora to the lush mountains of Moorea, the black sand beaches of Tahiti, and the untouched beauty of Taha'a and Rangiroa, our team specializes exclusively in crafting extraordinary experiences across these islands.`,
  button = false,
}) {
  return (
    <section className="relative py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        {/* LEFT: Text — full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 md:pr-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 ">
            Welcome to <br /> French Polynesia
          </h2>
          <h3 className="text-xl mb-4 text-gray-500">
            Where luxury travel meets true destination expertise.
          </h3>
          <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
            {paragraph}
          </p>
          {button && <Button href="/about">Learn More</Button>}
        </div>

        <div className="hidden md:flex w-1/2 shrink-0 h-[520px] gap-3">
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
