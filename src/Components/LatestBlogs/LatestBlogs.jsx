import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.jpg";
import blog3 from "../../../public/blog3.jpg";
import blog4 from "../../../public/blog4.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import "./LatestBlogs.css";
const LatestBlogs = () => {
  return (
    <div className="text-white mt-[50px] lg:mt-[100px]">
      <div className="bg-[#070707]">
        <div className="py-[50px] lg:py-[100px]">
          <div className="text-center">
            <p className="text-[16px] text-[#a5a5a5] font-interFont">
              New & Blog
            </p>
            <h2 className=" text-[25px] lg:text-[40px] font-bold font-dmFont">
              Latest News & <span className="text-[#c9f31d]">Blog</span>
            </h2>
          </div>
          <div className="mt-[20px] lg:mt-[50px]">
            <div className="flex lg:flex-row flex-col justify-center p-3 lg:p-0 gap-7">
              <div className="space-y-[20px] lg:space-y-[28px]">
                <div
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  className="bg-[#1f1f1f] lg:w-[630px] BlogEffect border-[1px] border-gray-600 rounded-[15px]"
                >
                  <div className="p-3">
                    <div className="flex lg:flex-row flex-col gap-6 items-center">
                      <div>
                        <img
                          src={blog1}
                          alt=""
                          className="w-[300px] h-[205px]  rounded-[10px]"
                        />
                      </div>
                      <div>
                        <div className="flex gap-4 BlogText items-center">
                          <SlCalender />
                          <h3 className="text-[14px] lg:text-[16px] text-[#b1b1b1] cursor-pointer BlogText font-interFont">
                            JUNE 12, 2024
                          </h3>
                        </div>
                        <h2 className="text-[19px] lg:text-[22px] mt-[20px] mb-[20px] BlogText cursor-pointer font-semibold font-dmFont">
                          The Importance of Accessibility in Modern Web Design
                        </h2>
                        <button className="text-[16px] flex text-[#c9f31d] items-center gap-2 font-semibold font-interFont">
                          Read More <FiArrowUpRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  className="bg-[#1f1f1f] lg:w-[630px] BlogEffect rounded-[15px] border-[1px] border-gray-600"
                >
                  <div className="p-3">
                    <div className="flex lg:flex-row flex-col gap-6 items-center">
                      <div>
                        <img
                          src={blog2}
                          alt=""
                          className="w-[300px] h-[205px] rounded-[10px]"
                        />
                      </div>
                      <div>
                        <div className="flex BlogText cursor-pointer gap-4 items-center">
                          <SlCalender />
                          <h3 className="text-[14px] lg:text-[16px] BlogText text-[#b1b1b1] font-interFont">
                            MARCH 22, 2022
                          </h3>
                        </div>
                        <h2 className=" text-[19px] lg:text-[22px] BlogText mt-[20px] mb-[20px] cursor-pointer font-semibold font-dmFont">
                          How to Optimize Your Website for Core Web Vitals
                        </h2>
                        <button className="text-[16px] flex text-[#c9f31d] items-center gap-2 font-semibold font-interFont">
                          Read More <FiArrowUpRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-[28px]">
                <div
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  className="bg-[#1f1f1f] lg:w-[630px] BlogEffect border-[1px] border-gray-600 rounded-[15px]"
                >
                  <div className="p-3">
                    <div className="flex lg:flex-row flex-col gap-6 items-center">
                      <div>
                        <img
                          src={blog3}
                          alt=""
                          className="w-[300px] h-[205px] rounded-[10px]"
                        />
                      </div>
                      <div>
                        <div className="flex BlogText cursor-pointer gap-4 items-center">
                          <SlCalender />
                          <h3 className="text-[14px] lg:text-[16px] BlogText text-[#b1b1b1] font-interFont">
                            APRIL 08, 2024
                          </h3>
                        </div>
                        <h2 className="text-[19px] lg:text-[22px] mt-[20px] cursor-pointer BlogText mb-[20px] font-semibold font-dmFont">
                          Exploring the Latest JavaScript Frameworks: What’s
                          New?
                        </h2>
                        <button className="text-[16px] flex text-[#c9f31d] items-center gap-2 font-semibold font-interFont">
                          Read More <FiArrowUpRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  className="bg-[#1f1f1f] lg:w-[630px] BlogEffect border-[1px] border-gray-600 rounded-[15px]"
                >
                  <div className="p-3">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">
                      <div>
                        <img
                          src={blog4}
                          alt=""
                          className="w-[300px] h-[205px] rounded-[10px]"
                        />
                      </div>
                      <div>
                        <div className="flex BlogText cursor-pointer gap-4 items-center">
                          <SlCalender />
                          <h3 className="text-[14px] lg:text-[16px] BlogText text-[#b1b1b1] font-interFont">
                            DECEMBER 18, 2022
                          </h3>
                        </div>
                        <h2 className="text-[19px] lg:text-[22px] cursor-pointer BlogText mt-[20px] mb-[20px] font-semibold font-dmFont">
                          A Beginner's Guide to Running Adventures
                        </h2>
                        <button className="text-[16px] flex text-[#c9f31d] items-center gap-2 font-semibold font-interFont">
                          Read More <FiArrowUpRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
