import ProductCard from "../components/ProductCard";
// import Carousel from "../components/ui/Carousel";

export default function Home() {
  return (
    <main>
      <div className="bg-[url(/src/assets/banner.png)] h-140 bg-top bg-cover"></div>
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
      <section className="bg-green-500 py-5 text-white">
        <div className="container mx-auto px-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            obcaecati laborum sequi a mollitia cum odio assumenda saepe eos
            exercitationem nemo voluptate, nihil nostrum facilis laudantium
            dignissimos suscipit porro. Recusandae.
          </p>
        </div>
      </section>
      <section className="bg-[url('./src/assets/carousel/one.jpg')] h-100">
        {/* <Carousel /> */}
      </section>

      <section className="py-15">
        <div className="container m-auto px-3">
          <div className="flex items-center gap-20 md:flex-row">
            <img src="https://placehold.co/200x200" />

            <div className="text-center">
              <h2>Herkomst</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis dolore vitae maiores perspiciatis autem saepe
                tempore. Tenetur pariatur doloribus cumque corporis eius fugiat
                aperiam, officia necessitatibus illum et quas aut!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-500 py-5 text-white">
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

      <section>
        <div className="container mx-auto px-3">
          <h2>Neem contact met ons op.</h2>
        </div>
      </section>
    </main>
  );
}
