import { Link } from "react-router";
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border-green-200 rounded">
      <Link
        className="p-1.5 block"
        to={`/drinks/${product.category}/${product.uuid}`}
      >
        <div className="flex flex-col gap-2">
          <img
            className="rounded shadow-md hover:shadow-green-200"
            src={product.images[0]}
            alt={product.description}
          />
          <span className="font-bold">{product.title}</span>
          <span>{product.price}</span>
        </div>
      </Link>
    </div>
  );
}
