import React from "react";
import styled from "styled-components";
import heroBackground from "../assets/imgs/Hero-Section.jpg";

const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 800px;
  width: 1200px;
  margin: 0 auto 102px;
  top: 102px;

  .background {
    position: absolute;
    background-image: url(${heroBackground});
    height: 100%;
    width: 100%;
    z-index: -1;
    background-position: right;
    background-size: cover;
  }

  .container {
    width: 100%;
  }

  .content {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 3.9rem;
    font-weight: 800;
    line-height: 1.1em;
    letter-spacing: -0.03em;
    margin-bottom: 0.25em;
  }

  .blue {
    color: #1369dd;
  }

  .hero-paragraph {
    font-size: 1rem;
    line-height: 1.7em;
    margin-top: 1.2em;
    margin-bottom: 1.5em;
    width: 65%;
    color: #676767;
  }

  .hero-CTA {
    background-color: #0e1035;
    color: white;
    border: none;
    border-radius: 15px;
    padding: 1em 2.5em;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 0.8em;
    margin-bottom: 1.5em;
    width: fit-content;

    &:hover {
      background-color: #2f80ed;
    }
  }

  @media (max-width: 1366px) {
    height: 650px;

    .background {
      width: 98vw;
    }

    .container {
      width: 90vw;
    }
  }

  @media (max-width: 1200px) {
    width: 96vw;
    h1 {
      font-size: 3.3rem;
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    top: 40px;

    .background {
      position: relative;
      height: 509px;
      background-size: cover;
      background-repeat: no-repeat;
      margin: auto;
    }

    .container {
      width: 80%;
      margin: auto;
    }

    .content {
      display: flex;
      align-items: center;
      text-align: center;
      margin: auto;
      margin-top: -50px;
      width: 80%;
    }

    .hero-paragraph {
      width: 100%;
    }

    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 525px) {
    .content {
      width: 95%;
    }
    .background {
      height: 400px;
      margin-top: 10px;
      margin-bottom: 30px;
    }
  }
`;

const HeroSection = () => {
  return (
    <section>
      <Div id="home">
        <div className="background"></div>
        <div className="container">
          <div className="content">
            <h1 className="hero-heading">
              <span className="blue">World class</span> charter and maintenance
              flights
            </h1>
            <p className="hero-paragraph">
              Our goal is simply to offer the highest standards of
              professionalism and service as measured by our safety record,
              dispatch reliability and customer satisfaction.
            </p>
            <button className="hero-CTA">Booking Now</button>
          </div>
        </div>
      </Div>
    </section>
  );
};

export default HeroSection;
