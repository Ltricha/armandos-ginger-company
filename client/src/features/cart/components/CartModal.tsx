import type { Cart } from "../types/CartItem";
import QuantityStepper from "../../products/components/QuantityStepper";

export default function CartModal({ products }: Cart) {
  return (
    <div className="bg-black/70 bg-opaci w-full h-full fixed top-0 left-0">
      <div className="p-10 fixed w-200 min-h-120 top-1/2 left-1/2 -translate-1/2 border bg-white border-b-green-200 rounded-2xl">
        <h2>Cart</h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row jsustify-between">
            <h4>Naam</h4>
            <span>Prijs</span>
            {/* <QuantityStepper value={1} onChange={} /> */}
            <span>Delete</span>
          </div>
          <div className="flex flex-row justify-between">
            <h4>Naam</h4>
            <span>Prijs</span>
            {/* <QuantityStepper value={1} onChange={} /> */}
            <span>Delete</span>
          </div>
          <div className="flex flex-row justify-between">
            <h4>Naam</h4>
            <span>Prijs</span>
            {/* <QuantityStepper value={1} onChange={} /> */}
            <span>Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
