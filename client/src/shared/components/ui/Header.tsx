import { Link } from "react-router";
import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import SearchBar from "../forms/SearchBar";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import { useCartStore } from "../../../features/cart/store/useCartStore";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);

  function handleOnClick() {
    setIsOpen((prev) => !prev);
  }

  function handleOnCartClick() {}

  return (
    <header className="shadow-2xl">
      <div className="bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          Volg ons op: Instagram, facebook, snapchat
        </div>
      </div>

      <div className="w-full bg-green-500 text-white py-3 border-b border-white">
        <div className="max-w-6xl mx-auto px-6 flex justify-between">
          <span className="text-3xl">Logo</span>
          <SearchBar />
          <div className="flex gap-5">
            <button className="">NL</button>
            <Link
              className="hidden lg:flex relative items-center justify-center"
              to={"/cart"}
            >
              {cartItems.length > 0 && (
                <div className="absolute top-0 -right-1.5 text-xs bg-red-500 py-.5 px-1 rounded-full text-white font-medium">
                  {cartItems.length}
                </div>
              )}

              <ShoppingCartIcon />
            </Link>

            <button className="lg:hidden" onClick={handleOnClick}>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Menu*/}
      <nav
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed w-full h-full py-6 
        bg-green-500 text-white lg:py-0 lg:static lg:block lg:translate-0 lg:bg-green-200 transition-transform z-50`}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">
          <ul className="flex flex-col gap-8 lg:flex-row">
            <li>
              <Link
                className="text-xl lg:text-base font-medium py-3 block hover:text-amber-500"
                to="drinks/gemberbier"
              >
                Gemberbier
              </Link>
            </li>
            <li>
              <Link
                className="text-xl lg:text-base font-medium py-3 block hover:text-amber-500"
                to="drinks/markoesa"
              >
                Markoesa
              </Link>
            </li>
            <li>
              <Link
                className="text-xl lg:text-base font-medium py-3 block hover:text-amber-500"
                to="drinks/orgaede"
              >
                Orgaede
              </Link>
            </li>
            <li>
              <Link
                className="text-xl lg:text-base font-medium py-3 block hover:text-amber-500"
                to="drinks/zuurzak"
              >
                Zuurzak
              </Link>
            </li>
          </ul>
          <hr></hr>
          <ul className="flex flex-col lg:flex-row gap-8 ">
            <li className="">
              <Link
                to="/about"
                className="text-xl lg:text-base font-medium py-3 block hover:text-amber-500"
              >
                Over ons
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-xl lg:text-base font-medium py-3 block hover:text-amber-500"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-xl lg:text-base font-medium py-3 block hover:text-amber-500"
              >
                FAQ
              </Link>
            </li>
            <li className="text-xl lg:text-base font-medium py-3 bloc hover:text-amber-500">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
