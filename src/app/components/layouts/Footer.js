import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--section-bg) ">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo + Description + Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <img
                src="/assets/images/logo-trans.png"
                alt="The French Polynesia"
                className="w-48"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Travelista Travels, we specialize in crafting seamless, luxury
              travel experiences. With firsthand expertise and a passion for
              detail, we design unforgettable journeys tailored to you.
            </p>
            {/* Social Icons */}
            {/* <div className="flex gap-3">
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div> */}
            {/* Social Icons */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="Facebook"
                  width={28}
                  height={28}
                />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                <Image
                  src="/assets/icons/youtube.svg"
                  alt="YouTube"
                  width={30}
                  height={30}
                />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                {" "}
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                {" "}
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                />
              </a>
            </div>
          </div>

          {/* Col 2: Our Links */}
          <div className="md:text-left md:pl-16">
            <h4 className="text-gray-900 font-bold text-lg uppercase mb-6 tracking-wide">
              Our Links
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "Destinations",
                "Packages",
                "About Us",
                "Blog",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg uppercase mb-6 tracking-wide">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-700">
                <span className="font-bold text-gray-900">Phone : </span>
                412-458-9665
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold text-gray-900">Email : </span>
                frenchpolynesia@email.com
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-bold text-gray-900">Address : </span>
                4314 Stanley St Pittsburgh, Pennsylvania 15207
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-300 py-5">
        <p className="text-center text-gray-600 text-sm">
          2026 Copyright &copy; French Polynesia
        </p>
      </div>
    </footer>
  );
}
