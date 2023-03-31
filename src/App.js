import { HashRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global";
import Header from "./components/Header";
import Notice from "./components/Notice";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Product from "./components/Product";
import ContextProvider from "./components/Context";
import Login from "./components/Login";

function App() {
  return (
    <HashRouter>
      <ContextProvider>
        <Notice />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos/:category/:type" element={<Products />} />
          <Route path="/produto/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </ContextProvider>
    </HashRouter>
  );
}

export default App;
