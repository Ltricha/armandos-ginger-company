import AddShoppingCartIcon from "../../../../shared/components/icons/AddShoppingCartIcon";
import CheckIcon from "../../../../shared/components/icons/CheckIcon";
import { useCartStore } from "../../../cart/store/useCartStore";
import { useModalStore } from "../../../cart/store/useModalCartStore";
import type { Product } from "../../types/Product";

interface AddToCartButtonProps {
  product: Product;
  quantity: number;
}

export default function AddToCartButton({
  product,
  quantity,
}: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const openModal = useModalStore((state) => state.openModal);
  const cartItems = useCartStore((state) => state.cartItems);

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    addToCart(product, quantity);
    openModal(product);
  }

  const added = cartItems.some(
    (cartItem) => cartItem.product.id === product.id,
  );

  return (
    <button
      className={`flex justify-center w-full gap-2.5 border border-green-200 text-sm font-medium text-green-200 rounded p-2 cursor-pointer transition-all ${added ? "text-white bg-green-200 hover:bg-green-500" : "hover:border-green-500 bg-white"}`}
      onClick={handleOnClick}
    >
      <span>In Winkelwagen</span>
      {added ? (
        <CheckIcon fill="currentColor" />
      ) : (
        <AddShoppingCartIcon fill="currentColor" />
      )}
    </button>
  );
}
