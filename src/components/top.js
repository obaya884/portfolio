import React from "react";
import styled from "styled-components";

class Top extends React.Component {
  render() {
    return (
      <TopContainer>
        <h1>Takumi Obayashi</h1>
        <h2>portfolio</h2>
      </TopContainer>
    );
  }
}

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #2fb37e;
  font-family: Futura, sans-serif;
  h1 {
    margin-top: 250px;
    margin-bottom: 12px;
    font-size: 108px;
    font-weight: 500;
  }
  h2 {
    margin: 0;
    font-size: 76px;
    font-weight: 500;
  }
`;

export default Top;
