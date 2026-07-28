import About from "./components/About";
import Experience from "./components/Experience";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import Top from "./components/Top";
import { SquircleDefs } from "./components/Squircle";

function App() {
  return (
    <>
      <SquircleDefs />
      <Sidebar />
      <Top />
      <main>
        <About />
        <Experience />
        <Product />
      </main>
    </>
  );
}

export default App;
