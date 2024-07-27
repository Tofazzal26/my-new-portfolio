import { FaArrowRight } from "react-icons/fa6";
import { FiArrowUpLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import person1 from "../../../public/person1.png";
const MyClients = () => {
  return (
    <div className="mt-[100px]">
      <div className="text-white bg-[#070707]">
        <div className="flex gap-10 p-20">
          <div>
            <p className="text-[16px] font-interFont font-semibold text-[#b0b0b0]">
              Clients Testimonials
            </p>
            <div className="leading-[50px]">
              <h2 className="text-[40px] mt-[10px] font-bold font-interFont">
                I’ve 1253+ Clients
              </h2>
              <h2 className="text-[40px] font-bold font-interFont text-[#c9f31d]">
                Feedback
              </h2>
            </div>
            <p className="text-[16px] mt-[40px] mb-[50px] font-dmFont lg:w-[350px] font-medium text-[#b0b0b0]">
              Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
              inventore veritatis
            </p>
            <div className="flex gap-3">
              <div className="rounded-full border-[1px] border-gray-600 p-[14px]">
                <FiArrowUpLeft size={20} />
              </div>
              <div className="rounded-full border-[1px] border-gray-600 p-[14px]">
                <FiArrowUpRight size={20} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-8">
              <div className="bg-[#131313] py-[80px] px-[40px] rounded-[20px] border-[1px] border-gray-800">
                <div className="flex justify-center items-center flex-col text-center">
                  <div className="relative">
                    <img
                      src={person1}
                      alt=""
                      className="rounded-full w-[80px]"
                    />
                    <div className="absolute top-[10px] right-[60px] ">
                      <div className="bg-[#222222] rounded-full h-[60px] w-[60px]">
                        <span className="text-[70px] text-[#c9f31d] font-dmFont">
                          “
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] my-6 font-dmFont lg:w-[350px] font-medium text-[#b0b0b0]">
                    At vero eoset accusamus et iusto odio dignissimos ducimus
                    wuie blanditiis praesentium voluptatum deleniti atque
                    corrupti dolores
                  </p>
                  <h2 className="text-[20px] font-semibold font-dmFont">
                    Rodlfo E. Shannon
                  </h2>
                  <h3 className="font-interFont mt-1 text-[15px] text-[#c9f31d]">
                    CEO & Founder
                  </h3>
                </div>
              </div>
              <div className="bg-[#131313] py-[80px] px-[40px] rounded-[20px] border-[1px] border-gray-800">
                <div className="flex justify-center items-center flex-col text-center">
                  <div className="relative">
                    <img
                      src={person1}
                      alt=""
                      className="rounded-full w-[80px]"
                    />
                    <div className="absolute top-[10px] right-[60px] ">
                      <div className="bg-[#222222] rounded-full h-[60px] w-[60px]">
                        <span className="text-[70px] text-[#c9f31d] font-dmFont">
                          “
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] my-6 font-dmFont lg:w-[350px] font-medium text-[#b0b0b0]">
                    At vero eoset accusamus et iusto odio dignissimos ducimus
                    wuie blanditiis praesentium voluptatum deleniti atque
                    corrupti dolores
                  </p>
                  <h2 className="text-[20px] font-semibold font-dmFont">
                    Rodlfo E. Shannon
                  </h2>
                  <h3 className="font-interFont mt-1 text-[15px] text-[#c9f31d]">
                    CEO & Founder
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClients;
