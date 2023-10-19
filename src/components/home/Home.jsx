import Contact from "./contact/Contact";
import FAQ from "./faq/FAQ";
import Footer from "./footer/Footer";
import Header from "./header/header";
import LatestWorks from "./latest-works/LatestWorks";
import Services from "./services/Services";
import WorkPlan from "./work-plan/WorkPlan";

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div className="lg:mx-[80px]">
        <Services />
        <WorkPlan />
        <LatestWorks />
        <FAQ />
        <Contact />
      </div>
      <div className="divider lg:mt-[430px]"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
