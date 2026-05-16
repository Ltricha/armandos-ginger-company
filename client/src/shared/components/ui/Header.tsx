import { Link } from "react-router";
import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import SearchBar from "../forms/SearchBar";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import Accordion from "./Accordion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClick() {
    setIsOpen((prev) => !prev);
  }

  const accordionData = {
    title: "Onze drankjes",
    items: [
      { label: "Gemberbier", href: "/drankjes/gemberbier" },
      { label: "Markoesa", href: "/drankjes/markoesa" },
      { label: "Orgeade", href: "/drankjes/orgeade" },
      { label: "Zuurzak", href: "/drankjes/zuurzak" },
    ],
  };

  return (
    <header className="shadow-2xl">
      <div className="bg-green-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          Volg ons op: Instagram, facebook, snapchat
        </div>
      </div>

      <div className="w-full bg-green-500 text-white py-3 border-b border-white">
        <div className="max-w-5xl mx-auto px-6 flex justify-between">
          <span className="text-3xl">Logo</span>
          <SearchBar />
          <div className="flex gap-5">
            <button className="">NL</button>
            <button className="hidden lg:block">
              <ShoppingCartIcon />
            </button>
            <button className="lg:hidden" onClick={handleOnClick}>
              {isOpen ? <CloseIcon color="#FFFFFF" /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Menu*/}
      <nav
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed w-full h-full py-6 
        bg-green-500 text-white lg:py-0 lg:static lg:block lg:translate-0 lg:bg-green-200 transition-transform`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ul className="flex flex-col lg:flex-row gap-8 ">
            <li className="relative group flex">
              <Accordion accordion={accordionData} />
            </li>
            <li className="border-green-500 ">
              <Link
                to="/about"
                className="text-xl lg:text-base font-medium py-3 block"
              >
                Over ons
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-xl lg:text-base font-medium py-3 block "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-xl lg:text-base font-medium py-3 block"
              >
                FAQ
              </Link>
            </li>
            <li className="text-xl lg:text-base font-medium py-3 block">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
