import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
const MyRecentWorks = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <div>
      <div className="mt-[100px]">
        <h2 className="text-[45px] text-white text-center font-bold font-dmFont">
          My Recent <span className="text-[#c9f31d]">Works</span>
        </h2>
      </div>
      <div>
        <div className="mt-10">
          <div className="bg-white lg:w-[330px] mx-auto rounded-full py-2">
            <div className="flex justify-center items-center font-interFont gap-6 text-[16px] font-semibold">
              <button
                onClick={() => setToggle(0)}
                className={`${
                  toggle === 0 ? "bg-[#c9f31d] rounded-full p-2" : ""
                }`}
              >
                All
              </button>
              <button>Apps </button>
              <button>Branding</button>
              <button>UX/UI</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecentWorks;
