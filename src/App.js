import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Top from "./components/top";
import About from "./components/about";
import Experience from "./components/experience";
import Product from "./components/product";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

function App() {
  return (
    <div className="App">
      {/* <ul>
        <li>
          <a href="#top">top</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#product">product</a>
        </li>
      </ul> */}
      <Sidebar></Sidebar>
      <Top id="top"></Top>
      <About id="about"></About>
      <Experience id="experience"></Experience>
      <Product id="product"></Product>
    </div>
  );
}

export default App;
