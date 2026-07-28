import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// サードパーティへのリクエストを発生させないためセルフホストしている。
// サブセットは unicode-range で制御されるので、実際に落ちてくるのは latin のみ。
import "@fontsource-variable/jost";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Missing #root element in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
