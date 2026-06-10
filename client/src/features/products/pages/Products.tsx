import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";
import { useParams } from "react-router";

interface ProductsProps {
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    uuid: 200001,
    title: "Classic Coca-Cola",
    price: 2.99,
    description:
      "Refreshing sparkling soft drink with the original Coca-Cola taste.",
    images: [
      "https://picsum.photos/seed/coke1/400/400",
      "https://picsum.photos/seed/coke2/400/400",
    ],
    category: "Soft Drinks",
  },
  {
    id: 2,
    uuid: 200002,
    title: "Fresh Orange Juice",
    price: 4.5,
    description: "100% freshly squeezed orange juice with no added sugar.",
    images: ["https://picsum.photos/seed/orangejuice/400/400"],
    category: "Juices",
  },
  {
    id: 3,
    uuid: 200003,
    title: "Iced Matcha Latte",
    price: 5.25,
    description: "Creamy iced matcha latte made with premium green tea.",
    images: ["https://picsum.photos/seed/matcha/400/400"],
    category: "Coffee & Tea",
  },
  {
    id: 4,
    uuid: 200004,
    title: "Strawberry Smoothie",
    price: 6.0,
    description: "Fresh strawberry smoothie blended with yogurt and honey.",
    images: [
      "https://picsum.photos/seed/smoothie1/400/400",
      "https://picsum.photos/seed/smoothie2/400/400",
    ],
    category: "Smoothies",
  },
  {
    id: 5,
    uuid: 200005,
    title: "Sparkling Mineral Water",
    price: 1.99,
    description: "Crisp sparkling water with natural minerals.",
    images: ["https://picsum.photos/seed/water/400/400"],
    category: "Water",
  },
  {
    id: 6,
    uuid: 200006,
    title: "Vanilla Cold Brew",
    price: 4.99,
    description: "Smooth cold brew coffee infused with vanilla flavor.",
    images: ["https://picsum.photos/seed/coldbrew/400/400"],
    category: "Coffee & Tea",
  },
  {
    id: 7,
    uuid: 200007,
    title: "Mango Bubble Tea",
    price: 5.75,
    description: "Sweet mango milk tea with chewy tapioca pearls.",
    images: ["https://picsum.photos/seed/bubbletea/400/400"],
    category: "Bubble Tea",
  },
  {
    id: 8,
    uuid: 200008,
    title: "Energy Boost Drink",
    price: 3.49,
    description: "Energy drink packed with caffeine and vitamins.",
    images: ["https://picsum.photos/seed/energy/400/400"],
    category: "Energy Drinks",
  },
];

export default function Products() {
  const params = useParams();

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
