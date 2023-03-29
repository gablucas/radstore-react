import { HashRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global";
import Header from "./components/Header";
import Notice from "./components/Notice";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <HashRouter>
      <Notice />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos/:category/:type" element={<Products />} />
        <Route path="/produto/:id" element={<Product />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </HashRouter>
  );
}

export default App;
