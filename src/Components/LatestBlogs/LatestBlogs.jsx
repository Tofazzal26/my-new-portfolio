import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.jpg";
import blog3 from "../../../public/blog3.jpg";
import blog4 from "../../../public/blog4.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import "./LatestBlogs.css";
const LatestBlogs = () => {
  return (
    <div className="text-white mt-[100px]">
      <div className="bg-[#070707]">
        <div className="py-[100px]">
          <div className="text-center">
            <p className="text-[16px] text-[#a5a5a5] font-interFont">
              New & Blog
            </p>
            <h2 className="text-[40px] font-bold font-dmFont">
              Latest News & <span className="text-[#c9f31d]">Blog</span>
            </h2>
          </div>
          <div className="mt-[50px]">
            <div className="flex lg:flex-row flex-col justify-center gap-7">
              <div className="space-y-[28px]">
                <div className="bg-[#1f1f1f] lg:w-[630px] BlogEffect border-[1px] border-gray-600 rounded-[15px]">
                  <div className="p-3">
                    <div className="flex gap-6 items-center">
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
                          <h3 className="text-[16px] text-[#b1b1b1] cursor-pointer BlogText font-interFont">
                            NOVEMBER 13, 2023
                          </h3>
                        </div>
                        <h2 className="text-[22px] mt-[20px] mb-[20px] BlogText cursor-pointer font-semibold font-dmFont">
                          A Beginner's Guide to Running Adventures
                        </h2>
                        <button className="text-[16px] flex text-[#c9f31d] items-center gap-2 font-semibold font-interFont">
                          Read More <FiArrowUpRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1f1f1f] lg:w-[630px] BlogEffect rounded-[15px] border-[1px] border-gray-600">
                  <div className="p-3">
                    <div className="flex gap-6 items-center">
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
                          <h3 className="text-[16px] BlogText text-[#b1b1b1] font-interFont">
                            NOVEMBER 13, 2023
                          </h3>
                        </div>
                        <h2 className="text-[22px] BlogText mt-[20px] mb-[20px] font-semibold font-dmFont">
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
              <div className="space-y-[28px]">
                <div className="bg-[#1f1f1f] lg:w-[630px] BlogEffect border-[1px] border-gray-600 rounded-[15px]">
                  <div className="p-3">
                    <div className="flex gap-6 items-center">
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
                          <h3 className="text-[16px] BlogText text-[#b1b1b1] font-interFont">
                            NOVEMBER 13, 2023
                          </h3>
                        </div>
                        <h2 className="text-[22px] mt-[20px] BlogText mb-[20px] font-semibold font-dmFont">
                          A Beginner's Guide to Running Adventures
                        </h2>
                        <button className="text-[16px] flex text-[#c9f31d] items-center gap-2 font-semibold font-interFont">
                          Read More <FiArrowUpRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1f1f1f] lg:w-[630px] BlogEffect border-[1px] border-gray-600 rounded-[15px]">
                  <div className="p-3">
                    <div className="flex gap-6 items-center">
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
                          <h3 className="text-[16px] BlogText text-[#b1b1b1] font-interFont">
                            NOVEMBER 13, 2023
                          </h3>
                        </div>
                        <h2 className="text-[22px] BlogText mt-[20px] mb-[20px] font-semibold font-dmFont">
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
