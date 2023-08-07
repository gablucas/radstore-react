import { HashRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global";
import Header from "./components/Header";
import Notice from "./components/Notice";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import ContextProvider from "./components/Context";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { QueryClient, QueryClientProvider } from "react-query";
import MyAccount from "./pages/MyAccount";
import React from "react";

const queryClient = new QueryClient();

function App() {

  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <Notice />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos/:category/:subcategory?" element={<Products />} />
            <Route path="/produto/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrinho/*" element={<Cart />} />
            <Route path="/minha-conta/*" element={<MyAccount />} />
          </Routes>
          <Footer /> 
          <GlobalStyle />
        </ContextProvider>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
