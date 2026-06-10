import { useModalStore } from "../store/useModalCartStore";
import { useRef } from "react";

export default function CartModal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const content = useModalStore((state) => state.content);

  return (
    <div
      className={`bg-black/50 w-full h-full fixed top-0 left-0 ${isOpen ? "block" : "hidden"}`}
    >
      <div className="flex justify-between p-10 fixed w-200 min-h-120 top-1/2 left-1/2 -translate-1/2 bg-(--bg-color-primary) rounded">
        <div className="w-1/2">
          <h2>{content?.title} is toegevoegd aan de winkelwagen</h2>
        </div>
        <hr />
        <div className="flex flex-col justify-center gap-10">
          <button className="w-full p-2 bg-(--primary-color)">Afrekenen</button>
          <hr />
          <button className="w-full p-2">Ga verder met winkelen</button>
        </div>
      </div>
    </div>
  );
}
