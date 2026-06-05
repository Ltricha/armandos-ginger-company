import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import Header from "./shared/components/ui/Header.tsx";
import MobileMenu from "./shared/components/ui/MobileMenu.tsx";
import Home from "./pages/Home.tsx";
import Products from "./features/products/pages/Products.tsx";
import ProductDetail from "./features/products/pages/ProductDetail.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/drinks/:category`} element={<Products />}></Route>
      <Route path={`/drinks/:category/:id`} element={<ProductDetail />} />
    </Routes>
    <MobileMenu />
  </BrowserRouter>,
);
