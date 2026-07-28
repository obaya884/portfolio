import About from "./components/About";
import Experience from "./components/Experience";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import Top from "./components/Top";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Top />
      <About />
      <Experience />
      <Product />
    </div>
  );
}

export default App;
