import styled from "styled-components";

export const ContainerHome = styled.div`
  position: absolute;
  top: 750px;
  left: 50%;

  transform: translateX(-50%);

  width: 100%;
  max-width: 430px;

  padding: 0 1rem 3rem;

  section {
    display: flex;
    flex-direction: column;

    gap: 2rem;

    margin-top: 1.5rem;

    .container_historys,
    .container_music {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .beijo {
      display: flex;
      flex-direction: column;

      gap: 2rem;

      width: 100%;

      padding: 1rem;

      color: #ffffffd8;

      background-color: #1c1b1b;

      border-radius: 12px;

      box-shadow:
        0 10px 30px #e02d5a32,
        0 0 20px rgba(255, 0, 128, 0.089);

      .container {
        display: flex;

        gap: 1rem;

        width: 100%;

        .id {
          font-size: 1.1rem;

          font-weight: 600;

          font-family: "Playwrite GB S", cursive;

          min-width: 30px;
        }

        .text {
          width: 100%;

          font-size: 0.95rem;

          line-height: 1.8;

          font-family: "Playwrite GB S", cursive;

          word-break: break-word;
        }
      }
    }
  }
`;
