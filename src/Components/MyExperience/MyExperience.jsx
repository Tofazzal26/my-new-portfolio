import { useState } from "react";
import education from "../../../public/education.png";
import experience from "../../../public/experience.png";
import "./MyExperience.css";
import { SlGraduation } from "react-icons/sl";
import { TbAward } from "react-icons/tb";

const MyExperience = () => {
  const [change, setChange] = useState(false);
  const [change2, setChange2] = useState(false);
  const [change3, setChange3] = useState(false);
  const [change4, setChange4] = useState(false);
  const [change5, setChange5] = useState(false);
  const [change6, setChange6] = useState(false);

  const handleChange = () => {
    setChange(true);
  };
  const handleBefore = () => {
    setChange(false);
  };

  const handleChange2 = () => {
    setChange2(true);
  };
  const handleBefore2 = () => {
    setChange2(false);
  };
  const handleChange3 = () => {
    setChange3(true);
  };
  const handleBefore3 = () => {
    setChange3(false);
  };

  // education

  const handleChange4 = () => {
    setChange4(true);
  };
  const handleBefore4 = () => {
    setChange4(false);
  };

  const handleChange5 = () => {
    setChange5(true);
  };
  const handleBefore5 = () => {
    setChange5(false);
  };

  const handleChange6 = () => {
    setChange6(true);
  };
  const handleBefore6 = () => {
    setChange6(false);
  };

  return (
    <div id="Resume" className="mt-[50px] lg:mt-[100px]">
      <div className="bg-[#070707]">
        <div className="lg:px-8 px-4 py-6 lg:py-12">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div>
              <div className="flex items-center gap-4">
                <TbAward className="text-white" size={48} />
                <h2 className="text-[23px] lg:text-[40px] font-bold font-dmFont text-white">
                  My <span className="text-[#c9f31d]">Experience</span>
                </h2>
              </div>
              <div className="mt-[20px] lg:mt-[40px]">
                <div className="space-y-4 lg:space-y-8">
                  <div
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    onMouseEnter={handleChange}
                    onMouseLeave={handleBefore}
                    className="bg-[#1b1b1b] education cursor-pointer lg:w-[600px] rounded-2xl text-white"
                  >
                    <div className="p-6 ">
                      <h3
                        className={`text-[15px] lg:text-[20px] ${
                          change === false ? "text-[#c9f31d]" : "text-black"
                        } font-extrabold font-dmFont`}
                      >
                        2024 - Present
                      </h3>
                      <h2 className="text-[18px] lg:text-[25px] font-bold font-dmFont">
                        React Developer
                      </h2>
                      <p className="text-[14px] lg:text-[16px] font-semibold font-interFont">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1200"
                    onMouseEnter={handleChange2}
                    onMouseLeave={handleBefore2}
                    className="bg-[#1b1b1b] education cursor-pointer lg:w-[600px] rounded-2xl text-white"
                  >
                    <div className="p-6 ">
                      <h3
                        className={`text-[15px] lg:text-[20px] ${
                          change2 === false ? "text-[#c9f31d]" : "text-black"
                        } font-extrabold font-dmFont`}
                      >
                        2023 - 2024
                      </h3>
                      <h2 className="text-[18px] lg:text-[25px] font-bold font-dmFont">
                        Front-End Developer
                      </h2>
                      <p className="text-[14px] lg:text-[16px] font-semibold font-interFont">
                        Dhaka, Programming Hero
                      </p>
                    </div>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-delay="150"
                    data-aos-duration="1400"
                    onMouseEnter={handleChange3}
                    onMouseLeave={handleBefore3}
                    className="bg-[#1b1b1b] education cursor-pointer lg:w-[600px] rounded-2xl text-white"
                  >
                    <div className="p-6">
                      <h3
                        className={`text-[15px] lg:text-[20px] ${
                          change3 === false ? "text-[#c9f31d]" : "text-black"
                        } font-extrabold font-dmFont`}
                      >
                        2022 - 2023
                      </h3>
                      <h2 className="text-[18px] lg:text-[25px] font-bold font-dmFont">
                        Junior Graphics Designer
                      </h2>
                      <p className="text-[15px] lg:text-[16px] font-semibold font-interFont">
                        Dhaka , Graphic IT BD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mt-4 lg:mt-0 gap-4">
                <SlGraduation className="text-white" size={45} />
                <h2 className="text-[23px] lg:text-[40px] font-bold font-dmFont text-white">
                  My <span className="text-[#c9f31d]">Education</span>
                </h2>
              </div>
              <div>
                <div className="mt-[20px] lg:mt-[40px]">
                  <div className="space-y-4 lg:space-y-8">
                    <div
                      data-aos="fade-left"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      onMouseEnter={handleChange4}
                      onMouseLeave={handleBefore4}
                      className="bg-[#1b1b1b] education cursor-pointer lg:w-[600px] rounded-2xl text-white"
                    >
                      <div className="p-6 ">
                        <h3
                          className={`text-[15px] lg:text-[20px] ${
                            change4 === false ? "text-[#c9f31d]" : "text-black"
                          } font-extrabold font-dmFont`}
                        >
                          2022 - 2023
                        </h3>
                        <h2 className="text-[18px] lg:text-[25px] font-bold font-dmFont">
                          Higher Secondary School Certificate
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-semibold font-interFont">
                          {" "}
                          Pubail Adorsho College and University
                        </p>
                      </div>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                      onMouseEnter={handleChange5}
                      onMouseLeave={handleBefore5}
                      className="bg-[#1b1b1b] education cursor-pointer lg:w-[600px] rounded-2xl text-white"
                    >
                      <div className="p-6 ">
                        <h3
                          className={`text-[15px] lg:text-[20px] ${
                            change5 === false ? "text-[#c9f31d]" : "text-black"
                          } font-extrabold font-dmFont`}
                        >
                          2021 - 2022
                        </h3>
                        <h2 className="text-[18px] lg:text-[25px] font-bold font-dmFont">
                          Secondary School Certificate
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-semibold font-interFont">
                          Ashraf Textile Mills High School
                        </p>
                      </div>
                    </div>
                    <div
                      onMouseEnter={handleChange6}
                      onMouseLeave={handleBefore6}
                      data-aos="fade-left"
                      data-aos-delay="150"
                      data-aos-duration="1400"
                      className="bg-[#1b1b1b] education cursor-pointer lg:w-[600px] rounded-2xl text-white"
                    >
                      <div className="p-6 ">
                        <h3
                          className={`text-[15px] lg:text-[20px] ${
                            change6 === false ? "text-[#c9f31d]" : "text-black"
                          } font-extrabold font-dmFont`}
                        >
                          2019 - 2020
                        </h3>
                        <h2 className="text-[18px] lg:text-[25px] font-bold font-dmFont">
                          Junior School Certificate
                        </h2>
                        <p className="text-[14px] lg:text-[16px] font-semibold font-interFont">
                          Ashraf Textile Mills High School
                        </p>
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

export default MyExperience;
