import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./components/home/Service";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
