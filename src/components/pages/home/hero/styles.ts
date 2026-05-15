import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;

  width: 100%;
  max-width: 430px;

  margin: -70px auto;

  overflow: hidden;

  .container_title {
    position: absolute;

    top: 120px;
    left: -50px;

    z-index: 10;

    width: 100%;

    padding: 0 1rem;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 3rem;

      font-style: italic;
      font-weight: 800;

      color: #ffeced;

      span {
        color: #ffb2bb;
      }
    }

    p {
      font-size: clamp(0.94rem, 3vw, 1rem);

      font-style: italic;
      font-weight: 500;

      color: #ffb2bb;

      max-width: clamp(200px, 70vw, 260px);

      margin-left: auto;

      margin-top: 12px;

      text-align: right;

      line-height: 1.5;
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
  height: 720px;

  object-fit: cover;

  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgb(0 0 0 / 42%),
    #000000bd
  );
`;

export const HeroContainerCard = styled.div`
  width: 100%;

  margin-top: -200px;

  position: relative;

  z-index: 20;

  display: flex;
  justify-content: center;

  padding: 0 1rem;

  /* background-color: aquamarine; */
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
      font-size: clamp(2.2rem, 8vw, 3rem);

      font-weight: 800;
      font-style: italic;

      color: #ffb2bb;

      line-height: 1;
    }

    p {
      padding-top: 0.7rem;

      font-size: clamp(0.85rem, 3vw, 1rem);

      opacity: 0.8;

      text-transform: capitalize;
    }
  }

  .frases {
    display: flex;
    flex-direction: column;

    gap: 0.3rem;

    color: #e5e7eb;

    font-weight: 500;

    font-size: clamp(0.72rem, 2.8vw, 0.9rem);

    text-align: center;

    line-height: 1.5;
  }
`;
