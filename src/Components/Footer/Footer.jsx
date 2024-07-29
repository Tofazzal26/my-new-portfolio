import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="bg-[#070707] text-white mt-[130px]">
        <footer className="footer container mx-auto py-10">
          <aside>
            <h2 className="text-[26px] font-bold font-interFont">
              Tofazzal Hossain
            </h2>
          </aside>

          <nav>
            <h6 className="text-[18px] font-dmFont font-bold">Quick Link</h6>
            <div className="font-interFont my-10 text-[16px] text-[#b1b1b1] lg:space-x-12">
              <a href="">Service</a>
              <a href="">Projects</a>
              <a href="">Pricing</a>
              <a href="">Faqs</a>
              <a href="">Contact</a>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex lg:flex-row flex-col items-center gap-5">
                  <div className="flex items-center gap-3 mt-[18px] pb-2 border-b-2 border-gray-600">
                    <HiOutlineMail className="text-[#c9f31d]" size={20} />
                    <input
                      type="email"
                      className="bg-[#070707] outline-none font-dmFont lg:w-[350px] font-semibold text-[14px]"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div>
                    <button className="bg-[#c9f31d] font-interFont flex items-center font-semibold text-black px-6 py-[14px]">
                      Sign Up <MdOutlineKeyboardArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </nav>
          <nav>
            <h6 className="text-[18px] font-dmFont font-bold">Address</h6>
            <div className=" mt-[30px] flex gap-5">
              <FaRegMap className="text-[#c9f31d]" size={22} />
              <div>
                <h3 className="text-[18px] font-dmFont text-[#b1b1b1]">
                  55 Main Street, 2nd block,
                </h3>
                <h2 className="text-[18px] mt-2 font-dmFont text-[#b1b1b1]">
                  {" "}
                  New York City
                </h2>
              </div>
            </div>
            <div className="flex gap-5 mt-[20px] mb-[15px]">
              <HiOutlineMail className="text-[#c9f31d]" size={25} />
              <div>
                <h3 className="text-[18px] font-dmFont text-[#b1b1b1]">
                  support@gmail.com
                </h3>
              </div>
            </div>
            <div className=" flex gap-5">
              <IoCallOutline className="text-[#c9f31d]" size={25} />
              <div>
                <h3 className="text-[18px] font-bold font-dmFont text-white">
                  +8801306700357
                </h3>
              </div>
            </div>
          </nav>
        </footer>
      </div>
      <div>
        <div className="text-white py-10 flex lg:flex-row flex-col text-center justify-around items-center">
          <div>
            <h2 className="text-[16px] font-interFont">
              Copyright @2024, Tofazzal All Rights Reserved
            </h2>
          </div>
          <div className="text-[16px] lg:space-x-8 font-interFont text-[#b1b1b1]">
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
