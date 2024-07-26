import { useState } from "react";
import education from "../../../public/education.png";
import experience from "../../../public/experience.png";
import "./MyExperience.css";

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
    <div className="mt-[100px]">
      <div className="bg-[#070707]">
        <div className="px-8 py-12">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div>
              <div className="flex items-center gap-4">
                <img className="w-[50px]" src={experience} alt="" />
                <h2 className="text-[40px] font-bold font-dmFont text-white">
                  My <span className="text-[#c9f31d]">Experience</span>
                </h2>
              </div>
              <div className="mt-[40px]">
                <div className="space-y-8">
                  <div
                    onMouseEnter={handleChange}
                    onMouseLeave={handleBefore}
                    className="bg-[#1b1b1b] education lg:w-[600px] rounded-2xl text-white"
                  >
                    <div className="p-6 ">
                      <h3
                        className={`text-[20px] ${
                          change === false ? "text-[#c9f31d]" : "text-black"
                        } font-extrabold font-dmFont`}
                      >
                        2024 - Present
                      </h3>
                      <h2 className="text-[25px] font-bold font-dmFont">
                        React Developer
                      </h2>
                      <p className="text-[16px] font-semibold font-interFont">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div
                    onMouseEnter={handleChange2}
                    onMouseLeave={handleBefore2}
                    className="bg-[#1b1b1b] education lg:w-[600px] rounded-2xl text-white"
                  >
                    <div className="p-6 ">
                      <h3
                        className={`text-[20px] ${
                          change2 === false ? "text-[#c9f31d]" : "text-black"
                        } font-extrabold font-dmFont`}
                      >
                        2023 - 2024
                      </h3>
                      <h2 className="text-[25px] font-bold font-dmFont">
                        Front-End Developer
                      </h2>
                      <p className="text-[16px] font-semibold font-interFont">
                        Dhaka, Programming Hero
                      </p>
                    </div>
                  </div>
                  <div
                    onMouseEnter={handleChange3}
                    onMouseLeave={handleBefore3}
                    className="bg-[#1b1b1b] education lg:w-[600px] rounded-2xl text-white"
                  >
                    <div className="p-6 ">
                      <h3
                        className={`text-[20px] ${
                          change3 === false ? "text-[#c9f31d]" : "text-black"
                        } font-extrabold font-dmFont`}
                      >
                        2022 - 2023
                      </h3>
                      <h2 className="text-[25px] font-bold font-dmFont">
                        Junior Graphics Designer
                      </h2>
                      <p className="text-[16px] font-semibold font-interFont">
                        Dhaka , Graphic IT BD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <img className="w-[60px]" src={education} alt="" />
                <h2 className="text-[40px] font-bold font-dmFont text-white">
                  My <span className="text-[#c9f31d]">Education</span>
                </h2>
              </div>
              <div>
                <div className="mt-[40px]">
                  <div className="space-y-8">
                    <div
                      onMouseEnter={handleChange4}
                      onMouseLeave={handleBefore4}
                      className="bg-[#1b1b1b] education lg:w-[600px] rounded-2xl text-white"
                    >
                      <div className="p-6 ">
                        <h3
                          className={`text-[20px] ${
                            change4 === false ? "text-[#c9f31d]" : "text-black"
                          } font-extrabold font-dmFont`}
                        >
                          2023 - 2024
                        </h3>
                        <h2 className="text-[25px] font-bold font-dmFont">
                          Programming Course
                        </h2>
                        <p className="text-[16px] font-semibold font-interFont">
                          Programming Hero
                        </p>
                      </div>
                    </div>
                    <div
                      onMouseEnter={handleChange5}
                      onMouseLeave={handleBefore5}
                      className="bg-[#1b1b1b] education lg:w-[600px] rounded-2xl text-white"
                    >
                      <div className="p-6 ">
                        <h3
                          className={`text-[20px] ${
                            change5 === false ? "text-[#c9f31d]" : "text-black"
                          } font-extrabold font-dmFont`}
                        >
                          2022 - 2023
                        </h3>
                        <h2 className="text-[25px] font-bold font-dmFont">
                          Graphic Design Course
                        </h2>
                        <p className="text-[16px] font-semibold font-interFont">
                          Graphic IT BD
                        </p>
                      </div>
                    </div>
                    <div
                      onMouseEnter={handleChange6}
                      onMouseLeave={handleBefore6}
                      className="bg-[#1b1b1b] education lg:w-[600px] rounded-2xl text-white"
                    >
                      <div className="p-6 ">
                        <h3
                          className={`text-[20px] ${
                            change6 === false ? "text-[#c9f31d]" : "text-black"
                          } font-extrabold font-dmFont`}
                        >
                          2023 - 2024
                        </h3>
                        <h2 className="text-[25px] font-bold font-dmFont">
                          Web Design Course
                        </h2>
                        <p className="text-[16px] font-semibold font-interFont">
                          Programming Hero
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
