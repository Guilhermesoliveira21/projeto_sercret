import styled from "styled-components";

export const HeroContainer = styled.div`

    position: absolute;
    top: -16px;
    left: 0;

    .container_title {
      /* background-color: aqua; */
      z-index: 99999;

      padding: 0 1rem;

      position: absolute;
      top: 140px;

      font-style: italic;
      font-weight: 900;

      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      
      h1 {
        font-size: 3.2rem;
        color: #FFECED;
        font-weight: 700;

        span {
          color: #FFB2BB;
        }
      }

      p {
        font-size: 1.1rem;
        font-weight: 500;
        color: #FFB2BB;
        margin-left: 80px;
        margin-top: 16px;
      }
    }

`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

      background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgb(0 0 0 / 42%), #000000bd);
`;

export const HeroContainerCard = styled.div`

    z-index: 999;

    position: absolute;
    bottom: -6%;
    left: 0;
    width: 100%;

    padding: 0 0rem;

    display: flex;
    align-items: center;
    justify-content: center;


`;

export const ContainerCard = styled.div`

  background-color: #65656566;
  width: 90%;
  height: 100%;

  color: #fff;

  border-radius: 3rem;
  border: 1px solid #ffffff30;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;

    .icon {
      /* background-color: #FFB2BB; */
      display: flex;
      align-items: center;
      justify-content: center;

    }

    .days {
      h3 {
        font-size: 3rem;
        font-weight: 800;
        font-style: italic;
        color: #FFB2BB;
      }
      p {
        padding-top: 1rem;
        font-size: 16px;
        opacity: 0.8;
        text-transform: capitalize;
      }
    }

    .frases {
      display: flex;
      flex-direction: column;
      color: #e5e7eb;
      font-weight: 500;
      font-size: .9rem;
    }

`;

