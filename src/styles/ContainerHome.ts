import styled from "styled-components";

export const ContainerHome = styled.div`
  position: absolute;
  top: 750px;
  left: 0;
  width: 100%;

  padding: 0 1rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-top: 1.5rem;

    .container_historys {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .container_music {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
    .beijo {
      /* background-color: aqua; */
      display: flex;
      gap: 2rem;
      width: 100%;

      flex-direction: column;

      padding: 1rem;

      color: #ffffffd8;

      background-color: #1c1b1b;
      border-color: transparent;
      border-radius: 8px;
      width: 100%;
      padding: 1rem;

      box-shadow:
        0 10px 30px #e02d5a32,
        0 0 20px rgba(255, 0, 128, 0.089);

      .container {
        display: flex;
        gap: 1rem;
        align-items: start;
        justify-content: start;
        width: 100%;
        .id {
          font-size: 1.2rem;
          font-weight: 600;
          font-family: "Playwrite GB S", cursive;
        }

        .text {
          width: 100%;
          text-align: justify;

          font-size: 1rem;

          font-family: "Playwrite GB S", cursive;
          font-optical-sizing: auto;
          font-weight: weight;
          font-style: normal;
          line-height: 1.8;
          /* padding: 0.7rem 0; */
          /* white-space: pre-line; */
          text-align: justify;
        }
      }
    }
  }
`;
