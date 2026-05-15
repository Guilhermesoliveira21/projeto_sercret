import styled from "styled-components";
import { Card } from "../ui/card";
import { carta } from "../../mocks/carta.js";
import { CardContainer } from "../CardHistorys";
import { useState } from "react";

export const Carta = () => {
  const [position, setPosition] = useState({
    top: "0px",
    left: "0px",
  });

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 200) + "px";

    const randomLeft = Math.floor(Math.random() * 200) + "px";

    setPosition({
      top: randomTop,
      left: randomLeft,
    });
  };

  return (
    <>
      <CardContainer>
        <div style={{ padding: ".6rem 1rem" }}>
          <Paragrafo>{carta.title}</Paragrafo>
        </div>
      </CardContainer>
      <CardNamoro>
        <Paragrafo>Quer Namorar comigo?</Paragrafo>
        <div className="container">
          <button>Sim</button>
          <button>Não</button>
        </div>
      </CardNamoro>
    </>
  );
};

export const Paragrafo = styled.p`
  font-family: "Playwrite GB S", cursive;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;

  line-height: 1.8;
  padding: 0.7rem 0;

  white-space: pre-line;
  text-align: justify;
`;

export const CardNamoro = styled.div`
  /* background-color: aqua; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      background-color: #ca4a63;
      font-size: 1.1rem;
      padding: 0.6rem 0;

      border-radius: 4rem;
      color: #fff;
    }
  }
`;
