import { Outlet } from "react-router-dom";
import bg from "../../public/bg2.png";
import Headers from "../Components/Headers/Headers";

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
      <h1>Home Page</h1>
    </div>
  );
};

export default Root;
