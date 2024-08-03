import { Link } from "react-scroll";
import { SectionIds } from "./SectionIds";
import { useEffect, useState } from "react";

const Headers = () => {
  return (
    <section>
      <div className="fixed top-0 z-50 shadow-navBar w-full">
        <div className="bg-[#1f1f1f]  text-white">
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
                    <Link
                      to="Services"
                      spy={true}
                      smooth={true}
                      offset={-600}
                      duration={500}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Works"
                      spy={true}
                      smooth={true}
                      offset={-500}
                      duration={500}
                    >
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Resume"
                      spy={true}
                      smooth={true}
                      offset={-600}
                      duration={100}
                    >
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Skills"
                      spy={true}
                      smooth={true}
                      offset={-500}
                      duration={500}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Testimonials"
                      spy={true}
                      smooth={true}
                      offset={-300}
                      duration={500}
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Contact"
                      spy={true}
                      smooth={true}
                      offset={-600}
                      duration={500}
                    >
                      Contact
                    </Link>
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
                  <Link
                    to="Services"
                    spy={true}
                    smooth={true}
                    offset={-600}
                    duration={500}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="Works"
                    spy={true}
                    smooth={true}
                    offset={-500}
                    duration={500}
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="Resume"
                    spy={true}
                    smooth={true}
                    offset={-600}
                    duration={100}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-500}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="Testimonials"
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={500}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-600}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <Link to="HireMe">
                <button className="bg-[#c9f31d] text-black font-dmFont text-[14px] lg:text-[16px] font-semibold py-2 px-3 lg:py-3 lg:px-6 rounded-md">
                  Hire me!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headers;
