import Header from "./header/header";
import Services from "./services/Services";
import WorkPlan from "./work-plan/WorkPlan";

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div className="max-w-screen-xl mx-auto">
        <Services />
        <WorkPlan />
      </div>
    </div>
  );
};

export default Home;
