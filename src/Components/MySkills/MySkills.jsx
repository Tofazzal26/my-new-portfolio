import figma from "../../../public/figma.png";
import react from "../../../public/react.png";
import illustrator from "../../../public/illustrator.png";
import javascript from "../../../public/java-script.png";
import photo_shop from "../../../public/photoshop.png";
import premiere_pro from "../../../public/premiere-pro.png";
import "./MySkills.css";

const MySkills = () => {
  return (
    <div>
      <div className="mt-[40px] lg:mt-[100px]">
        <div>
          <h2 className="text-[30px] lg:text-[45px] font-bold font-dmFont text-white text-center">
            My <span className="text-[#c9f31d]">Skills</span>
          </h2>
          <p className="text-[14px] lg:text-[16px] font-interFont mx-auto lg:w-[660px] text-white text-center">
            I excel at crafting intuitive and engaging web experiences, blending
            design aesthetics with seamless functionality to enhance user
            interactions.
          </p>
        </div>

        <div className="mt-6 lg:mt-12">
          <div className="flex lg:flex-row flex-col justify-center items-center gap-3 lg:gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#070707] text-white w-[200px] cursor-pointer lg:w-[180px] py-[40px] lg:py-10 MySkills rounded-[30px]">
                <div className="flex items-center justify-center flex-col">
                  <img src={figma} width={60} alt="" />
                  <h2 className="text-[20px] font-extrabold font-dmFont mt-4">
                    92%
                  </h2>
                </div>
              </div>

              <h2 className="text-[16px] font-interFont text-white">Figma</h2>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#070707] text-white cursor-pointer w-[200px] lg:w-[180px] py-[40px] lg:py-10 MySkills rounded-[30px]">
                <div className="flex items-center justify-center flex-col">
                  <img src={illustrator} width={60} alt="" />
                  <h2 className="text-[20px] font-extrabold font-dmFont mt-4">
                    98%
                  </h2>
                </div>
              </div>

              <h2 className="text-[16px] font-interFont text-white">
                Illustrator
              </h2>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#070707] text-white w-[200px] cursor-pointer lg:w-[180px] py-[40px] lg:py-10 MySkills rounded-[30px]">
                <div className="flex items-center justify-center flex-col">
                  <img src={react} width={60} alt="" />
                  <h2 className="text-[20px] font-extrabold font-dmFont mt-4">
                    80%
                  </h2>
                </div>
              </div>

              <h2 className="text-[16px] font-interFont text-white">React</h2>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#070707] text-white w-[200px] cursor-pointer lg:w-[180px] py-[40px] lg:py-10 MySkills rounded-[30px]">
                <div className="flex items-center justify-center flex-col">
                  <img src={photo_shop} width={60} alt="" />
                  <h2 className="text-[20px] font-extrabold font-dmFont mt-4">
                    85%
                  </h2>
                </div>
              </div>

              <h2 className="text-[16px] font-interFont text-white">
                PhotoShop
              </h2>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#070707] text-white w-[200px] cursor-pointer lg:w-[180px] py-[40px] lg:py-10 MySkills rounded-[30px]">
                <div className="flex items-center justify-center flex-col">
                  <img src={javascript} width={60} alt="" />
                  <h2 className="text-[20px] font-extrabold font-dmFont mt-4">
                    90%
                  </h2>
                </div>
              </div>

              <h2 className="text-[16px] font-interFont text-white">
                JavaScript
              </h2>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#070707] text-white w-[200px] cursor-pointer lg:w-[180px] py-[40px] lg:py-10 MySkills rounded-[30px]">
                <div className="flex items-center justify-center flex-col">
                  <img src={premiere_pro} width={60} alt="" />
                  <h2 className="text-[20px] font-extrabold font-dmFont mt-4">
                    80%
                  </h2>
                </div>
              </div>

              <h2 className="text-[16px] font-interFont text-white">
                PremierePro
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
