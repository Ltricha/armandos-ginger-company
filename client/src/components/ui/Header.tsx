import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <div>
        Volg ons op:
        <ul>
          <li>I</li>
          <li>F</li>
          <li>S</li>
        </ul>
      </div>
      <div className="flex">
        <p>Logo</p>
        <div>
          <p>NL</p>
        </div>
      </div>
      <nav>
        <div>
          <Link to="">About</Link>
          <Link to="">Blog</Link>
          <Link to="">Faq</Link>
        </div>
        <div>
          <Link to="">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
