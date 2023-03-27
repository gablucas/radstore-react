import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global";
import Header from "./Components/Header";
import Notice from "./Components/Notice";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Notice />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
