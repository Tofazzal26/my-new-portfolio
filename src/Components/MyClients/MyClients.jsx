import { FaArrowRight } from "react-icons/fa6";
import { FiArrowUpLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import person1 from "../../../public/person1.png";
import person2 from "../../../public/Person2.png";
import "./MyClients.css";
import { useState } from "react";
const MyClients = () => {
  const [client, setClient] = useState(false);
  const [client2, setClient2] = useState(false);

  const handleClientOpen = () => {
    setClient(true);
  };

  const handleClientLeave = () => {
    setClient(false);
  };

  const handleClientOpen2 = () => {
    setClient2(true);
  };

  const handleClientLeave2 = () => {
    setClient2(false);
  };

  return (
    <div className="mt-[50px] lg:mt-[100px]">
      <div className="text-white bg-[#070707]">
        <div className="flex lg:flex-row flex-col gap-10 p-[20px] lg:p-[120px] justify-center">
          <div>
            <p className="text-[14px] lg:text-[16px] font-interFont font-semibold text-[#b0b0b0]">
              Clients Testimonials
            </p>
            <div className="leading-[50px]">
              <h2 className="text-[30px] lg:text-[40px] mt-[10px] font-bold font-interFont">
                I’ve 100+ Clients
              </h2>
              <h2 className="text-[30px] lg:text-[40px] font-bold font-interFont text-[#c9f31d]">
                Feedback
              </h2>
            </div>
            <p className="text-[14px] lg:text-[16px] lg:mt-[40px] mb-4 lg:mb-[50px] font-dmFont lg:w-[350px] font-medium text-[#b0b0b0]">
              Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
              inventore veritatis
            </p>
            <div className="flex gap-3">
              <div className="rounded-full cursor-pointer IconColor border-[1px] border-gray-600 p-[14px]">
                <FiArrowUpLeft size={20} />
              </div>
              <div className="rounded-full IconColor cursor-pointer border-[1px] border-gray-600 p-[14px]">
                <FiArrowUpRight size={20} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex lg:flex-row flex-col items-center gap-4 lg:gap-8">
              <div
                onMouseEnter={handleClientOpen}
                onMouseLeave={handleClientLeave}
                className="bg-[#131313] lg:py-[80px] py-[60px] px-[20px] lg:px-[40px] rounded-[20px] MyClientStyle border-[1px] border-gray-800"
              >
                <div className="flex justify-center items-center flex-col text-center">
                  <div className="relative">
                    <img
                      src={person1}
                      alt=""
                      className="rounded-full w-[80px]"
                    />
                    <div className="absolute top-[10px] right-[60px] ">
                      <div
                        className={`rounded-full ${
                          client === false ? "bg-[#222222]" : "bg-[#c9f31d]"
                        } h-[60px] w-[60px]`}
                      >
                        <span
                          className={`text-[70px]  ${
                            client === false ? "text-[#c9f31d]" : "text-black"
                          } font-dmFont`}
                        >
                          “
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[14px] lg:text-[16px] my-6 font-dmFont lg:w-[350px] font-medium text-[#b0b0b0]">
                    At vero eoset accusamus et iusto odio dignissimos ducimus
                    wuie blanditiis praesentium voluptatum deleniti atque
                    corrupti dolores
                  </p>
                  <h2 className="text-[18px] lg:text-[20px] font-semibold font-dmFont">
                    Rodlfo E. Shannon
                  </h2>
                  <h3 className="font-interFont mt-1 text-[14px] lg:text-[15px] text-[#c9f31d]">
                    CEO & Founder
                  </h3>
                </div>
              </div>
              <div
                onMouseEnter={handleClientOpen2}
                onMouseLeave={handleClientLeave2}
                className="bg-[#131313] lg:py-[80px] py-[60px] px-[20px] lg:px-[40px] rounded-[20px] MyClientStyle border-[1px] border-gray-800"
              >
                <div className="flex justify-center items-center flex-col text-center">
                  <div className="relative">
                    <img
                      src={person2}
                      alt=""
                      className="rounded-full w-[80px]"
                    />
                    <div className="absolute top-[10px] right-[60px] ">
                      <div
                        className={`rounded-full ${
                          client2 === false ? "bg-[#222222]" : "bg-[#c9f31d]"
                        } h-[60px] w-[60px]`}
                      >
                        <span
                          className={`text-[70px]  ${
                            client2 === false ? "text-[#c9f31d]" : "text-black"
                          } font-dmFont`}
                        >
                          “
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[14px] lg:text-[16px] my-6 font-dmFont lg:w-[350px] font-medium text-[#b0b0b0]">
                    At vero eoset accusamus et iusto odio dignissimos ducimus
                    wuie blanditiis praesentium voluptatum deleniti atque
                    corrupti dolores
                  </p>
                  <h2 className="text-[18px] lg:text-[20px] font-semibold font-dmFont">
                    Rodlfo E. Shannon
                  </h2>
                  <h3 className="font-interFont text-[13px] mt-1 lg:text-[15px] text-[#c9f31d]">
                    CEO & Founder
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClients;
