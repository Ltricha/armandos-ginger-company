import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import { Link } from "react-router";

export default function MobileMenu() {
  return (
    <nav className="fixed bottom-10 left-5 bg-black text-white px-6 py-2 rounded-4xl lg:hidden">
      <ul className="flex justify-between gap-6">
        <li>
          <Link to="/">
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link to="">
            <SearchIcon />
          </Link>
        </li>
        <li>
          <Link to="/drinks">
            {" "}
            <ShoppingBagIcon />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
