import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  backgroundColor: string;
  /** Omitted when there is nothing to link to, so no empty anchor is rendered. */
  link?: { url: string; icon: IconDefinition };
};

function Card({
  title,
  subtitle,
  description,
  image,
  backgroundColor,
  link,
}: CardProps) {
  return (
    <CardContainer>
      <ImageContainer $backgroundColor={backgroundColor}>
        <img src={image} alt={title} />
      </ImageContainer>
      <DescriptionContainer>
        <div>
          <h3>{title}</h3>
          {link && (
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-awesome-icon" icon={link.icon} />
            </a>
          )}
        </div>
        <p>{subtitle}</p>
        <p>{description}</p>
      </DescriptionContainer>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 360px;
  height: 240px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const ImageContainer = styled.div<{ $backgroundColor: string }>`
  width: 100%;
  height: 180px;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 10px 10px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  height: 140px;
  font-family: sans-serif;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #000;
      text-decoration: none;
      font-size: 0.8em;
      :hover path {
        fill: #808080;
      }
    }
  }

  h3 {
    margin: 0 8px 0 0;
  }
  p {
    margin: 0;
    font-size: 0.7em;
  }
`;

export default Card;
