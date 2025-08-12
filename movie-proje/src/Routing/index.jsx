import { Routes, Route, useLocation } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import Explore from "../pages/Explore/Explore";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";

const Routing = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default Routing;
