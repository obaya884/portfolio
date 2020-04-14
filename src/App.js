import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Top from "./components/top";
import About from "./components/about";
import Experience from "./components/experience";
import Product from "./components/product";

import { HashRouter, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Sidebar></Sidebar>
        <Route path="/">
          <Top></Top>
        </Route>
        <Route path="/">
          <About></About>
        </Route>
        <Route path="/">
          <Experience></Experience>
        </Route>
        <Route path="/">
          <Product></Product>
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
