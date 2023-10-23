import illustrationImg from "../../../assets/images/Illustration.svg";
import mobileAppIcon from "../../../assets/icons/mobileAppIcon.svg";
import webAppIcon from "../../../assets/icons/webAppIcon.svg";
import uiDesignIcon from "../../../assets/icons/uiDesignIcon.svg";
import ServicesShow from "./ServicesShow";

const Services = () => {
  return (
    <div className="mx-2 pt-20" id="services">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={illustrationImg} className="w-[900px]" alt="" />
          <div>
            <h1 className="lg:text-6xl font-bold mb-10 text-[#0D71BA]">What We Do?</h1>
            <ServicesShow
              img={mobileAppIcon}
              title="Mobile Application"
              description="Building mobile applications is never easy. P2P lending app ? Logistic
          App ? E-Commerce App ? We have done them all. Done them all well. Done
          them all fast."
            ></ServicesShow>
            <ServicesShow
              img={webAppIcon}
              title="Web Application"
              description="We can build any web applications you need. 
              A personal blog ? Company Profile ? E-commerce ? 
              or any specific functionalities ? We got you covered! 
              We have a strong team of web developers that can 
              follow your stack and needs."
            ></ServicesShow>
            <ServicesShow
              img={uiDesignIcon}
              title="Logo,ui/ux design"
              description="All things are designed. A few things are designed well. 
              We try to elevate your ideas with great UI/UX design, 
              suited to your taste, addressing the right pain points."
            ></ServicesShow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
