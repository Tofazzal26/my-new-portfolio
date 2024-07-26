import education from "../../../public/education.png";
import experience from "../../../public/experience.png";

const MyExperience = () => {
  return (
    <div className="mt-[100px]">
      <div className="bg-[#070707] text-white">
        <div className="px-8 py-12">
          <div className="grid grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <img className="w-[60px]" src={education} alt="" />
                <h2 className="text-[45px] font-bold font-dmFont text-[#c9f31d]">
                  My Experience
                </h2>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <img className="w-[50px]" src={experience} alt="" />
                <h2 className="text-[45px] font-bold font-dmFont text-[#c9f31d]">
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
