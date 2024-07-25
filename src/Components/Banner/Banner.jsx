import { GrFacebookOption } from "react-icons/gr";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiGithubFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { BsDownload } from "react-icons/bs";
import banner from "../../../public/profile-first.png";
const Banner = () => {
  return (
    <div className="text-white">
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <div>
          <h4 className="text-[#656565] font-interFont text-[22px] lg:text-[45px] leading-[-100px] font-medium tracking-[-0.9px]">
            Hello, i'm
          </h4>
          <div className="lg:leading-[80px]">
            <h2 className="text-[#c9f31d] font-dmFont font-bold text-[34px] lg:text-[65px]">
              Tofazzal Hossain
            </h2>
            <h3 className="font-dmFont text-[34px] lg:text-[65px]">
              Web Developer
            </h3>
          </div>
          <p className="font-interFont text-[16px] lg:text-[18px] mb-6 lg:w-[550px] text-[#b1b1b1]">
            I am a developer passionate about showcasing frontend requirements
            in an attractive way, I am serious, focused, and love new challenges
            believing it's better to fail independently than succeed relying on
            others.
          </p>
          <div className="flex flex-col lg:flex-row gap-6">
            <div>
              <button className="flex items-center bg-[#c9f31d] gap-2 lg:px-4 px-3 py-[12px] lg:py-[14px] rounded-xl text-black font-interFont font-medium">
                Download CV
                <BsDownload size={18} />
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <a href="">
                <span className="border-2  flex p-1 rounded-full">
                  <GrFacebookOption size={25} />
                </span>
              </a>
              <a href="">
                <span className="border-2  flex p-1 rounded-full">
                  <BiLogoLinkedin size={25} />
                </span>
              </a>
              <a href="">
                <span className="border-2  flex p-1 rounded-full">
                  <RiGithubFill size={25} />
                </span>
              </a>
              <a href="">
                <span className="border-2  flex p-1 rounded-full">
                  <TbWorld size={25} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={banner} width={700} alt="" />
        </div>
        <div>
          <div className="bg-black w-[240px] p-6 rounded-xl">
            <div>
              <h2 className="font-dmFont  text-[40px] font-medium text-[#c9f31d]">
                2+
              </h2>
              <h4 className="text-[#a1a6a6]  font-interFont text-[16px]">
                Years Of Experience
              </h4>
            </div>
            <div className="border-b-[1px] border-t-[1px] border-gray-600 my-6 py-6">
              <h2 className="font-dmFont  text-[40px] font-medium text-[#c9f31d]">
                100+
              </h2>
              <h4 className="text-[#a1a6a6]  font-interFont text-[16px]">
                Project Complete
              </h4>
            </div>
            <div>
              <h2 className="font-dmFont  text-[40px] font-medium text-[#c9f31d]">
                99%
              </h2>
              <h4 className="text-[#a1a6a6]  font-interFont text-[16px]">
                Client Satisfactions
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
