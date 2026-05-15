import styled from "styled-components";
import { Card, CardAction, CardContent, CardHeader } from "../ui/card";

type CardLoveProps = {
  title: string;
  description?: string;
  image?: string;

  onClick?: () => void;
};

export const CardLove = ({
  title,
  description,
  image,
  onClick,
}: CardLoveProps) => {
  return (
    <>
      <CardContainer onClick={onClick}>
        <CardContainerHeader>
          <div
            className="background"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="overlay" />

            <div className="content">
              <h2>{title}</h2>

              <p>{description}</p>
            </div>
          </div>
        </CardContainerHeader>
      </CardContainer>
    </>
  );
};

export const CardContainer = styled(Card)`
  /* background-color: #fff; */
  border: 1px solid transparent;

  width: 100%;
  border-radius: 20px 20px 30px 30px;
  overflow: hidden;
  padding: 0;
  box-shadow:
    0 10px 30px #e02d5a32,
    0 0 20px rgba(255, 0, 128, 0.089);
`;

export const CardContainerHeader = styled(CardHeader)`
  width: 100%;
  height: 210px;

  border-radius: 0 0 30px 30px;

  background: rgba(124, 7, 7, 0.137);

  backdrop-filter: blur(10px);

  padding: 0;

  .background {
    position: relative;

    width: 100%;
    height: 200px;

    overflow: hidden;

    background-size: cover;
    background-position: center;

    border-radius: 0 0 40px 40px;

    display: flex;
    align-items: flex-end;

    padding: 24px;
  }

  .overlay {
    position: absolute;
    inset: 0;

    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.25),
      transparent
    );
  }

  .content {
    position: relative;
    z-index: 2;
  }

  h2 {
    color: #ffffffd8;
    font-size: 28px;
    font-weight: 700;

    margin-bottom: 6px;
  }

  p {
    color: rgba(255, 255, 255, 0.75);

    line-height: 1.5;

    max-width: 280px;
  }
`;

export const CardContainerContent = styled(CardContent)`
  background-color: red;
`;
