import Banner from "../../Components/Banner/Banner";
import MyExperience from "../../Components/MyExperience/MyExperience";
import MyQuality from "../../Components/MyQuality/MyQuality";
import MyRecentWorks from "../../Components/MyRecentWorks/MyRecentWorks";

const Home = () => {
  return (
    <div className="px-3 lg:px-0">
      <div className="container mx-auto">
        <div className="mt-12">
          <Banner />
        </div>
        <div className="mt-[95px]">
          <MyQuality />
          <MyRecentWorks />
          <MyExperience />
        </div>
      </div>
    </div>
  );
};

export default Home;
