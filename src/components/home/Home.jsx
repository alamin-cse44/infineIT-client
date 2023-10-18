import FAQ from "./faq/FAQ";
import Header from "./header/header";
import Services from "./services/Services";
import WorkPlan from "./work-plan/WorkPlan";

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div className="mx-[20px]">
        <Services />
        <WorkPlan />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
