// components/ui/Button.jsx

import Link from "next/link";

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const base =
    "inline-flex items-center justify-center font-light text-base uppercase px-6 py-4 rounded-md transition-colors";

  const variants = {
    primary: "bg-pink-500 hover:bg-pink-600 text-white",
    outline:
      "border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white",
    ghost: "text-pink-500 hover:bg-pink-50",
  };

  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
