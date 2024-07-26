import project3 from "../../../public/Artisan Corner.png";
import project4 from "../../../public/Realist home.png";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const BrandingWorks = () => {
  const [info3, setInfo3] = useState(false);
  const [info4, setInfo4] = useState(false);

  // 3 //
  const handleInfoEnter3 = () => {
    setInfo3(true);
  };
  const handleInfoLeave3 = () => {
    setInfo3(false);
  };
  // 3 //
  const handleInfoEnter4 = () => {
    setInfo4(true);
  };
  const handleInfoLeave4 = () => {
    setInfo4(false);
  };
  return (
    <div>
      <div className="mt-12">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <div>
              <a href="">
                <div
                  onMouseEnter={handleInfoEnter3}
                  onMouseLeave={handleInfoLeave3}
                  className="bg-[#212c01] pr-8 cursor-pointer pl-8 pt-8 relative rounded-lg"
                >
                  <img src={project3} alt="project1" />
                  <div
                    className={`absolute bottom-3 left-5 bg-[#c9f31d] rounded-lg text-black lg:w-[705px] ${
                      info3 === true ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex justify-between items-center p-4">
                      <div>
                        <h2 className="text-[30px] font-bold font-interFont">
                          Artisan Corner
                        </h2>
                        <p className="text-[16px] mt-2 font-dmFont font-semibold">
                          Project was about precision and information.
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
          <div>
            <div>
              <a href="">
                <div
                  onMouseEnter={handleInfoEnter4}
                  onMouseLeave={handleInfoLeave4}
                  className="bg-[#212c01] pr-8 cursor-pointer pl-8 pt-8 relative rounded-lg"
                >
                  <img src={project4} alt="project1" />
                  <div
                    className={`absolute bottom-3 left-5 bg-[#c9f31d] rounded-lg text-black lg:w-[705px] ${
                      info4 === true ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex justify-between items-center p-4">
                      <div>
                        <h2 className="text-[30px] font-bold font-interFont">
                          Realist Home
                        </h2>
                        <p className="text-[16px] mt-2 font-dmFont font-semibold">
                          Project was about precision and information.
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

export default BrandingWorks;