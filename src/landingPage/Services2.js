import React from "react";
import { Fade } from "react-reveal";

const Services2 = () => {
  return (
    <section className="bg-darkblue flex py-12 sm:pt-0 pb-16 th:pb-20 sm:items-center">
      <div className="container mx-auto">
        <div className="grid th:grid-cols-2 gap-10 th:gap-20 sm:grid-cols-1 ">
          <div className="bg-[url('./assets/imgs/service-image.jpg')] rounded-3xl h-[400px] w-[100%] mx-auto lg:h-auto bg-cover"></div>
          <Fade right>
            <div className="content text-center th:text-left order-last th:order-1 flex flex-col items-center th:items-start">
              <h1 className="text-5xl text-white font-semibold tracking-tight my-4">
                Our <span className="text-lightblue">Service</span>
              </h1>
              <p className="text-[1rem] text-grayonblue mb-5 mt-1 leading-[1.8rem] w-[90%] lg:w-[28rem]">
                Travira Air is totally committed to supporting our clients by
                providing safe and reliable solutions for their air charter
                needs.
              </p>
              <div className="lists flex-col flex th:flex-row th:gap-[50px] lg:gap-[80px] mb-0 th:mb-20 ">
                <ul>
                  <li className="text-base text-white font-semibold mb-3">
                    SCHEDULED & SPOT CHARTER
                  </li>
                  <li className="text-base text-white font-semibold mb-3">
                    LONGTERM CONTRACT
                  </li>
                  <li className="text-base text-white font-semibold mb-3">
                    MEDICAL EVACUATION FLIGHT
                  </li>
                  <li className="text-base text-white font-semibold mb-3">
                    AIRCRAFT MANAGEMENT
                  </li>
                </ul>
                <ul>
                  <li className="text-base text-white font-semibold mb-3">
                    AIRCRAFT MRO
                  </li>
                  <li className="text-base text-white font-semibold mb-3">
                    ONSHORE
                  </li>
                  <li className="text-base text-white font-semibold mb-3">
                    OFFSHORE
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Services2;
