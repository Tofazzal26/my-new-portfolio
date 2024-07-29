import { Outlet } from "react-router-dom";
import bg from "../../public/background.png";
import Headers from "../Components/Headers/Headers";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
