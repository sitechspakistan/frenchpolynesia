// components/contact/ContactInput.jsx

export default function ContactInput({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-(--section-bg) px-5 py-4 text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#1e2d4a] w-full rounded-sm"
    />
  );
}
