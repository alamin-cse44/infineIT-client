import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Headings from "../../../common/Headings";

import "./FAQ.scss";

const FAQ = () => {
  const [show, setShow] = useState("one");

  const handleDisplay = (data) => {
    setShow(data);
  };

  return (
    <div className="lg:mx-[140px] mx-5 lg:mt-[170px] pt-20" id="faq">
      <Headings
        heading="FREQUENTLY ASKED QUESTIONS"
        blurHeading="FREQUENTLY ASKED QUESTIONS"
      />

      <div className="flex flex-col gap-10 mt-12">
        <div className="faq-box lg:px-10 lg:py-8 p-4">
          <div className="flex justify-between">
            <h2
              className="faq-box-title lg:text-2xl text-base cursor-pointer"
              onClick={() => handleDisplay("one")}
            >
              WHO is Infine it Solution ?
            </h2>
            {show === "one" ? (
              <FaMinus
                onClick={() => handleDisplay("")}
                className="cursor-pointer"
              />
            ) : (
              <FaPlus
                onClick={() => handleDisplay("one")}
                className="cursor-pointer"
              />
            )}
          </div>
          {show === "one" && (
            <p className="mt-9 me-8 faq-box-description lg:text-xl text-sm text-justify">
              INFINE IT SOLUTION is a software development company who develop
              softwares from scratch to comprehensive product. We are a team of
              talented people with both deep knowledge and strong skills in
              developing softwares. We mainly cooperate with E-commerce,
              FinTech, SaaS & CRM based clients.
            </p>
          )}
        </div>

        <div className="faq-box lg:px-10 lg:py-8 p-4">
          <div className="flex justify-between">
            <h2
              className="faq-box-title lg:text-2xl text-base cursor-pointer"
              onClick={() => handleDisplay("two")}
            >
              WHAT technologies do you use ?
            </h2>
            {show === "two" ? (
              <FaMinus
                onClick={() => handleDisplay("")}
                className="cursor-pointer"
              />
            ) : (
              <FaPlus
                onClick={() => handleDisplay("two")}
                className="cursor-pointer"
              />
            )}
          </div>
          {show === "two" && (
            <p className="mt-9 me-8 faq-box-description lg:text-xl text-sm text-justify">
              INFINE IT SOLUTION is a software development company who develop
              softwares from scratch to comprehensive product. We are a team of
              talented people with both deep knowledge and strong skills in
              developing softwares. We mainly cooperate with E-commerce,
              FinTech, SaaS & CRM based clients.
            </p>
          )}
        </div>

        <div className="faq-box lg:px-10 lg:py-8 p-4">
          <div className="flex justify-between">
            <h2
              className="faq-box-title lg:text-2xl text-base cursor-pointer"
              onClick={() => handleDisplay("three")}
            >
              What details should I provide in a project specification ?
            </h2>
            {show === "three" ? (
              <FaMinus
                onClick={() => handleDisplay("")}
                className="cursor-pointer"
              />
            ) : (
              <FaPlus
                onClick={() => handleDisplay("three")}
                className="cursor-pointer"
              />
            )}
          </div>
          {show === "three" && (
            <p className="mt-9 me-8 faq-box-description lg:text-xl text-sm text-justify">
              INFINE IT SOLUTION is a software development company who develop
              softwares from scratch to comprehensive product. We are a team of
              talented people with both deep knowledge and strong skills in
              developing softwares. We mainly cooperate with E-commerce,
              FinTech, SaaS & CRM based clients.
            </p>
          )}
        </div>

        <div className="faq-box lg:px-10 lg:py-8 p-4">
          <div className="flex justify-between">
            <h2
              className="faq-box-title lg:text-2xl text-base cursor-pointer"
              onClick={() => handleDisplay("four")}
            >
              What will happen after first contact?
            </h2>
            {show === "four" ? (
              <FaMinus
                onClick={() => handleDisplay("")}
                className="cursor-pointer"
              />
            ) : (
              <FaPlus
                onClick={() => handleDisplay("four")}
                className="cursor-pointer"
              />
            )}
          </div>
          {show === "four" && (
            <p className="mt-9 me-8 faq-box-description lg:text-xl text-sm text-justify">
              INFINE IT SOLUTION is a software development company who develop
              softwares from scratch to comprehensive product. We are a team of
              talented people with both deep knowledge and strong skills in
              developing softwares. We mainly cooperate with E-commerce,
              FinTech, SaaS & CRM based clients.
            </p>
          )}
        </div>

        <div className="faq-box lg:px-10 lg:py-8 p-4">
          <div className="flex justify-between">
            <h2
              className="faq-box-title lg:text-2xl text-base cursor-pointer"
              onClick={() => handleDisplay("five")}
            >
              We have an idea for a product. What should we do next ?
            </h2>
            {show === "five" ? (
              <FaMinus
                onClick={() => handleDisplay("")}
                className="cursor-pointer"
              />
            ) : (
              <FaPlus
                onClick={() => handleDisplay("five")}
                className="cursor-pointer"
              />
            )}
          </div>
          {show === "five" && (
            <p className="mt-9 me-8 faq-box-description lg:text-xl text-sm text-justify">
              INFINE IT SOLUTION is a software development company who develop
              softwares from scratch to comprehensive product. We are a team of
              talented people with both deep knowledge and strong skills in
              developing softwares. We mainly cooperate with E-commerce,
              FinTech, SaaS & CRM based clients.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
