import contactImg from "../../../assets/images/contactImg.svg";
import nameIcon from "../../../assets/icons/nameIcon.svg";
import phoneIcon from "../../../assets/icons/phoneIcon.svg";
import emailIcon from "../../../assets/icons/emailIcon.svg";

import "./Contact.scss";
import Headings from "../../../common/Headings";

const Contact = () => {
  return (
    <div className="mx-5 mt-[71px]">
      <Headings heading="Let’s Have a Coffe" blurHeading="CONTACT"/>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col mt-12 gap-[50px] lg:flex-row-reverse">
          <img src={contactImg} className="w-[560px]" />

          <div className="card lg:w-[600px] w-[100%]">
            <form className="card-body">
              <h1 className="card-form-title lg:text-4xl">LET'S HAVE A COFFEE</h1>
              <div className="form-control">
                <label className="label mt-5">
                  <span className="label-text">full name</span>
                </label>
                <div className="flex gap-2 card-name-field">
                  <img src={nameIcon} alt="" />
                  <input type="name" placeholder="Full Name" required />
                </div>
              </div>

              <div className="flex gap-8 mt-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <div className="flex gap-2 card-name-field">
                    <img src={phoneIcon} alt="" />
                    <input type="name" placeholder="Phone" required />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <div className="flex gap-2 card-name-field">
                    <img src={emailIcon} alt="" />
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
              </div>

              <div className="form-control">
                <label className="label mt-5">
                  <span className="label-text">select option</span>
                </label>
                <div className="flex gap-5">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked=""
                      className="card-checkbox"
                    />
                    <span className="card-checkbox-text">Website</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked=""
                      className="card-checkbox"
                    />
                    <span className="card-checkbox-text">Mobile App</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked=""
                      className="card-checkbox"
                    />
                    <span className="card-checkbox-text">Design</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked=""
                      className="card-checkbox"
                    />
                    <span className="card-checkbox-text">Others</span>
                  </div>
                </div>
              </div>

              <div className="form-control mt-5">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <div className="flex gap-2 card-name-field">
                  <input type="name" placeholder="Subject" required />
                </div>
              </div>

              <div className="form-control mt-5">
                <label className="label">
                  <span className="label-text">Enter your message</span>
                </label>
                <div className="flex gap-2 card-name-field">
                  <textarea
                    rows="4"
                    type="name"
                    placeholder="Text...."
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="card-btn py-3">send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
