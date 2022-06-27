import React from "react";
import { Slide } from "react-reveal";

let testimonials = [
  {
    img: "bg-[url('./assets/imgs/Testimonials/p1.png')]",
    name: "Ade Pranaya",
    place: "PT Pertamina",
    testimonial: "Thank you Travira air I'm very happy, my work goes smoothly",
  },
  {
    img: "bg-[url('./assets/imgs/Testimonials/p2.png')]",
    name: "Efran Adiyatma",
    place: "PT Petronas",
    testimonial:
      "Thank you, I was helped by being there travira air The flight is very comfortable and safe.",
  },
];

function UserTestimonial({ img, name, place, testimonial }) {
  return (
    <Slide bottom>
      <div className="rounded-[3rem] bg-white shadow-2xl overflow-hidden p-12 md:p-0 1144px:p-12 md:flex 1144px:block md:gap-10 text-center 1144px:text-left">
        <div className="flex flex-col items-center 1144px:items-start gap-6 md:bg-darkblue md:p-12 1144px:bg-white 1144px:p-0">
          <div className={"rounded-full " + img + " w-[100px] h-[100px]"} />
          <div className="flex flex-col gap-[0.1em]">
            <div className="text-[1.4rem] w-[9rem] th:w-[12rem] font-bold tracking-tight md:text-white 1144px:text-darkblue leading-tight">
              {name}
            </div>
            <div className="text-[.9rem] font-medium text-grayonwhite md:text-grayonblue 1144px:text-grayonwhite">
              {place}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:justify-center items-center md:items-start">
          <p className="text-darkblue font-medium text-[1.2rem] mt-6 md:m-0 1144px:mt-6 tracking-tight w-[95%] 1144px:w-[25rem] th:w-[30rem] md:text-left">
            {testimonial}
          </p>
          <img
            src={require("../assets/imgs/Testimonials/star.png")}
            className="h-[25px] mt-3 w-fit"
            alt=""
          />
        </div>
      </div>
    </Slide>
  );
}

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className='my-16 w-full bg-[url("./assets/imgs/testimonial-background.png")] bg-cover bg-no-repeat bg-right flex flex-col pb-[6em]'
    >
      <div className="mt-16 container mx-auto flex flex-col">
        <h1 className="font-bold text-[2rem] xl:text-[3rem] mx-auto xl:mx-0  text-center xl:text-left w-[90%] xl:w-[30rem] tracking-tight leading-tight">
          This is what clients say about us
        </h1>
        <div className="flex my-12 gap-12 flex-col justify-center xl:justify-start 1144px:flex-row">
          {testimonials.map(({ img, name, place, testimonial }, key) => (
            <UserTestimonial
              key={key}
              img={img}
              name={name}
              place={place}
              testimonial={testimonial}
            ></UserTestimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
