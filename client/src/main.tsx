import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import Header from "./shared/components/ui/Header.tsx";
import MobileMenu from "./shared/components/ui/MobileMenu.tsx";
import Home from "./features/home/pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <MobileMenu />
  </BrowserRouter>,
);
