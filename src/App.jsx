import "./App.css";
import Sidebar from "./components/sidebar";
import Top from "./components/top";
import About from "./components/about";
import Experience from "./components/experience";
import Product from "./components/product";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Top />
      <About />
      <Experience />
      <Product />
    </div>
  );
}

export default App;
