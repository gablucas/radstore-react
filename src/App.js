import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global";
import Header from "./Components/Header";
import Notice from "./Components/Notice";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Notice />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
