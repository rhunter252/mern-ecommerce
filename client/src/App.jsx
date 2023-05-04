import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import LandingScreen from "./screens/LandingScreen";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
