import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import { productService } from "../services/ProductService";
// import type { Product } from "../types/Product";

export default function Products() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await productService.getAll();
        setProducts(data.products);
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    };

    loadProducts();
  }, []);

  return (
    <main>
      <section className="py-5">
        <div className="max-w-6xl mx-auto px-6">
          <h2>{params.category}</h2>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-6">
          <span>12 resultaten</span>
        </div>
      </section>
      <section className="py-5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
