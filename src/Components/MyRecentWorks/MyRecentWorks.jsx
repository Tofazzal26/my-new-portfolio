import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import AllWorks from "../AllWorks/AllWorks";
import AppsWorks from "../AppsWorks/AppsWorks";
import BrandingWorks from "../BrandingWorks/BrandingWorks";
import UiDesign from "../UiDesign/UiDesign";
const MyRecentWorks = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <div>
      <div className="mt-[50px] lg:mt-[100px]">
        <h2 className="text-[30px] lg:text-[45px] text-white text-center font-bold font-dmFont">
          My Recent <span className="text-[#c9f31d]">Works</span>
        </h2>
      </div>
      <div>
        <div className="mt-[20px] lg:mt-10">
          <div className="bg-white lg:w-[330px] w-[250px] mx-auto rounded-full py-1 lg:py-2">
            <div className="flex justify-center items-center font-interFont gap-3 lg:gap-6 text-[14px] lg:text-[16px] font-semibold">
              <button
                onClick={() => setToggle(0)}
                className={`${
                  toggle === 0 ? "bg-[#c9f31d]  rounded-full p-2" : ""
                }`}
              >
                All
              </button>
              <button
                onClick={() => setToggle(1)}
                className={`${
                  toggle === 1 ? "bg-[#c9f31d]  rounded-full p-2" : ""
                }`}
              >
                Apps{" "}
              </button>
              <button
                onClick={() => setToggle(2)}
                className={`${
                  toggle === 2 ? "bg-[#c9f31d]  rounded-full p-2" : ""
                }`}
              >
                Branding
              </button>
              <button
                onClick={() => setToggle(3)}
                className={`${
                  toggle === 3 ? "bg-[#c9f31d]  rounded-full p-2" : ""
                }`}
              >
                UX/UI
              </button>
            </div>
          </div>
          <div className="text-white">
            <div>
              {toggle === 0 ? (
                <AllWorks />
              ) : toggle === 1 ? (
                <AppsWorks />
              ) : toggle === 2 ? (
                <BrandingWorks />
              ) : toggle === 3 ? (
                <UiDesign />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecentWorks;
