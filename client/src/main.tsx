import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import Header from "./shared/components/ui/Header.tsx";
import MobileMenu from "./shared/components/ui/MobileMenu.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<div>Page here</div>} />
    </Routes>
    <MobileMenu />
  </BrowserRouter>,
);
