import { useEffect, useRef, useState } from "react";
import one from "../../assets/carousel/one.jpg";
import two from "../../assets/carousel/two.jpg";
import three from "../../assets/carousel/three.jpg";

interface ICarouselItem {
  text: string;
  image: string;
}

interface ICarouselProps {
  items: ICarouselItem[];
}

export default function Carousel() {
  const intervalRef = useRef(0);
  const [count, setCount] = useState(0);

  const items: ICarouselItem[] = [
    {
      text: "Dit is de eerste slide.",
      image: "bg-[url('./src/assets/carousel/one.jpg')]",
    },
    {
      text: "Dit is de tweede slide.",
      image: "bg-[url('./src/assets/carousel/two.jpg')]",
    },
    {
      text: "Dit is de derde slide.",
      image: "bg-[url('./src/assets/carousel/three.jpg')]",
    },
  ];

  function startInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 3000);
  }

  /**
   * @author Latricha Seym
   * Increments the count.
   * If the count has reached the final slide then return it back to the first slide.
   */
  function next() {
    setCount((prev) => {
      return prev === items.length - 1 ? 0 : prev + 1;
    });
  }

  function previous() {
    setCount((prev) => {
      return prev === 0 ? items.length - 1 : prev - 1;
    });
  }

  useEffect(() => {
    intervalRef.current = setInterval(next, 7000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const itemList = items.map((item, index) => (
    <li
      key={index}
      className={`${item.image} ${count === index ? "block" : "hidden"} w-full transition-opacity`}
    >
      <div className="container mx-auto py-3">{item.text}</div>
    </li>
  ));
  return (
    <div className="flex justify-between h-120">
      <button
        className="absolute"
        onClick={() => {
          console.log("I have been clicked.");
          startInterval();
          previous();
        }}
      >
        Previous
      </button>
      <ul className="flex w-full">{itemList}</ul>
      <button
        className="absolute right-0"
        onClick={() => {
          startInterval();
          next();
        }}
      >
        Next
      </button>
    </div>
  );
}
