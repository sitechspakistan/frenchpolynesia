export default function ContactTextarea({
  name,
  placeholder,
  value,
  onChange,
  rows = 4,
}) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className="bg-(--section-bg) px-5 py-4 text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#1e2d4a] w-full rounded-sm"
    />
  );
}
