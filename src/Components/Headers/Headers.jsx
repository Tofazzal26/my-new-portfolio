import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <div className="bg-[#1f1f1f] text-white">
      <div className="navbar  container  mx-auto">
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
                <a>Services</a>
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
          <a className="btn btn-ghost text-xl">Tofazzal</a>
        </div>
        <div className="navbar-center hidden md:flex lg:flex">
          <ul className="menu menu-horizontal font-dmFont px-1 text-[14px] font-semibold space-x-2">
            <li>
              <a>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#c9f31d]" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink
                  to="/works"
                  className={({ isActive }) =>
                    isActive ? "text-[#c9f31d]" : ""
                  }
                >
                  Works
                </NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? "text-[#c9f31d]" : ""
                  }
                >
                  Skills
                </NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    isActive ? "text-[#c9f31d]" : ""
                  }
                >
                  Testimonials
                </NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-[#c9f31d]" : ""
                  }
                >
                  Contact
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="bg-[#c9f31d] text-black font-dmFont text-[15px] font-semibold py-2 px-4 rounded-md">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
