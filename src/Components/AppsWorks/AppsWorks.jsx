import project1 from "../../../public/Transcreaw.png";
import project2 from "../../../public/Luxury Hotel.png";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
const AppsWorks = () => {
  const [info, setInfo] = useState(false);
  const [info2, setInfo2] = useState(false);
  const handleInfoEnter = () => {
    setInfo(true);
  };
  const handleInfoLeave = () => {
    setInfo(false);
  };
  // 2 //
  const handleInfoEnter2 = () => {
    setInfo2(true);
  };
  const handleInfoLeave2 = () => {
    setInfo2(false);
  };
  return (
    <div>
      <div className="mt-6 lg:mt-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-12">
          <div>
            <a href="https://transcreaw.web.app" target="_blank">
              <div
                onMouseEnter={handleInfoEnter}
                onMouseLeave={handleInfoLeave}
                className="bg-[#212c01] pr-8 cursor-pointer pl-8 pt-8 relative rounded-lg"
              >
                <img src={project1} alt="project1" />
                <div
                  className={`absolute bottom-3 left-5 bg-[#c9f31d] rounded-lg text-black lg:w-[705px] ${
                    info === true ? "block" : "hidden"
                  }`}
                >
                  <div className="flex justify-between items-center p-4">
                    <div>
                      <h2 className="text-[30px] font-bold font-interFont">
                        Transcrew
                      </h2>
                      <p className="text-[16px] mt-2 font-dmFont font-semibold">
                        Here is everything about the project
                      </p>
                    </div>
                    <div>
                      <BsArrowRight size={35} className="rotate-[-45deg]" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div>
            <div>
              <a href="https://organic-foods-59169.web.app" target="_blank">
                <div
                  onMouseEnter={handleInfoEnter2}
                  onMouseLeave={handleInfoLeave2}
                  className="bg-[#212c01] pr-8 cursor-pointer pl-8 pt-8 relative rounded-lg"
                >
                  <img src={project2} alt="project1" />
                  <div
                    className={`absolute bottom-3 left-5 bg-[#c9f31d] rounded-lg text-black lg:w-[705px] ${
                      info2 === true ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex justify-between items-center p-4">
                      <div>
                        <h2 className="text-[30px] font-bold font-interFont">
                          Luxury Hotel
                        </h2>
                        <p className="text-[16px] mt-2 font-dmFont font-semibold">
                          Here is everything about the project
                        </p>
                      </div>
                      <div>
                        <BsArrowRight size={35} className="rotate-[-45deg]" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsWorks;
