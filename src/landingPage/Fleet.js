import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

let planes = [ 
    {
        img: "bg-[url(./assets/imgs/Aircraft/cessna.jpg)]",
        title: "CESSNA 208 CARAVAN"
    },
    {
        img: "bg-[url(./assets/imgs/Aircraft/beechcraft.jpg)]",
        title: "BEECHCRAFT B1900D"
    },
    {
        img: "bg-[url(./assets/imgs/Aircraft/atr.jpg)]",
        title: "ATR 72-600"
    },
    {
        img: "bg-[url(./assets/imgs/Aircraft/cessna.jpg)]",
        title: "CESSNA 208 CARAVAN"
    },
    {
        img: "bg-[url(./assets/imgs/Aircraft/beechcraft.jpg)]",
        title: "BEECHCRAFT B1900D"
    },
    {
        img: "bg-[url(./assets/imgs/Aircraft/atr.jpg)]",
        title: "ATR 72-600"
    },
]

function Plane({img, title}) {
  return (
    <motion.div
      className="rounded-[2em] drop-shadow-xl bg-white mr-10"
      style={{
        cursor: "grab",
      }}
    >
      <div className={img + " rounded-t-[2em] w-[500px] h-[300px] bg-center bg-cover"} />
      <h3 className="text-darkblue text-[1.6rem] font-semibold py-8 tracking-tight ">
        {title}
      </h3>
    </motion.div>
  );
}

const Fleet = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    let endPoint = carousel.current.scrollWidth - carousel.current.offsetWidth;
    setWidth(endPoint+40);
  }, []);

  return (
    <section className="text-center">
      <div className="container mx-auto flex flex-col items-start th:mt-20">
        <div className="content flex flex-col w-full items-center">
          <h1 className="text-5xl text-darkblue font-semibold tracking-tight my-4">
            Fleet
          </h1>
          <p className="text-[1rem] text-grayonwhite mb-5 mt-1 leading-[1.8rem]  w-[90%] lg:w-[28rem] ">
            Travira Air is totally committed to supporting our clients by
            providing safe and reliable solutions for their air charter needs.
          </p>
        </div>
      </div>
      <motion.div ref={carousel} className="py-8 max-w-[95w] overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -(width) }}
          className="flex left-[5%] relative"
        >
            {planes.map( ({img, title}, key) => <Plane img={img} title={title} key={key} />)}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Fleet;
