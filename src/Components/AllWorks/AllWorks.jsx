import project1 from "../../../public/Transcreaw.png";
import project2 from "../../../public/Luxury Hotel.png";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
const AllWorks = () => {
  const [info, setInfo] = useState(false);

  const handleInfoEnter = () => {
    setInfo(true);
  };
  const handleInfoLeave = () => {
    setInfo(false);
  };

  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 gap-12">
        <a href="">
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
        <div>
          <img src={project2} alt="project2" />
        </div>
        <div>
          <img src={project2} alt="project2" />
        </div>
        <div>
          <img src={project2} alt="project2" />
        </div>
      </div>
    </div>
  );
};

export default AllWorks;
