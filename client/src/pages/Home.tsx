import ProductCard from "../components/ProductCard";
import Carousel from "../components/ui/Carousel";

export default function Home() {
  return (
    <main>
      <div className="bg-[url(/src/assets/banner.png)] h-100 bg-top bg-cover "></div>
      <section className="py-20">
        <div className="container mx-auto px-3">
          <h2>Onze drankjes</h2>

          <div className="flex justify-between">
            <ProductCard />
            <ProductCard />

            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="bg-green-500 py-10 text-white">
        <div className="container mx-auto px-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            obcaecati laborum sequi a mollitia cum odio assumenda saepe eos
            exercitationem nemo voluptate, nihil nostrum facilis laudantium
            dignissimos suscipit porro. Recusandae.
          </p>
        </div>
      </section>
      <section>
        <Carousel />
      </section>

      <section className="py-15 h-100">
        <div className="container m-auto px-3">Herkomst</div>
      </section>

      <section className="bg-green-500 py-10 text-white">
        <div className="container mx-auto px-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            obcaecati laborum sequi a mollitia cum odio assumenda saepe eos
            exercitationem nemo voluptate, nihil nostrum facilis laudantium
            dignissimos suscipit porro. Recusandae.
          </p>
        </div>
      </section>

      <section className="bg-grey-400 py-10 text-white">
        <div className="container mx-auto px-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            obcaecati laborum sequi a mollitia cum odio assumenda saepe eos
            exercitationem nemo voluptate, nihil nostrum facilis laudantium
            dignissimos suscipit porro. Recusandae.
          </p>
        </div>
      </section>
    </main>
  );
}
