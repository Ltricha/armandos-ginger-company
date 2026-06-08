import { Link } from "react-router";
import type { Product } from "../types/Product";
import FavoriteIcon from "../../../shared/components/icons/FavoriteIcon";
// import Toast from "../../../shared/components/ui/Toast";

import AddToCartButton from "./buttons/AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const quantity = 1;

  function addToWishlist() {
    console.log("Product toegevoegd aan verlanglijst.");
  }

  return (
    <div className="relative border-green-200 rounded shadow p-2 hover:border-green-900 h-full flex-col">
      <button className="absolute top-4.5 right-4.5" onClick={addToWishlist}>
        <FavoriteIcon />
      </button>

      <div className="flex flex-col gap-4">
        <Link className="" to={`/drinks/${product.category}/${product.id}`}>
          <img
            className="rounded hover:scale-120 transition-transform"
            src={product.images[0]}
            alt={product.description}
          />
        </Link>

        <div className="flex flex-col">
          <Link className="" to={`/drinks/${product.category}/${product.id}`}>
            <span className="font-bold hover:underline">{product.title}</span>
          </Link>

          <span>{product.price}</span>
        </div>

        <AddToCartButton product={product} quantity={quantity} />
      </div>
    </div>
  );
}
