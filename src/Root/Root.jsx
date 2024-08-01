import { Outlet } from "react-router-dom";

import Headers from "../Components/Headers/Headers";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-[#121212] ">
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
