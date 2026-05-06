// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Navbar = () => {
//   // const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <nav className="w-full fixed top-0 z-50 bg-gradient-to-b from-white/100 to-transparent">
//       {/* Desktop Navbar */}
//       <div className="max-w-7xl mx-auto flex items-center py-2 justify-between px-6">
//         {/* Center Logo */}
//         <div className=" flex flex-col ">
//           <Link href="/" className="flex flex-col no-underline">
//             <Image
//               src="/assets/images/logo-trans.png"
//               alt="French Polynesia Logo"
//               width={250}
//               height={100}
//               className=""
//             />
//           </Link>
//         </div>

//         {/* Right Links */}
//         <div className=" md:flex items-center gap-7 flex-1 justify-end gap-8">
//           <Link
//             href="#"
//             className="text-(--nav-btn-clr) text-md tracking-wide hover:text-black transition-colors"
//           >
//             Home{" "}
//           </Link>
//           <Link
//             href="#"
//             className="text-(--nav-btn-clr)  text-md tracking-wide hover:text-black transition-colors"
//           >
//             Destinations
//           </Link>
//           <Link
//             href="#"
//             className="text-(--nav-btn-clr)  text-md tracking-wide hover:text-black transition-colors"
//           >
//             Packages
//           </Link>
//           <Link
//             href="/about"
//             className="text-(--nav-btn-clr)  text-md tracking-wide hover:text-black transition-colors"
//           >
//             About Us
//           </Link>
//           <Link
//             href="/blog"
//             className="text-(--nav-btn-clr)  text-md tracking-wide hover:text-black transition-colors"
//           >
//             Blog
//           </Link>
//           <Link
//             href="#"
//             className="text-(--nav-btn-clr)  text-md tracking-wide hover:text-black transition-colors"
//           >
//             Contact Us
//           </Link>

//           {/* <BookButton href="/book-now" /> */}
//         </div>

//         {/* Mobile Hamburger */}
//         {/* <button
//           className="md:hidden flex flex-col gap-1.5 p-1"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
//           <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
//           <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
//         </button> */}
//       </div>

//       {/* Mobile Menu */}
//       {/* {menuOpen && (
//         <div className="md:hidden flex flex-col px-8 pb-6 gap-4 bg-white shadow-lg">
//           <Link
//             href="/about"
//             className="text-gray-700 text-base border-b border-gray-100 pb-3 hover:text-black transition-colors"
//             onClick={() => setMenuOpen(false)}
//           >
//             About Us
//           </Link>
//           <Link
//             href="/accommodation"
//             className="text-gray-700 text-base border-b border-gray-100 pb-3 hover:text-black transition-colors"
//             onClick={() => setMenuOpen(false)}
//           >
//             Accommodation
//           </Link>
//           <Link
//             href="/experiences"
//             className="text-gray-700 text-base border-b border-gray-100 pb-3 hover:text-black transition-colors"
//             onClick={() => setMenuOpen(false)}
//           >
//             Experiences
//           </Link>
//           <Link
//             href="/bulletin"
//             className="text-gray-700 text-base border-b border-gray-100 pb-3 hover:text-black transition-colors"
//             onClick={() => setMenuOpen(false)}
//           >
//             The Bulletin
//           </Link>
//           <Link
//             href="/contact"
//             className="text-gray-700 text-base border-b border-gray-100 pb-3 hover:text-black transition-colors"
//             onClick={() => setMenuOpen(false)}
//           >
//             Contact Us
//           </Link>
//           <Link
//             href="/book"
//             className="bg-gray-900 text-white text-sm tracking-widest text-center py-3 rounded-sm hover:bg-gray-700 transition-colors"
//             onClick={() => setMenuOpen(false)}
//           >
//             BOOK NOW
//           </Link>
//         </div>
//       )} */}
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-gradient-to-b from-white/100 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center py-4 justify-between px-4 ">
        {/* Logo */}
        <div className="flex flex-col">
          <Link href="/" className="flex flex-col no-underline">
            {scrolled ? (
              <Image
                src="/assets/images/logo-trans.png"
                alt="French Polynesia Logo"
                width={120}
                height={50}
              />
            ) : (
              <Image
                src="/assets/images/logo-trans.png"
                alt="French Polynesia Logo"
                width={200}
                height={50}
              />
            )}
          </Link>
        </div>

        {/* Nav Links */}
        <div className="md:flex items-center gap-7 flex-1 justify-end">
          <Link
            href="/"
            className="text-(--nav-btn-clr) text-md tracking-wide hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            href="/destination"
            className="text-(--nav-btn-clr) text-md tracking-wide hover:text-black transition-colors"
          >
            Destinations
          </Link>
          <Link
            href="#"
            className="text-(--nav-btn-clr) text-md tracking-wide hover:text-black transition-colors"
          >
            Packages
          </Link>
          <Link
            href="/about"
            className="text-(--nav-btn-clr) text-md tracking-wide hover:text-black transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-(--nav-btn-clr) text-md tracking-wide hover:text-black transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-(--nav-btn-clr) text-md tracking-wide hover:text-black transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
