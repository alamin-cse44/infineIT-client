import logo from "../../../assets/icons/logo.svg";
import facebookIcon from "../../../assets/icons/facebookIcon.svg";
import instagramIcon from "../../../assets/icons/instagramIcon.svg";
import linkedinIcon from "../../../assets/icons/linkedinIcon.svg";
import twitterIcon from "../../../assets/icons/twitterIcon.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="lg:mx-[140px] my-16 mx-5">
      <div className="lg:flex gap-[140px]">
        <div className="w-[260px] mb-6">
          <img src={logo} alt="" />
          <p className="mt-5 infine-it-text">
            INFINE IT SOLUTION is an uprising IT support provider with a bunch
            of people from different fields of expertise
          </p>
          <div className="flex gap-4 mt-8">
            <img src={facebookIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={linkedinIcon} alt="" />
            <img src={twitterIcon} alt="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-auto ">
          <div className="infine-it mb-6">
            <h2>INfine it</h2>
            <div className="mt-6">
              <a href="">About us</a>
              <a href="" className="my-4">
                Contact us
              </a>
              <a href="">Faq</a>
            </div>
          </div>
          <div className="infine-it mb-6">
            <h2>Legal</h2>
            <div className="mt-6">
              <a href="">Terms and Condition</a>
              <a href="" className="my-4">
              Privacy Policy
              </a>
            </div>
          </div>
          <div className="infine-it mb-6">
            <h2>Contact</h2>
            <div className="mt-6">
              <a href="">support@infineitsolution.com</a>
              <a href="" className="my-4">
              Los Angeles, 359  Hidden Valley Road
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 infine-it-copyright">© 2023. All rights reserved</p>
    </div>
  );
};

export default Footer;
