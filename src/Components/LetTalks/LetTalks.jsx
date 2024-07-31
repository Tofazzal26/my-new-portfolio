import { RiArrowRightSLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";

const LetTalks = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-[50px] lg:mt-[120px]">
      <div className="text-white">
        <div className="flex lg:flex-row flex-col gap-[40px] lg:gap-[80px]">
          <div>
            <h3 className="text-[14px] lg:text-[16px] text-[#b1b1b1] font-interFont font-medium">
              Get In Touch
            </h3>
            <h2 className="text-[30px] lg:text-[40px] font-bold mt-2 font-dmFont">
              Let’s Talk For your
            </h2>
            <h2 className="text-[#c9f31d] text-[30px] lg:text-[40px] font-bold font-dmFont">
              Next Projects
            </h2>
            <p className="text-[14px] lg:text-[16px] text-[#b1b1b1] lg:w-[410px] mt-8 mb-10 font-interFont font-medium">
              Let's collaborate on your next project and turn your vision into a
              beautifully attractive reality. With my expertise in frontend
              development, we can achieve outstanding results together.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <div className="bg-[#c9f31d] rounded-full p-2">
                  <FaCheck className="text-black" />
                </div>
                <p className="text-[16px] lg:text-[18px] font-interFont">
                  2+ Years Of Experience
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="bg-[#c9f31d] rounded-full p-2">
                  <FaCheck className="text-black" />
                </div>
                <p className="text-[16px] lg:text-[18px] font-interFont">
                  Professional Web Designer
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="bg-[#c9f31d] rounded-full p-2">
                  <FaCheck className="text-black" />
                </div>
                <p className="text-[16px] lg:text-[18px] font-interFont">
                  Front-End Developer
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="bg-[#c9f31d] rounded-full p-2">
                  <FaCheck className="text-black" />
                </div>
                <p className="text-[16px] lg:text-[18px] font-interFont">
                  Custom Design Support
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
                <div>
                  <div>
                    <h2 className="text-[16px] lg:text-[18px] mb-3 font-medium font-dmFont">
                      Full Name{" "}
                      <span className="text-[#c9f31d] text-[23px]">*</span>
                    </h2>

                    <input
                      className="bg-[#1f1f1f] text-[14px] lg:text-[16px] lg:px-[25px] px-[20px] py-[14px] lg:py-[18px] border-[1px] border-gray-700  rounded-[15px] w-full font-interFont"
                      type="text"
                      placeholder="Your Name Here"
                      required
                    />
                  </div>
                  <div>
                    <h2 className="text-[16px] lg:text-[18px] mb-3 mt-[20px] lg:mt-[35px] font-medium font-dmFont">
                      Phone Number{" "}
                      <span className="text-[#c9f31d] text-[23px]">*</span>
                    </h2>

                    <input
                      className="bg-[#1f1f1f] text-[14px] lg:text-[16px] lg:px-[25px] px-[20px] py-[14px] lg:py-[18px] border-[1px] border-gray-700 rounded-[15px] w-full font-interFont"
                      type="text"
                      placeholder="+880 (123) 456 88"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className="text-[16px] lg:text-[18px] mb-3 font-medium font-dmFont">
                      Email Address{" "}
                      <span className="text-[#c9f31d] text-[23px]">*</span>
                    </h2>

                    <input
                      className="bg-[#1f1f1f] text-[14px] lg:text-[16px] lg:px-[25px] px-[20px] py-[14px] lg:py-[18px] border-[1px] border-gray-700 rounded-[15px] w-full font-interFont"
                      type="email"
                      placeholder="support@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <h2 className="text-[16px] lg:text-[18px] mb-3 mt-[20px] lg:mt-[35px] font-medium font-dmFont">
                      Subject{" "}
                      <span className="text-[#c9f31d] text-[23px]">*</span>
                    </h2>

                    <input
                      className="bg-[#1f1f1f] text-[14px] lg:text-[16px] lg:px-[25px] px-[20px] py-[14px] lg:py-[18px] border-[1px] border-gray-700  rounded-[15px] w-full font-interFont"
                      type="text"
                      placeholder="I would like to discussed"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-[16px] lg:text-[18px] mt-[20px] lg:mt-[35px] mb-3 font-medium font-dmFont">
                  Message <span className="text-[#c9f31d] text-[23px]">*</span>
                </h2>
                <textarea
                  name="Message"
                  placeholder="Write message"
                  className="bg-[#1f1f1f] rounded-[15px] mb-4 px-8 py-4 border-[1px] border-gray-700  w-full"
                  cols="30"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button className="text-[14px] lg:text-[16px] bg-[#c9f31d] font-semibold px-[20px] py-[14px] lg:px-[30px] lg:py-[14px] rounded-[15px] font-interFont text-black flex items-center">
                Send Us Message <RiArrowRightSLine size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetTalks;
