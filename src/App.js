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
import Cart from "./components/Cart";
import { QueryClient, QueryClientProvider } from "react-query";

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
            <Route path="/produtos/:category/:type" element={<Products />} />
            <Route path="/produto/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrinho/*" element={<Cart />} />
          </Routes>
          <Footer />
          <GlobalStyle />
        </ContextProvider>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
