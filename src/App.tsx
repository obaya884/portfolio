import styled from "styled-components";

import About from "./components/About";
import Experience from "./components/Experience";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import Top from "./components/Top";

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <Top />
      <About />
      <Experience />
      <Product />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-align: center;
`;

export default App;
