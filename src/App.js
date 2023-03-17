import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Home></Home>
      </main>
      <Footer />
    </>
  );
}

export default App;
