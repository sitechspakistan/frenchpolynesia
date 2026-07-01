const WhyBookWithUs = () => {
  const expertisePoints = [
    "Choose the islands that best match your interests and travel goals.",
    "Compare resorts to find the perfect fit for your style and budget.",
    "Coordinate international flights and inter-island air travel.",
    "Arrange ferry transfers, private boat transportation, and airport transfers.",
    "Recommend unforgettable excursions, cultural experiences, and hidden gems.",
    "Balance relaxation with adventure to create a seamless itinerary.",
    "Navigate travel requirements, packing recommendations, and seasonal considerations.",
  ];

  return (
    <section className="w-full bg-white pb-10 md:pb-16 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* ── Main Heading Block ── */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-lg md:text-2xl font-bold tracking-widest uppercase text-(--primary) mb-3">
            Why Book With Us
          </h2>
          <h3 className="text-base md:text-4xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl mx-auto">
            Why Book Your Tahitian Islands Vacation with The French Polynesia
            Concierge Team?
          </h3>
          <div className="max-w-5xl mx-auto space-y-4 text-gray-600 text-base leading-relaxed">
            <p>
              French Polynesia is one of the most breathtaking destinations in
              the world, but planning the perfect trip can quickly become
              overwhelming. With 118 islands spread across five archipelagos,
              countless luxury resorts, and unique experiences on every island,
              knowing where to begin isn't always easy. That's where we come in.
            </p>
            <p>
              At The French Polynesia, French Polynesia isn't just another
              destination we sell - it's our specialty. Our team is dedicated to
              helping travelers experience the very best of Tahiti, Bora Bora,
              Moorea, Taha'a, Raiatea, Rangiroa, Fakarava, and beyond through
              thoughtfully designed, personalized itineraries. We take the time
              to get to know you, your travel style, your priorities, and your
              budget. Whether you're dreaming of an iconic overwater bungalow, a
              secluded beachfront villa, a luxury family vacation, a honeymoon,
              or an adventure filled with snorkeling, diving, hiking, and
              cultural experiences, we'll match you with the islands and resorts
              that fit your vision perfectly.
            </p>
          </div>
        </div>

        <div className="hidden md:block border-t border-gray-100 mb-12" />

        {/* ── Destination Expertise ── */}
        <div className="mb-12 ">
          <h3 className="text-base md:text-3xl font-bold text-gray-900 mb-4 gap-3 text-center md:text-left">
            {/* <span className="inline-block w-4 h-4 rounded-full bg-(--primary) flex-shrink-0" /> */}
            Destination Expertise You Can Trust
          </h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6 text-center md:text-left">
            Planning a trip to French Polynesia involves much more than choosing
            a beautiful resort. Every island offers a completely different
            experience, and selecting the right combination can make all the
            difference. Our team helps you:
          </p>

          {/* Bullet Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {expertisePoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-pink-50 border border-pink-100 rounded-lg px-4 py-3"
              >
                {/* Pink checkmark circle */}
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-(--primary) flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4 italic text-center md:text-left">
            Every itinerary is customized from start to finish - no two
            vacations are exactly alike.
          </p>
        </div>

        <div className="hidden md:block border-t border-gray-100 mb-12" />

        {/* ── Two Column Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Access to Best Resorts */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center md:text-left">
            <h3 className="text-lg font-bold text-(--primary) mb-3">
              Access to the Best Resorts
            </h3>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                We work with many of French Polynesia's most exceptional luxury
                resorts and boutique properties. Whether you're searching for
                world-renowned overwater bungalows, family-friendly resorts,
                adults-only escapes, or intimate private-island retreats, we'll
                help you compare the options and find the perfect match.
              </p>
              <p>
                Because of our industry relationships and destination expertise,
                we're able to recommend properties based on far more than
                beautiful photos. We know which resorts have the best snorkeling
                right off the bungalow, which offer the most privacy, which are
                ideal for families, and which deliver truly once-in-a-lifetime
                honeymoon experiences.
              </p>
            </div>
          </div>

          {/* Stress-Free Planning */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center md:text-left">
            <h3 className="text-lg font-bold text-(--primary) mb-3">
              A Stress Free Planning Experience
            </h3>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                From your initial consultation until you return home, our team
                is here to guide you through every step of the journey. We'll
                handle the details so you can focus on the excitement of your
                upcoming vacation. If questions arise before or during your
                trip, you'll have an experienced travel advisor ready to help.
              </p>
              <p>
                Planning a luxury vacation should feel exciting, not stressful.
                We take pride in making the entire process as seamless as the
                destination itself - from the first conversation to the moment
                your bags are unpacked in paradise.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block border-t border-gray-100 mb-12" />

        {/* ── Closing Block ── */}
        <div className="bg-pink-50 border border-pink-100 rounded-xl p-6 md:p-8 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 gap-3 ">
            {/* <span className="inline-block w-4 h-4 rounded-full bg-(--primary) flex-shrink-0" /> */}
            More Than a Vacation, A Once-in-a-Lifetime Experience
          </h3>
          <div className="space-y-4 text-gray-600 text-base leading-relaxed ">
            <p>
              For many travelers, a trip to French Polynesia is a lifelong
              dream. Whether you're celebrating a honeymoon, anniversary,
              milestone birthday, family vacation, or simply checking a
              destination off your bucket list, we're committed to making every
              moment unforgettable. Our goal is simple: to create a seamless,
              personalized journey that exceeds your expectations from the
              moment you start planning until the day you return home.
            </p>
            <p>
              When you choose The French Polynesia, you're not just booking a
              vacation - you're partnering with a team of destination
              specialists who are passionate about creating extraordinary
              experiences in one of the world's most spectacular destinations.
              Let us help you discover the magic of French Polynesia -
              beautifully planned, thoughtfully personalized, and completely
              unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBookWithUs;
