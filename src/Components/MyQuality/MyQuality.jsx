import {
  BiArrowFromRight,
  BiArrowToRight,
  BiSolidRightArrow,
} from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import "./MyQuality.css";

const MyQuality = () => {
  return (
    <section id="Services">
      <div className="bg-[#070707]">
        <div className="lg:p-[100px] p-3">
          <div className="text-center text-white mb-[20px] lg:mb-[100px]">
            <h2 className="text-[28px] mt-4 lg:mt-0 lg:text-[40px] font-bold font-dmFont">
              My Quality <span className="text-[#c9f31d]">Services</span>
            </h2>
            <p className="font-interFont mx-auto lg:w-[600px] text-[14px] lg:text-[16px]">
              We ensure exceptional standards with meticulous attention to
              detail, continuously exceeding expectations through commitment and
              excellence.
            </p>
          </div>
          <div className="text-white">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="50"
              data-aos-duration="1000"
              className=" border-t-[1px] border-gray-800 cursor-pointer bg-[#c9f31d] text-black"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-10">
                <div className="flex lg:gap-6 flex-col lg:flex-row items-center">
                  <span className="text-[25px] font-bold font-dmFont">01</span>
                  <h2 className="font-bold text-[20px] lg:text-[30px] font-dmFont">
                    Branding Design
                  </h2>
                </div>
                <div>
                  <p className="lg:w-[450px] text-[14px] lg:text-[16px] font-interFont">
                    Crafting unique brand identities with innovative design for
                    compelling and resonant visual narratives.
                  </p>
                </div>
                <div>
                  <BsArrowRight size={35} className="rotate-[45deg] " />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="100"
              data-aos-duration="1200"
              className=" border-t-[1px] border-gray-800 cursor-pointer MyService"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:gap-6 items-center">
                  <span className="text-[25px] font-bold font-dmFont">02</span>
                  <h2 className="font-bold text-[20px] lg:text-[30px] font-dmFont">
                    UI/UX Design
                  </h2>
                </div>
                <div>
                  <p className="lg:w-[450px] text-[14px] lg:text-[16px] font-interFont">
                    We design intuitive and engaging user interfaces and
                    experiences that prioritize usability and delight users.
                  </p>
                </div>
                <div>
                  <BsArrowRight size={35} className="rotate-[45deg]" />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="200"
              data-aos-duration="1400"
              className="cursor-pointer border-b-[1px] border-t-[1px] border-gray-800 MyService"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:gap-6 items-center">
                  <span className="text-[25px] font-bold font-dmFont">03</span>
                  <h2 className="font-bold text-[20px] lg:text-[30px] font-dmFont">
                    Web Design
                  </h2>
                </div>
                <div>
                  <p className="lg:w-[450px] text-[16px] font-interFont">
                    We design visually appealing, user-friendly websites that
                    provide seamless and engaging online experiences.
                  </p>
                </div>
                <div>
                  <BsArrowRight size={35} className="rotate-[45deg]" />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="300"
              data-aos-duration="1600"
              className=" border-b-[1px] border-gray-800 cursor-pointer MyService"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:gap-6 items-center">
                  <span className="text-[25px] font-bold font-dmFont">04</span>
                  <h2 className="font-bold text-[20px] lg:text-[30px] font-dmFont">
                    App Design
                  </h2>
                </div>
                <div>
                  <p className="lg:w-[450px] text-[16px] font-interFont">
                    Designing intuitive and visually appealing apps that deliver
                    seamless and engaging user experiences.
                  </p>
                </div>
                <div>
                  <BsArrowRight size={35} className="rotate-[45deg]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyQuality;
