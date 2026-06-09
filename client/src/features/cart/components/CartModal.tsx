import type { Cart } from "../types/CartItem";
import QuantityStepper from "../../products/components/QuantityStepper";

export default function CartModal({ product }: Cart) {
  return (
    <div className="w-full h-full fixed top-0 left-0">
      <div className="p-10 fixed w-200 min-h-120 top-1/2 left-1/2 -translate-1/2 border bg-(--bg-color-primary) border-b-green-200 rounded-2xl">
        <h2>Gemberbier 250ML is toegevoegd aan uw winkelwagen</h2>
        <span>Ga verder met winkelen</span>
        <span>Afrekenen</span>
      </div>
    </div>
  );
}
