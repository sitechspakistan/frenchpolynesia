export default function ContactTextarea({
  name,
  placeholder,
  value,
  onChange,
  rows = 4,
  required = false,
  className = "",
}) {
  return (
    <textarea
      required={required}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`bg-(--section-bg) border border-gray-200  px-5 py-4 text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300 transition w-full rounded-sm ${className}`}
    />
  );
}
