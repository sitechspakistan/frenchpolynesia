export default function SectionHeading({ title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      {subtitle && (
        <p className="text-pink-500 text-sm font-semibold uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight">
        {title}
      </h2>
    </div>
  );
}
