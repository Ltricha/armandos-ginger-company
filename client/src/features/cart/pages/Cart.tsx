import { useCartStore } from "../store/useCartStore";
import CartItem from "../components/CartItem";
import { Link } from "react-router";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <main>
      <section className="py-10 ">
        <div className="max-w-6xl mx-auto px-6 flex justify-between">
          <div className="flex flex-col min-w-3/4 gap-5">
            <h1>Winkelwagen</h1>

            {cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} />
            ))}
          </div>

          <div className="p-3 shadow-xs bg-green-700 text-white rounded">
            <h2>Total</h2>
            <span>
              {cartItems.reduce((acc, cartItem) => {
                return acc + cartItem.product.price * cartItem.quantity;
              }, 0)}
            </span>
            <Link to="/checkout">
              <button className="p-2 rounded block border-2 font-medium">
                Afrekenen
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
