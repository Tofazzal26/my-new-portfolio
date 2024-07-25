import {
  BiArrowFromRight,
  BiArrowToRight,
  BiSolidRightArrow,
} from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import "./MyQuality.css";

const MyQuality = () => {
  return (
    <div className="bg-[#070707]">
      <div className="p-[100px]">
        <div className="text-center text-white mb-[100px]">
          <h2 className="text-[40px] font-bold font-dmFont">
            My Quality <span className="text-[#c9f31d]">Services</span>
          </h2>
          <p className="font-interFont mx-auto lg:w-[600px] text-[16px]">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className="text-white">
          <div className=" border-t-[1px] border-gray-800 cursor-pointer MyService">
            <div className="flex items-center justify-between p-10">
              <div className="flex gap-6 items-center">
                <span className="text-[25px] font-bold font-dmFont">01</span>
                <h2 className="font-bold text-[30px] font-dmFont">
                  Branding Design
                </h2>
              </div>
              <div>
                <p className="lg:w-[450px] text-[16px] font-interFont">
                  I break down complex user experience problems to create
                  integritiy focused solutions that connect billions of people
                </p>
              </div>
              <div>
                <BsArrowRight
                  size={35}
                  className="rotate-[45deg] hover:rotate-[-45deg]"
                />
              </div>
            </div>
          </div>
          <div className=" border-t-[1px] border-gray-800 cursor-pointer">
            <div className="flex items-center justify-between p-10">
              <div className="flex gap-6 items-center">
                <span className="text-[25px] font-bold font-dmFont">02</span>
                <h2 className="font-bold text-[30px] font-dmFont">
                  UI/UX Design
                </h2>
              </div>
              <div>
                <p className="lg:w-[450px] text-[16px] font-interFont">
                  I break down complex user experience problems to create
                  integritiy focused solutions that connect billions of people
                </p>
              </div>
              <div>
                <BsArrowRight size={35} className="rotate-[45deg]" />
              </div>
            </div>
          </div>
          <div className="cursor-pointer border-b-[1px] border-t-[1px] border-gray-800">
            <div className="flex items-center justify-between p-10">
              <div className="flex gap-6 items-center">
                <span className="text-[25px] font-bold font-dmFont">03</span>
                <h2 className="font-bold text-[30px] font-dmFont">
                  Web Design
                </h2>
              </div>
              <div>
                <p className="lg:w-[450px] text-[16px] font-interFont">
                  I break down complex user experience problems to create
                  integritiy focused solutions that connect billions of people
                </p>
              </div>
              <div>
                <BsArrowRight size={35} className="rotate-[45deg]" />
              </div>
            </div>
          </div>
          <div className=" border-b-[1px] border-gray-800 cursor-pointer">
            <div className="flex items-center justify-between p-10">
              <div className="flex gap-6 items-center">
                <span className="text-[25px] font-bold font-dmFont">04</span>
                <h2 className="font-bold text-[30px] font-dmFont">
                  App Design
                </h2>
              </div>
              <div>
                <p className="lg:w-[450px] text-[16px] font-interFont">
                  I break down complex user experience problems to create
                  integritiy focused solutions that connect billions of people
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
  );
};

export default MyQuality;
