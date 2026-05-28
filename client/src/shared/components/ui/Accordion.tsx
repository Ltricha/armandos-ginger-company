import { Link } from "react-router";
import { useState } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";

type AccordionItem = {
  label: string;
  href: string;
};

type Accordion = {
  title: string;
  items: AccordionItem[];
};

interface AccordionProps {
  accordion: Accordion;
}

export default function Accordion({ accordion }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        className="flex items-center gap-3 text-xl lg:text-base font-medium py-3 text-white hover:text-amber-500"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span>{accordion.title}</span> <ChevronDownIcon fill="currentColor" />
      </button>
      <ul
        className={`${isOpen ? "block" : "hidden"} lg:absolute lg:top-full lg:left-0 lg:min-w-48 lg:bg-green-200`}
      >
        {accordion.items.map((item) => (
          <li>
            <Link
              className="block px-3 py-3 font-medium hover:text-amber-500"
              to={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
