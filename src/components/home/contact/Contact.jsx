import contactImg from "../../../assets/images/contactImg.svg";
import nameIcon from "../../../assets/icons/nameIcon.svg";
import phoneIcon from "../../../assets/icons/phoneIcon.svg";
import emailIcon from "../../../assets/icons/emailIcon.svg";

import Headings from "../../../common/Headings";

import { useForm, ValidationError } from "@formspree/react";


import "./Contact.scss";
import Swal from "sweetalert2";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgejdpoq");
  if (state.succeeded) {
    return (
      <h2 className="text-lg font-bold text-red-800">
        Thank you for signing up!
      </h2>
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'Your Form has been sent',
      //   showConfirmButton: false,
      //   timer: 1500
      // })
    );
  }

  return (
    <div className="mx-5 pt-[71px]" id="contact">
      <Headings heading="Let’s Have a Coffee" blurHeading="CONTACT" />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col mt-12 gap-[50px] lg:flex-row-reverse">
          <img src={contactImg} className="w-[560px]" />

          <div className="card lg:w-[600px]">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="card-form-title lg:text-4xl">
                LET'S HAVE A COFFEE
              </h1>
              <div className="form-control">
                <label className="label mt-5">
                  <span className="label-text lg:text-lg text-xs">
                    full name
                  </span>
                </label>
                <div className="flex gap-2 card-name-field">
                  <img src={nameIcon} alt="" />
                  <input
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center lg:gap-7 gap-4 mt-5">
                <div className="form-control">
                  <label className="label">
                    <span className="lg:text-lg text-[10px]">Phone Number</span>
                  </label>
                  <div className="flex gap-2 card-name-field">
                    <img src={phoneIcon} alt="" />
                    <input
                      id="phone"
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="lg:text-lg text-[10px]">Email</span>
                  </label>
                  <div className="flex gap-2 card-name-field">
                    <img src={emailIcon} alt="" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-control">
                <label className="label mt-5">
                  <span className="lg:text-lg text-xs">select option</span>
                </label>
                <div className="flex lg:gap-5 gap-2 mt-3">
                  <div className="flex items-center gap-2">
                    <input
                      id="website"
                      type="checkbox"
                      name="website"
                      className="lg:w-4 w-2.5"
                    />
                    <span className="card-checkbox-text lg:text-sm text-[10px]">
                      Website
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="mobile-app"
                      type="checkbox"
                      name="mobile-app"
                      className="lg:w-4 w-2.5"
                    />
                    <span className="card-checkbox-text lg:text-sm text-[10px]">
                      Mobile App
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="design"
                      type="checkbox"
                      name="design"
                      className="lg:w-4 w-2.5"
                    />
                    <span className="card-checkbox-text lg:text-sm text-[10px]">
                      Design
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="others"
                      type="checkbox"
                      name="others"
                      className="lg:w-4 w-2.5"
                    />
                    <span className="card-checkbox-text lg:text-sm text-[10px]">
                      Others
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-control mt-5">
                <label className="label">
                  <span className="lg:text-lg text-xs">Subject</span>
                </label>
                <div className="flex gap-2 card-name-field">
                  <input type="name" placeholder="Subject" required />
                </div>
              </div>

              <div className="form-control mt-5">
                <label className="label">
                  <span className="lg:text-lg text-xs">Enter your message</span>
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
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="card-btn py-3"
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
