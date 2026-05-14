import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <main>
      <h1>Welcome op de homepagina.</h1>
      <p>Lorem impsum</p>

      <section>
        <div className="container mx-auto">
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
