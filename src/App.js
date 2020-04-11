import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Top from "./components/top";
import About from "./components/about";

import { library } from "@fortawesome/fontawesome-svg-core"; //fontawesomeのコアファイル
import { fab } from "@fortawesome/free-brands-svg-icons"; //fontawesomeのbrandアイコンのインポート
import { fas } from "@fortawesome/free-solid-svg-icons"; //fontawesomeのsolidアイコンのインポート
import { far } from "@fortawesome/free-regular-svg-icons"; //fontawesomeのregularアイコンのインポート

library.add(fab, fas, far); //他のコンポーネントから簡単に呼び出せるようにするための登録処理？

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Top></Top>
      <About></About>
    </div>
  );
}

export default App;
