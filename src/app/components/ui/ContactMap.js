// components/contact/ContactInfo.jsx

export default function ContactMap({
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.2604110283105!2d-97.748588!3d30.3435482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb0279fa0c4b%3A0x5fdfcae136a261ee!2sGullett%20Elementary%20School!5e0!3m2!1sen!2s!4v1778168823625!5m2!1sen!2s",
  hours = "Our reservation and front desk team are available daily from 8am till 9pm.",
}) {
  return (
    <>
      {/* Map */}
      <div className="w-full h-[500px] max-w-7xl mx-auto px-6 ">
        <iframe
          className="w-full h-full rounded-lg"
          src={mapSrc}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
