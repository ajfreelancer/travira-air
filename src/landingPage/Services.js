import React from "react";
import styled from "styled-components";
import serviceImage from "../assets/imgs/service-image.jpg";

const Div = styled.div`
  background-color: #0e1035;
  color: white;
  padding-bottom: 5em;

  .container {
    width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-gap: 7em;
  }

  .content {
    margin-bottom: 5em;
  }

  .image {
    background-image: url(${serviceImage});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1.5em;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 600;
    margin: 0 0 0.5em 0;
  }

  .blue {
    color: #2f80ed;
  }

  p {
    font-size: 1rem;
    line-height: 1.7em;
    margin-bottom: 1.4em;
    width: 73%;
    color: #bdbbbb;
  }

  .lists {
    display: flex;
    justify-content: space-between;
    width: 500px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .service-item {
    font-weight: 500;
    font-size: 1rem;
    list-style: none;
    margin: 1em 0;
  }

  @media (max-width: 1366px) {
    .container {
      width: 90%;
    }
  }

  @media (max-width: 1199.98px) {
    .container {
      grid-gap: 4em;
    }
  }

  @media (max-width: 1000px) {
    .container {
      grid-template-columns: 1fr;
      grid-gap: 2.5em;
      text-align: center;
    }
    .image {
      height: 500px;
    }
    h2 {
      margin-bottom: 0;
    }
    p {
      width: 80%;
      margin: 0.8em auto;
    }
    .lists {
      flex-direction: column;
      width: fit-content;
      margin: auto;
    }
  }

  @media (max-width: 500px) {
    p {
      width: 90%;
    }
  }
`;

const Services = () => {
  return (
    <section>
      <Div id="service">
        <div className="container">
          <div className="image"></div>
          <div className="content">
            <h2>
              Our <span className="blue">Service</span>
            </h2>
            <p>
              Travira Air is totally committed to supporting our clients by
              providing safe and reliable solutions for their air charter needs.
            </p>
            <div className="lists">
              <ul>
                <li className="service-item">SCHEDULED & SPOT CHARTER</li>
                <li className="service-item">LONGTERM CONTRACT</li>
                <li className="service-item">MEDICAL EVACUATION FLIGHT</li>
                <li className="service-item">AIRCRAFT MANAGEMENT</li>
              </ul>
              <ul>
                <li className="service-item">AIRCRAFT MRO</li>
                <li className="service-item">ONSHORE</li>
                <li className="service-item">OFFSHORE</li>
              </ul>
            </div>
          </div>
        </div>
      </Div>
    </section>
  );
};

export default Services;
