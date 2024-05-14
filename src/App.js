import './App.css'
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Navbar from './components/Navbar';
import SingleProduct from "./pages/SingleProduct"
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import Notice from './components/Notice';
import Footer from './components/Footer';
import BroilerOne from './product/BroilerOne';
import BroilerTwo from './product/BroilerTwo';
import BroilerThree from './product/BroilerThree';
import BroilerFour from './product/BroilerFour';
import BroilerFive from './product/BroilerFive';
import BroilerSix from './product/BroilerSix';
import GoatFeed from './product/GoatFeed';
import HighYieldSpecial from './product/HighYieldSpecial';
import DoodhDhara from './product/DoodhDhara';
import BuffSpecial from './product/BuffSpecial';
import PigStarter from './product/PigStarter';


function App() {

  return (
    <>
      <Notice />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/broiler_b0" element={<BroilerOne />} />
          <Route path="/products/broiler_b1" element={<BroilerTwo />} />
          <Route path="/products/broiler_b2" element={<BroilerThree />} />
          <Route path="/products/broiler_l1" element={<BroilerFour />} />
          <Route path="/products/broiler_l2" element={<BroilerFive />} />
          <Route path="/products/broiler_l3" element={<BroilerSix />} />
          <Route path="/products/goatfeed" element={<GoatFeed />} />
          <Route path="/products/highyieldspecial" element={<HighYieldSpecial />} />
          <Route path="/products/doodhdhara" element={<DoodhDhara />} />
          <Route path="/products/buffspecial" element={<BuffSpecial />} />
          <Route path="/products/pigstarter" element={<PigStarter />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
