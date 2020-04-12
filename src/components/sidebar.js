import React from "react";
import styled from "styled-components";
import { HashRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Sidebar extends React.Component {
  render() {
    return (
      <SideContainer>
        <Sidenav>
          <ul>
            <li>
              <HashLink smooth to="/#product">
                Product
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#experience">
                Experience
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#top">
                Top
              </HashLink>
            </li>
          </ul>
        </Sidenav>
      </SideContainer>
    );
  }
}

const SideContainer = styled.div`
  position: fixed;
  transform: rotate(270deg);
  top: 50%;
  left: -200px;
  z-index: 2;
`;

const Sidenav = styled.nav`
  font-family: Futura, sans-serif;
  font-weight: 500;
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    li {
      font-size: 1.2em;
      margin-right: 60px;
      a {
        color: #000;
        text-decoration: none;
        :hover {
          color: #fff;
        }
      }
    }
  }
`;

export default Sidebar;
