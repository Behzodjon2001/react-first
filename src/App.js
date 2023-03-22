import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Product from "./components/products/Product";
import Strategies from "./components/strategies/Strategies";

function App() {
  return (
    <>
      <Navbar> </Navbar>{" "}
      <main>
        <Home> </Home> <Product> </Product> <Strategies> </Strategies>{" "}
      </main>{" "}
      <Footer />
    </>
  );
}

export default App;
