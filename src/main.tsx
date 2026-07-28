import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted so the page still makes no third-party requests. Subsets are
// unicode-range gated, so only latin is actually downloaded.
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
