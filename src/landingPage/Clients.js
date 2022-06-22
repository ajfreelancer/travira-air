import React from "react";
import styled from "styled-components";
import logo1 from "../assets/imgs/Testimoni/logo (4).png";
import logo2 from "../assets/imgs/Testimoni/logo (2).png";
import logo3 from "../assets/imgs/Testimoni/logo (3).png";
import logo4 from "../assets/imgs/Testimoni/logo (1).png";

const Div = styled.div`
  
  background-color: #0E1035;

  .container {
    width: 1200px;
    margin: auto;
    padding: 3.5em 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
  }

  h3{
    color: white;
    font-weight: 400;
    font-size: 1rem;
  }

  .boldBlue{
    color: #2F80ED;
    font-weight: 600;
  }

  .clientLogos{
    width: 100%;
    margin: 2em auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img:nth-child(1){
      height: 5rem;
    }
    img:nth-child(2){
      height: 2.5rem;
    }
    img:nth-child(3){
      height: 3.5rem;
    }
    img:nth-child(4){
      height: 3rem;
    }
  }

  @media (max-width: 1366px){
  	.container{
      width: 90%;
    }
  }

  @media (max-width: 1199.98px){

    .clientLogos{
      width: 100%;
    }
  }

  @media (max-width: 1000px){

    .container{
      margin-top: 4em;
    }

  	.clientLogos{
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      grid-gap: 2.5em;
      width: fit-content;
      margin: 3em auto;

      img:nth-child(1){
        order: 4;
      }
    }
  }

  @media (max-width: 600px){
  	.clientLogos{
      grid-template-columns: 1fr;
      margin: 2em auto 0;
    }
  }
`;

const Clients = () => {
  return (
    <section>
      <Div>
        <div className="container">
          <h3>
            <span className="boldBlue">Companies</span> that have used our services
          </h3>
          <div className="clientLogos">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </div>
        </div>
      </Div>
    </section>
  );
};

export default Clients;
