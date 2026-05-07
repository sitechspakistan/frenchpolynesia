import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Destinations", href: "/destination", target: "" },
  { label: "Packages", href: "/packages", target: "" },
  { label: "About Us", href: "/about", target: "" },
  { label: "Blogs", href: "https://thechicatravelista.com/", target: "blank" },
  { label: "Contact Us", href: "/contact", target: "" },
];

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
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.34635 1.57712C5.35616 0.567306 6.72576 0 8.15385 0H10.9231C11.3479 0 11.6923 0.344396 11.6923 0.769231V4.46154C11.6923 4.88637 11.3479 5.23077 10.9231 5.23077H8.15385C8.11304 5.23077 8.07391 5.24698 8.04506 5.27583C8.01621 5.30468 8 5.34381 8 5.38462V7.38462H10.9231C11.16 7.38462 11.3836 7.49375 11.5294 7.68045C11.6752 7.86716 11.7268 8.11061 11.6693 8.34041L10.7463 12.0327C10.6607 12.3752 10.353 12.6154 10 12.6154H8V19.2308C8 19.6556 7.6556 20 7.23077 20H3.53846C3.11363 20 2.76923 19.6556 2.76923 19.2308V12.6154H0.769231C0.344396 12.6154 0 12.271 0 11.8462V8.15385C0 7.72901 0.344396 7.38462 0.769231 7.38462H2.76923V5.38462C2.76923 3.95653 3.33654 2.58693 4.34635 1.57712ZM8.15385 1.53846C7.13378 1.53846 6.1555 1.94368 5.4342 2.66497C4.71291 3.38627 4.30769 4.36455 4.30769 5.38462V8.15385C4.30769 8.57868 3.9633 8.92308 3.53846 8.92308H1.53846V11.0769H3.53846C3.9633 11.0769 4.30769 11.4213 4.30769 11.8462V18.4615H6.46154V11.8462C6.46154 11.4213 6.80593 11.0769 7.23077 11.0769H9.3994L9.93787 8.92308H7.23077C6.80593 8.92308 6.46154 8.57868 6.46154 8.15385V5.38462C6.46154 4.93579 6.63984 4.50534 6.9572 4.18797C7.27457 3.8706 7.70502 3.69231 8.15385 3.69231H10.1538V1.53846H8.15385Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1453 22H7.35465C2.95465 22 0 19.096 0 14.7714V7.22857C0 2.904 2.95465 0 7.35465 0H20.1453C24.5453 0 27.5 2.904 27.5 7.22857V14.7714C27.5 19.096 24.5453 22 20.1453 22ZM7.35465 1.88571C4.05465 1.88571 1.9186 3.98514 1.9186 7.22857V14.7714C1.9186 18.0149 4.05465 20.1143 7.35465 20.1143H20.1453C23.4453 20.1143 25.5814 18.0149 25.5814 14.7714V7.22857C25.5814 3.98514 23.4453 1.88571 20.1453 1.88571H7.35465Z"
                    fill="white"
                  />
                  <path
                    d="M12.2915 15.5837C11.9235 15.5837 11.5681 15.4925 11.2508 15.3103C10.5146 14.8806 10.083 14.0083 10.083 12.9278V9.07413C10.083 7.99355 10.5019 7.12129 11.2508 6.69166C11.9869 6.26203 12.9388 6.34011 13.84 6.89993L16.975 8.82676C17.8381 9.36055 18.333 10.1547 18.333 11.001C18.333 11.8472 17.8381 12.6413 16.975 13.1751L13.84 15.102C13.3196 15.4144 12.7865 15.5837 12.2915 15.5837ZM12.2915 8.34507C12.2408 8.34507 12.2027 8.35807 12.1773 8.37109C12.0884 8.42317 11.9869 8.65751 11.9869 9.0611V12.9148C11.9869 13.3053 12.0884 13.5397 12.1773 13.6048C12.2788 13.6569 12.52 13.6308 12.85 13.4225L15.985 11.4957C16.3023 11.3004 16.4165 11.1051 16.4165 10.9879C16.4165 10.8708 16.3023 10.6885 15.985 10.4802L12.85 8.55338C12.6215 8.41017 12.4185 8.34507 12.2915 8.34507Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.213 4.71323C14.213 4.12927 14.6864 3.65587 15.2704 3.65587C15.8544 3.65587 16.3278 4.12927 16.3278 4.71323C16.3278 5.29719 15.8544 5.77058 15.2704 5.77058C14.6864 5.77058 14.213 5.29719 14.213 4.71323Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.98363 4.97757C7.20981 4.97757 4.96119 7.22619 4.96119 10C4.96119 12.7738 7.20981 15.0224 9.98363 15.0224C12.7574 15.0224 15.0061 12.7738 15.0061 10C15.0061 7.22619 12.7574 4.97757 9.98363 4.97757ZM6.54722 10C6.54722 8.10213 8.08575 6.5636 9.98363 6.5636C11.8815 6.5636 13.42 8.10213 13.42 10C13.42 11.8979 11.8815 13.4364 9.98363 13.4364C8.08575 13.4364 6.54722 11.8979 6.54722 10Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5435 0.307247C11.8781 -0.102416 8.08921 -0.102416 4.42381 0.307247C2.29635 0.545021 0.578856 2.22094 0.328735 4.35947C-0.109578 8.10705 -0.109578 11.8929 0.328735 15.6405C0.578856 17.7791 2.29635 19.455 4.42381 19.6928C8.08921 20.1024 11.8781 20.1024 15.5435 19.6928C17.6709 19.455 19.3884 17.7791 19.6385 15.6405C20.0769 11.8929 20.0769 8.10705 19.6385 4.35947C19.3884 2.22094 17.6709 0.545021 15.5435 0.307247ZM4.59998 1.88346C8.1483 1.48689 11.819 1.48689 15.3673 1.88346C16.7737 2.04065 17.9003 3.15046 18.0632 4.54371C18.4872 8.16888 18.4872 11.8311 18.0632 15.4563C17.9003 16.8495 16.7737 17.9593 15.3673 18.1165C11.819 18.5131 8.1483 18.5131 4.59998 18.1165C3.19358 17.9593 2.06698 16.8495 1.90403 15.4563C1.48003 11.8311 1.48003 8.16888 1.90403 4.54371C2.06698 3.15046 3.19358 2.04065 4.59998 1.88346Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 transition-colors text-white w-11 h-11 rounded-md flex items-center justify-center"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.75 0C1.23122 0 0 1.23122 0 2.75C0 4.26878 1.23122 5.5 2.75 5.5C4.26878 5.5 5.5 4.26878 5.5 2.75C5.5 1.23122 4.26878 0 2.75 0ZM1.5 2.75C1.5 2.05964 2.05964 1.5 2.75 1.5C3.44036 1.5 4 2.05964 4 2.75C4 3.44036 3.44036 4 2.75 4C2.05964 4 1.5 3.44036 1.5 2.75Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 6.75C0 6.33579 0.335786 6 0.75 6H4.75C5.16421 6 5.5 6.33579 5.5 6.75V19.75C5.5 20.1642 5.16421 20.5 4.75 20.5H0.75C0.335786 20.5 0 20.1642 0 19.75V6.75ZM1.5 7.5V19H4V7.5H1.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 6.75C7 6.33579 7.33579 6 7.75 6H11.75C12.1642 6 12.5 6.33579 12.5 6.75V7.18402L12.9353 6.99748C13.6836 6.67676 14.4839 6.47565 15.2933 6.40207C18.0682 6.1498 20.5 8.33038 20.5 11.1302V19.75C20.5 20.1642 20.1642 20.5 19.75 20.5H15.75C15.3358 20.5 15 20.1642 15 19.75V12.75C15 12.4185 14.8683 12.1005 14.6339 11.8661C14.3995 11.6317 14.0815 11.5 13.75 11.5C13.4185 11.5 13.1005 11.6317 12.8661 11.8661C12.6317 12.1005 12.5 12.4185 12.5 12.75V19.75C12.5 20.1642 12.1642 20.5 11.75 20.5H7.75C7.33579 20.5 7 20.1642 7 19.75V6.75ZM8.5 7.5V19H11V12.75C11 12.0207 11.2897 11.3212 11.8055 10.8055C12.3212 10.2897 13.0207 10 13.75 10C14.4793 10 15.1788 10.2897 15.6945 10.8055C16.2103 11.3212 16.5 12.0207 16.5 12.75V19H19V11.1302C19 9.22587 17.339 7.72227 15.4291 7.89591C14.775 7.95536 14.1284 8.11807 13.5262 8.3762L12.0454 9.01079C11.8137 9.1101 11.5476 9.08634 11.3371 8.94756C11.1267 8.80878 11 8.57354 11 8.32143V7.5H8.5Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Our Links */}
          <div className="md:text-left md:pl-16">
            <h4 className="text-gray-900 font-bold text-lg uppercase mb-6 tracking-wide">
              Our Links
            </h4>
            <ul className="flex flex-col gap-4">
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    target={item.target}
                    href={item.href}
                    className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                  >
                    {item.label}
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
