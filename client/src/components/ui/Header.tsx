import { Link } from "react-router";
import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import SearchBar from "../forms/SearchBar";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header>
      <div className="bg-green-900 text-white">
        <div className="container mx-auto px-3">
          Volg ons op: Instagram, facebook, snapchat
        </div>
      </div>

      <div className="w-full bg-green-500 text-white py-2 border-b border-white">
        <div className="container mx-auto flex justify-between px-3">
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
        <div className="container mx-auto px-3">
          <ul className="lg:flex gap-8">
            <li className="relative group">
              <Link
                to=""
                className="text-xl lg:text-base font-medium py-3 block"
              >
                Onze drankjes
              </Link>
              <ul className="opacity-0 group-hover:opacity-100 transition-opacity absolute bg-green-200">
                <li>
                  <Link className="block px-3 py-2 w-60" to="">
                    Gemberbier
                  </Link>
                </li>
                <li>
                  <Link className="block px-3 py-2 w-60" to="">
                    Markoesa
                  </Link>
                </li>
                <li>
                  <Link className="block px-3 py-2 w-60" to="">
                    Orgeade
                  </Link>
                </li>
                <li>
                  <Link className="block px-3 py-2 w-60" to="">
                    Zuurzak
                  </Link>
                </li>
              </ul>
            </li>
            <li className="border-green-500 ">
              <Link
                to=""
                className="text-xl lg:text-base font-medium py-3 block"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-xl lg:text-base font-medium py-3 block "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-xl lg:text-base font-medium py-3 block"
              >
                FAQ
              </Link>
            </li>
            <li className="text-xl lg:text-base font-medium py-3 block">
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
