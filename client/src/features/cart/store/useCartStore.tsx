import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "../types/CartItem";
import type { Product } from "../../products/types/Product";

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => CartItem[];
  removeFromCart: (id: number) => void;
  getCartItems: () => void;
}

const storeOptions = {
  name: "cart",
};

export const useCartStore = create<CartStore>()(
  persist((set) => ({
    cartItems: [],
    addToCart: (product: Product, quantity: number) =>
      set((state) => {
        // Check if product exists in the cart.
        const exists = state.cartItems.some(
          (item) => item.product.id === product.id,
        );

        // If the product is already in the cart don't add it again (or change the quantity).
        if (exists) {
          return state;
        }

        // Return a new array.
        return {
          cartItems: [...state.cartItems, { product, quantity: quantity }],
        };
      }),

    removeFromCart: (id) =>
      set((state) => {
        const newCartList = state.cartItems.filter(
          (cartItem) => cartItem.product.id === id,
        );

        return {
          cartItems: newCartList,
        };
      }),
  })),
);
