import { Link, NavLink } from "react-router-dom";
import { SectionIds } from "./SectionIds";
import { useEffect, useState } from "react";

const Headers = () => {
  // const [activeLink, setActiveLink] = useState("Resume");
  // const [isScrolled, setIsScrolled] = useState(false);

  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     const marginTop = 0;
  //     const scrollToy =
  //       element.getBoundingClientRect().top + window.scrollY - marginTop;
  //     window.scrollTo({ top: scrollToy, behavior: "smooth" });
  //   }
  // };

  // const determineActiveSection = () => {
  //   for (let i = SectionIds.length - 1; i >= 0; i--) {
  //     const section = document.getElementById(SectionIds[i]);
  //     if (section) {
  //       const rect = section.getBoundingClientRect();
  //       if (rect.top <= 120 && rect.bottom >= 120) {
  //         setActiveLink(SectionIds[i]);
  //         break;
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 300) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //     determineActiveSection();
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   };
  // }, []);

  return (
    <section>
      <div className="fixed top-0 z-50 w-full">
        <div className="bg-[#1f1f1f] text-white">
          <div className="navbar container mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost md:hidden lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 text-black font-dmFont font-semibold text-[10px] rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Works</a>
                  </li>
                  <li>
                    <a>Skills</a>
                  </li>
                  <li>
                    <a>Testimonials</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-[25px] lg:text-[30px]">
                Tofazzal
              </a>
            </div>
            <div className="navbar-center hidden md:flex lg:flex">
              <ul className="menu menu-horizontal font-dmFont px-1 text-[16px] font-semibold space-x-2">
                <li>
                  <a href="#Services">Services</a>
                </li>
                <li>
                  <a href="#Works">Works</a>
                </li>
                <li>
                  <a href="#Resume">Resume</a>
                </li>
                <li>
                  <a href="#Skills">Skills</a>
                </li>
                <li>
                  <a href="#Testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <button className="bg-[#c9f31d] text-black font-dmFont text-[15px] font-semibold py-2 px-3 lg:py-3 lg:px-6 rounded-md">
                Hire me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headers;
