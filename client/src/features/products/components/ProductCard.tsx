import { Link } from "react-router";
import type { Product } from "../types/Product";
import FavoriteIcon from "../../../shared/components/icons/FavoriteIcon";
import ShoppingCartIcon from "../../../shared/components/icons/ShoppingCartIcon";
import Toast from "../../../shared/components/ui/Toast";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

function addToWishlist() {
  console.log("I have been clicked");
}

export default function ProductCard({ product }: ProductCardProps) {
  function addToCart() {
    console.log("Product toegevoegd aan winkelwagen.");
  }

  return (
    <div className="relative border-green-200 rounded">
      <button className="absolute top-3.5 right-3.5" onClick={addToWishlist}>
        <FavoriteIcon />
      </button>
      <Link
        className="p-1.5 block"
        to={`/drinks/${product.category}/${product.uuid}`}
      >
        <div className="flex flex-col gap-4">
          <img
            className="rounded shadow-md"
            src={product.images[0]}
            alt={product.description}
          />

          <div className="flex justify-between content-center">
            <div className="flex flex-col">
              <span className="font-bold hover:underline">{product.title}</span>
              <span>{product.price}</span>
            </div>
            <button
              className="bg-green-200 hover:bg-green-500 text-white rounded p-2 self-center"
              onClick={addToCart}
            >
              <ShoppingCartIcon />
            </button>
          </div>
        </div>
      </Link>
      <Toast type="" message="Product added to wishlist" />
    </div>
  );
}
