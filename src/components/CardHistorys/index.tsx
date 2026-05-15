import styled from "styled-components";
import { Card, CardContent, CardHeader } from "../ui/card";

type CardHistorysProps = {
  title: string;
  description: string;
  image?: string;
};

export const CardHistorys = ({
  title,
  description,
  image,
}: CardHistorysProps) => {
  return (
    <>
      <CardContainer>
        <CardContainerHeader>
          <img src={image} />
        </CardContainerHeader>
        <CardContainerContent>
          <div className="header">
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
          </div>
        </CardContainerContent>
      </CardContainer>
    </>
  );
};

export const CardContainer = styled(Card)`
  background-color: #1c1b1b;
  border-color: transparent;

  border-radius: 8px;

  width: 100%;
  padding: 1rem 0 0 0;

  box-shadow:
    0 10px 30px #e02d5a32,
    0 0 20px rgba(255, 0, 128, 0.089);
`;

export const CardContainerHeader = styled(CardHeader)`
  height: 170px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;

    margin: -1rem auto 0;
    /* height: 100%; */
    width: 100%;

    border-radius: 1rem;
  }
`;

export const CardContainerContent = styled(CardContainer)`
  box-shadow:
    0 10px 30px #e02d5a32,
    0 0 20px rgba(255, 0, 128, 0.089);

  .header {
    padding: 1rem 1rem;

    .title {
      color: #ffb2bb;
      font-size: 1.6rem;

      margin-bottom: 1rem;
    }

    .description {
      color: #e5e7eb;
      font-weight: 500;
      font-size: 0.8rem;

      line-height: 1.8;
      padding: 0.7rem 0;

      white-space: pre-line;
      text-align: justify;
    }
  }
`;
