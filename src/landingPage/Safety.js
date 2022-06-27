import React from "react";
import { Fade } from "react-reveal";

function ListElement({ title }) {
  return <li className="text-base text-darkblue font-bold mb-3">{title}</li>;
}

const Safety = () => {
  const list1 = [
    "MANAGEMENT COMMITMENT",
    "IT-BASED TRACKING AND MONITORING",
    "INDEPENDENT VERIFICATION",
    "INTERNATIONAL ACCREDITATION",
    "BEHIND THE SCENES",
  ];
  const list2 = [
    "GLOBAL OUTLOOK",
    "PILOTS AND CREW",
    "MEDICAL FACILITIES",
    "AIRCRAFT FLEET",
  ];

  return (
    <div id="safety">
      <section className="bg-white flex py-20 th:py-26 sm:pb-0 sm:items-center">
        <div className="container mx-auto">
          <div className="grid th:grid-cols-2 gap-10 th:gap-20 sm:grid-cols-1 ">
            <Fade left>
              <div className="content text-center th:text-left order-last th:order-1 flex flex-col items-center th:items-start">
                <h1 className="text-5xl text-darkblue font-semibold tracking-tight my-4">
                  Safety
                </h1>
                <p className="text-[1rem] text-grayonwhite mb-5 mt-1 leading-[1.8rem] w-[90%] lg:w-[28rem]">
                  It is a matter of pride for Travira Air that we have one of
                  the best air charter safety records in the region
                </p>
                <div className="lists flex-col flex th:flex-row th:gap-[30px] lg:gap-[80px] mb-8 th:mb-20 ">
                  <ul>
                    {list1.map((val, key) => (
                      <ListElement title={val} key={key}></ListElement>
                    ))}
                  </ul>
                  <ul>
                    {list2.map((val, key) => (
                      <ListElement title={val} key={key}></ListElement>
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
            <div className="bg-[url('./assets/imgs/service-image.jpg')] th:order-2 rounded-3xl h-[400px] w-[100%] mx-auto lg:h-auto bg-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;
