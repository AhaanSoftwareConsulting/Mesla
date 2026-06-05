import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes,  useLocation } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Topbar from "./Components/Layouts/Topbar";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import HomeComponents from "./Components/Pages/Home/HomeComponents";

const ScrollToTop = () => {
  
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <ScrollToTop />
      <Topbar/>
      <Header onSearch={setSearchTerm} />
        <Routes>
          <Route path="/" element={<HomeComponents searchTerm={searchTerm}/>} />
        </Routes>
       <Footer/>
       </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
