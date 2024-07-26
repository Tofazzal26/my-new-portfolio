import education from "../../../public/education.png";
import experience from "../../../public/experience.png";
import "./MyExperience.css";

const MyExperience = () => {
  return (
    <div className="mt-[100px]">
      <div className="bg-[#070707]">
        <div className="px-8 py-12">
          <div className="grid grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <img className="w-[60px]" src={education} alt="" />
                <h2 className="text-[40px] font-bold font-dmFont text-[#c9f31d]">
                  My Experience
                </h2>
              </div>
              <div className="mt-[40px]">
                <div className="bg-[#1b1b1b] education rounded-2xl text-white">
                  <div className="p-6 ">
                    <h3 className="text-[20px] text-[#c9f31d] font-extrabold font-dmFont">
                      2022 - Present
                    </h3>
                    <h2 className="text-[25px] font-bold font-dmFont">
                      Lead Developer
                    </h2>
                    <p className="text-[16px] font-semibold font-interFont">
                      Blockdots, London
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <img className="w-[50px]" src={experience} alt="" />
                <h2 className="text-[40px] font-bold font-dmFont text-[#c9f31d]">
                  My Education
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
