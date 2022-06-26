import React from "react";

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
    <div className="rounded-[3rem] bg-white shadow-2xl overflow-hidden p-12 md:p-0 1144px:p-12 md:flex 1144px:block md:gap-10">
      <div className="flex items-center gap-6 md:bg-darkblue md:p-12 1144px:bg-white 1144px:p-0">
        <div className={"rounded-full " + img + " w-[100px] h-[100px]"} />
        <div className="flex flex-col gap-1">
          <div className="text-[1.4rem] w-[9rem] font-bold tracking-tight md:text-white 1144px:text-darkblue">
            {name}
          </div>
          <div className="text-[.9rem] font-medium text-grayonwhite md:text-grayonblue 1144px:text-grayonwhite">
            {place}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:justify-center">
        <p className="text-darkblue font-medium text-[1.2rem] mt-6 md:m-0 1144px:mt-6 tracking-tight w-[95%] 1144px:w-[25rem] th:w-[30rem]">
          {testimonial}
        </p>
        <img
          src={require("../assets/imgs/Testimonials/star.png")}
          className="h-[25px] mt-3 w-fit"
          alt=""
        />
      </div>
    </div>
  );
}

const Testimonial = () => {
  return (
    <section className='my-16 w-full bg-[url("./assets/imgs/testimonial-background.png")] th:bg-contain bg-no-repeat bg-right th:h-[1000px] flex flex-col'>
      <div className="mt-28 container mx-auto flex flex-col">
        <h1 className="font-bold text-[2.5rem] lg:text-[3rem] mx-auto lg:mx-0  text-center lg:text-left w-[90%] lg:w-[30rem] tracking-tight leading-tight">
          This is what clients say about us
        </h1>
        <div className="flex my-16 gap-12 flex-col 1144px:flex-row">
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
