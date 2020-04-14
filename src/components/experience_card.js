import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lifeistechLogo from "../images/lifeistech-logo.svg";
import freeeLogo from "../images/freee-logo.svg";
import teamlabLogo from "../images/teamlab-logo.svg";
import ingageLogo from "../images/ingage-logo.svg";
import goodpatchLogo from "../images/gp_logo.svg";

class ExperienceCard extends React.Component {
  render() {
    let company_image;
    if (this.props.company_name === "ライフイズテック株式会社") {
      company_image = lifeistechLogo;
    } else if (this.props.company_name === "チームラボ株式会社") {
      company_image = teamlabLogo;
    } else if (this.props.company_name === "株式会社グッドパッチ") {
      company_image = goodpatchLogo;
    } else if (this.props.company_name === "freee株式会社") {
      company_image = freeeLogo;
    } else if (this.props.company_name === "株式会社インゲージ") {
      company_image = ingageLogo;
    }

    return (
      <CardContainer>
        <ImageContainer background_color={this.props.background_color}>
          <img src={company_image} alt={this.props.company_name}></img>
        </ImageContainer>
        <DescriptionContainer>
          <div>
            <h3>{this.props.company_name}</h3>
            <a
              href={this.props.external_link_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="font-awesome-icon"
                icon={["fas", "external-link-alt"]}
              />
            </a>
          </div>
          <p>{this.props.period}</p>
          <p>{this.props.desc}</p>
        </DescriptionContainer>
      </CardContainer>
    );
  }
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

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${(props) => props.background_color};
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

export default ExperienceCard;
