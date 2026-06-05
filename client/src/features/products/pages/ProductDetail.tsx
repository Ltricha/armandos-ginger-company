import type { Product } from "../types/Product";
import { useEffect, useState } from "react";
import { productService } from "../services/ProductService";
import { useParams } from "react-router";
import AddShoppingCartIcon from "../../../shared/components/icons/AddShoppingCartIcon";
import QuantityStepper from "../components/QuantityStepper";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  // Fires this hook each time the id changes.
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await productService.getById(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadProduct();
  }, [id]);

  console.log(product.images?.[0]);

  return (
    <main>
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-20">
          <div className="max-w-200">
            <img
              className="w-full h-auto object-cover"
              src={product.images?.[0]}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h2>{product.title}</h2>

              <p>{product.description}</p>
            </div>
            <hr />
            <div>
              <span className="font-bold">Hoeveelheid:</span>
              <div className="flex justify-between">{}</div>
            </div>
            <hr />
            <div>
              <span className="font-bold">Aantal:</span>
              <QuantityStepper value={count} onChange={setCount} />
            </div>
            <div>
              <span className="font-bold">Totaal:</span>
              <p className="text-3xl">{(product.price * count).toFixed(2)}</p>
            </div>
            <div className="">
              <button className="flex justify-center gap-2.5 border border-green-200 hover:border-green-500 text-sm font-medium text-green-200 hover:text-green-500 rounded p-2 cursor-pointer">
                <span>In winkelwagen</span>
                <AddShoppingCartIcon fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3>Ingrediënten</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            sapiente dolorem tempore dolorum? Minus fugiat, sit nesciunt
            deleniti, quisquam similique consectetur, doloribus aut fugit animi
            voluptatibus quidem non dolorem ipsum.
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3>Zie ook</h3>
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <img src="https://picsum.photos/seed/matcha/250/150" alt="" />
            <img src="https://picsum.photos/seed/matcha/250/150" alt="" />
            <img src="https://picsum.photos/seed/matcha/250/150" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
