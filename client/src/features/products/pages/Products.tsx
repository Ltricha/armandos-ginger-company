import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <main>
      <section className="py-5">
        <div className="max-w-5xl mx-auto">
          <h2>Products</h2>
        </div>
      </section>
      <section className="py-5">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between">
            <ProductCard />
            <ProductCard />

            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </main>
  );
}
