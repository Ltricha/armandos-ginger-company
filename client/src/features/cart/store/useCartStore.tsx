import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "../types/CartItem";
import type { Product } from "../../products/types/Product";

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (product: Product, quantity: number) =>
        set((state) => {
          // Check if product exists in the cart.
          const exists = state.cartItems.some(
            (item) => item.product.id === product.id,
          );

          // If the product is already in the cart then increase the quantity.
          if (exists) {
            const newCartList = state.cartItems.map((cartItem) => {
              if (cartItem.product.id === product.id) {
                return {
                  product: cartItem.product,
                  quantity: cartItem.quantity + quantity,
                };
              } else {
                return cartItem;
              }
            });
            return { cartItems: newCartList };
          }

          // Return a new array.
          return {
            cartItems: [...state.cartItems, { product, quantity }],
          };
        }),

      updateCart: (id, quantity) =>
        set((state) => {
          const newCartList = state.cartItems.map((cartItem) => {
            if (cartItem.product.id === id) {
              return { product: cartItem.product, quantity };
            } else {
              return cartItem;
            }
          });

          return {
            cartItems: newCartList,
          };
        }),

      removeFromCart: (id) =>
        set((state) => {
          const newCartList = state.cartItems.filter(
            (cartItem) => cartItem.product.id !== id,
          );
          return {
            cartItems: newCartList,
          };
        }),
    }),
    {
      name: "cart",
    },
  ),
);
