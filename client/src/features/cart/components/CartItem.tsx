import type { CartItem } from "../types/CartItem";
import QuantityStepper from "../../products/components/QuantityStepper";
import { useCartStore } from "../store/useCartStore";
import DeleteIcon from "../../../shared/components/icons/DeleteIcon";

interface CartItemProps {
  cartItem: CartItem;
}

export default function CartItem({ cartItem }: CartItemProps) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateCart = useCartStore((state) => state.updateCart);

  return (
    <div className="p-5 gap-5 shadow-md bg-(--bg-color-secondary) rounded border-b-green-700">
      <div className="flex justify-between">
        <h3 className="mb-4 font-medium text-lg">{cartItem.product.title}</h3>
        <button
          onClick={() => {
            removeFromCart(cartItem.product.id);
          }}
          className="text-(--primary-color)"
        >
          <DeleteIcon fill="currentColor" />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <img className="max-w-40 shadow" src={cartItem.product.images[0]} />
        </div>
        <QuantityStepper
          value={cartItem.quantity}
          onChange={(e) => updateCart(cartItem.product.id, e)}
        />
        <p className="text-lg">{cartItem.product.price * cartItem.quantity}</p>
      </div>
    </div>
  );
}
