import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <meta property="og:title" content="Portfolio2020 | Takumi Obayashi" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://obaya884.github.io/portfolio/#/"
        />
        <meta property="og:image" content="./images/ogp_image.png" />
        <meta
          property="og:site_name"
          content="Portfolio2020 | Takumi Obayashi"
        />
        <meta
          property="og:description"
          content="大林拓実のポートフォリオサイト。Reactで作成。自身の経歴や作品を紹介しています。"
        />
        <meta property="og:locale" content="ja_JP" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@obaya884" />
        <meta name="twitter:creator" content="@obaya884" />
      </Helmet>
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
