import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./index.css";
import Header from "./shared/components/ui/Header.tsx";
import MobileMenu from "./shared/components/ui/MobileMenu.tsx";
import Home from "./features/home/pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Home />
    <MobileMenu />
  </BrowserRouter>,
);
