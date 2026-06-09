import type { CartItem } from "../types/CartItem";
import QuantityStepper from "../../products/components/QuantityStepper";
import { useCartStore } from "../store/useCartStore";

interface CartItemProps {
  cartItem: CartItem;
}

export default function CartItem({ cartItem }: CartItemProps) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateCart = useCartStore((state) => state.updateCart);

  return (
    <div className="flex flex-row p-5 gap-5 shadow-md bg-(--bg-color-secondary) rounded border-b-green-700">
      <h4>{cartItem.product.title}</h4>
      <QuantityStepper
        value={cartItem.quantity}
        onChange={(e) => updateCart(cartItem.product.id, e)}
      />
      <button
        onClick={() => {
          removeFromCart(cartItem.product.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
