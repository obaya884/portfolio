import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import kimochiNoKirikaeCatalog from "../images/kimochi-no-kirikae-catalog.svg";
import theaterConcierge from "../images/theater-concierge.svg";
import tetra from "../images/tetra.svg";
import charmMe from "../images/charm-me.svg";
import sireee from "../images/logo_cacao_lateral.svg";
import shabom from "../images/shabom.svg";

class ProductCard extends React.Component {
  render() {
    let image;
    if (this.props.name === "キモチの切り替えカタログ") {
      image = kimochiNoKirikaeCatalog;
    } else if (this.props.name === "シアターコンシェルジュ") {
      image = theaterConcierge;
    } else if (this.props.name === "Tetra") {
      image = tetra;
    } else if (this.props.name === "Charm Me!") {
      image = charmMe;
    } else if (this.props.name === "Sireee") {
      image = sireee;
    } else if (this.props.name === "SHABOM") {
      image = shabom;
    }

    let icon;
    if (this.props.genre === "iOSアプリ") {
      icon = ["fab", "apple"];
    } else if (this.props.genre === "webページ") {
      icon = ["fas", "external-link-alt"];
    } else if (this.props.genre === "Androidアプリ") {
      icon = ["fab", "google-play"];
    }

    return (
      <CardContainer>
        <ImageContainer background_color={this.props.background_color}>
          <img src={image} alt={this.props.company_name}></img>
        </ImageContainer>
        <DescriptionContainer>
          <div>
            <h3>{this.props.name}</h3>
            <a
              href={this.props.external_link_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="font-awesome-icon" icon={icon} />
            </a>
          </div>
          <p>{this.props.genre}</p>
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
      /* font-size: 0.8em; */
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

export default ProductCard;
