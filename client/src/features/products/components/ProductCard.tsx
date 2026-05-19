import { Link } from "react-router";
import type { Product } from "../types/Product";
import FavoriteIcon from "../../../shared/components/icons/FavoriteIcon";
import AddShoppingCartIcon from "../../../shared/components/icons/AddShoppingCartIcon";
import Toast from "../../../shared/components/ui/Toast";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  function addToWishlist() {
    console.log("Product toegevoegd aan verlanglijst.");
  }

  function addToCart(e) {
    e.preventDefault();
    console.log("Product toegevoegd aan winkelwagen.");
  }

  return (
    <div className="relative border-green-200 rounded shadow p-2 hover:border-green-900">
      <button className="absolute top-4.5 right-4.5" onClick={addToWishlist}>
        <FavoriteIcon />
      </button>
      <Link
        className="p-1.5 block"
        to={`/drinks/${product.category}/${product.uuid}`}
      >
        <div className="flex flex-col gap-4">
          <img
            className="rounded"
            src={product.images[0]}
            alt={product.description}
          />
          <div className="flex flex-col">
            <span className="font-bold hover:underline">{product.title}</span>
            <span>{product.price}</span>
          </div>

          <button
            className="flex justify-center gap-2.5 border border-green-200 text-sm font-medium text-green-200 hover:text-green-500 rounded p-2"
            onClick={(e) => {
              addToCart(e);
            }}
          >
            <span>In Winkelwagen</span>
            <AddShoppingCartIcon fill={"#3b9145"} />
          </button>
        </div>
      </Link>
    </div>
  );
}
