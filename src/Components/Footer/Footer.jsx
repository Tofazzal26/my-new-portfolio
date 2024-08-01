import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-scroll";
const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="bg-[#070707] text-white mt-[50px] lg:mt-[130px]">
        <footer className="footer container mx-auto px-4 lg:px-0 py-10">
          <aside>
            <h2 className="text-[20px] lg:text-[26px] font-bold font-interFont">
              Tofazzal Hossain
            </h2>
            <p className="text-[16px] lg:text-[18px] lg:w-[600px] leading-[25px] mt-[40px] font-interFont text-[#b1b1b1]">
              I'm a web developer passionate about crafting beautiful and
              user-friendly web applications. I specialize in turning complex
              ideas into visually stunning and functional websites.
            </p>
          </aside>

          <nav>
            <h6 className="text-[16px] lg:text-[18px] font-dmFont font-bold">
              Quick Link
            </h6>
            <div className="font-interFont my-5 lg:my-10 lg:text-[16px] text-[#b1b1b1]">
              <ul className="menu menu-horizontal font-dmFont text-[16px] px-1 font-semibold lg:space-x-2">
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
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-3 lg:gap-5">
                  <div className="flex items-center gap-3 mt-2 lg:mt-[18px] pb-2 border-b-2 border-gray-600">
                    <HiOutlineMail className="text-[#c9f31d]" size={20} />
                    <input
                      type="email"
                      className="bg-[#070707] outline-none font-dmFont w-[150px] lg:w-[350px] font-semibold text-[12px] lg:text-[14px]"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div>
                    <button className="bg-[#c9f31d] font-interFont flex items-center font-semibold text-black px-2 lg:px-6 py-[8px] lg:py-[14px]">
                      Sign Up <MdOutlineKeyboardArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </nav>
          <nav>
            <h6 className="text-[16px] lg:text-[18px] font-dmFont font-bold">
              Address
            </h6>
            <div className=" mt-[30px] flex gap-5">
              <FaRegMap className="text-[#c9f31d]" size={22} />
              <div>
                <h3 className="text-[16px] lg:text-[18px] font-dmFont text-[#b1b1b1]">
                  Tongi Gazipur, Gazibari,
                </h3>
                <h2 className="text-[16px] lg:text-[18px] mt-2 font-dmFont text-[#b1b1b1]">
                  {" "}
                  Dhaka, Bangladesh
                </h2>
              </div>
            </div>
            <div className="flex gap-5 mt-[20px] mb-[15px]">
              <HiOutlineMail className="text-[#c9f31d]" size={25} />
              <div>
                <h3 className="text-[16px] lg:text-[18px] font-dmFont text-[#b1b1b1]">
                  afranislamabir6789@gmail.com
                </h3>
              </div>
            </div>
            <div className=" flex gap-5">
              <IoCallOutline className="text-[#c9f31d]" size={25} />
              <div>
                <h3 className="text-[16px] lg:text-[18px] font-bold font-dmFont text-white">
                  +8801306700357
                </h3>
              </div>
            </div>
          </nav>
        </footer>
      </div>
      <div>
        <div className="text-white py-6 lg:py-10 flex lg:flex-row flex-col text-center justify-around items-center">
          <div>
            <h2 className="text-[13px] lg:text-[16px] font-interFont">
              Copyright @2024, Tofazzal All Rights Reserved
            </h2>
          </div>
          <div className="text-[13px] lg:text-[16px] space-x-4 my-2 lg:my-0 lg:space-x-8 font-interFont text-[#b1b1b1]">
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">Linkdein</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
