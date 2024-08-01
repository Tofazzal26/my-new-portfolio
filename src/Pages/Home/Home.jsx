import Banner from "../../Components/Banner/Banner";
import LatestBlogs from "../../Components/LatestBlogs/LatestBlogs";
import LetTalks from "../../Components/LetTalks/LetTalks";
import MyClients from "../../Components/MyClients/MyClients";
import MyExperience from "../../Components/MyExperience/MyExperience";
import MyQuality from "../../Components/MyQuality/MyQuality";
import MyRecentWorks from "../../Components/MyRecentWorks/MyRecentWorks";
import MySkills from "../../Components/MySkills/MySkills";
import ProjectCompletes from "../../Components/ProjectCompletes/ProjectCompletes";

const Home = () => {
  return (
    <div className="px-3 lg:px-0">
      <div className="container mx-auto">
        <div className="mt-[55px] lg:mt-[60px]">
          <Banner />
        </div>
        <div className="mt-[40px] lg:mt-[160px]">
          <MyQuality />
          <MyRecentWorks />
          <MyExperience />
          <MySkills />
          <MyClients />
          <ProjectCompletes />
          <LatestBlogs />
          <LetTalks />
        </div>
      </div>
    </div>
  );
};

export default Home;
