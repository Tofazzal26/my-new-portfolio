import client1 from "../../../public/client-logo1.png";
import client2 from "../../../public/client-logo2.png";
import client3 from "../../../public/client-logo3.png";
import client4 from "../../../public/client-logo4.png";
import client5 from "../../../public/client-logo5.png";
import client6 from "../../../public/client-logo6.png";
import client7 from "../../../public/client-logo7.png";
import client8 from "../../../public/client-logo8.png";
import client9 from "../../../public/client-logo9.png";
import client10 from "../../../public/client-logo10.png";

const ProjectCompletes = () => {
  return (
    <div className="text-white mt-[50px] lg:mt-[100px]">
      <h1 className="text-[18px] font-dmFont font-medium text-center mb-[20px] lg:mb-[50px]">
        I’ve <span className="text-[#c9f31d] ">100+ Global Clients</span> &
        lot’s of Project Complete
      </h1>
      <div>
        <div className="flex flex-col justify-center gap-6 lg:gap-16 items-center">
          <div className="flex lg:flex-row flex-col items-center gap-6 lg:gap-[100px]">
            <div>
              <img
                src={client1}
                alt=""
                className="opacity-[20%] hover:opacity-[100%] transition-all"
              />
            </div>
            <div>
              <img
                src={client2}
                alt=""
                className="opacity-[20%] hover:opacity-[100%] transition-all"
              />
            </div>
            <div>
              <img
                src={client3}
                alt=""
                className="opacity-[20%] hover:opacity-[100%] transition-all"
              />
            </div>
            <div>
              <img
                src={client4}
                alt=""
                className="opacity-[20%] hover:opacity-[100%] transition-all"
              />
            </div>
            <div>
              <img
                src={client5}
                alt=""
                className="opacity-[20%] hover:opacity-[100%] transition-all"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-6 lg:gap-[130px]">
            <div>
              <img
                src={client6}
                alt=""
                className="opacity-[20%] hover:opacity-[100%] transition-all"
              />
            </div>
            <div>
              <img
                src={client7}
                alt=""
                className="opacity-[20%] hover:opacity-[100%] transition-all"
              />
            </div>
            <div>
              <img
                src={client8}
                alt=""
                className="opacity-[20%] hover:opacity-[100%] transition-all"
              />
            </div>
            <div>
              <img
                src={client9}
                alt=""
                className="opacity-[20%] hover:opacity-[100%] transition-all"
              />
            </div>
            <div>
              <img
                src={client10}
                alt=""
                className="opacity-[20%] hover:opacity-[100%] transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCompletes;
