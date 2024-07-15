import { GrFacebookOption } from "react-icons/gr";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiGithubFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
const Banner = () => {
  return (
    <div className="text-white">
      <div>
        <div>
          <h4>Hello, i'm</h4>
          <h2>Tofazzal Hossain</h2>
          <h3>Web Developer</h3>
          <p>
            I am a developer passionate about showcasing frontend requirements
            in an attractive way, I am serious, focused, and love new challenges
            believing it's better to fail independently than succeed relying on
            others.
          </p>
          <div>
            <GrFacebookOption />
            <BiLogoLinkedin />
            <RiGithubFill />
            <TbWorld />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
