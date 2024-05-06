import {} from "react";
import "../css/estilo.css";
import Sport1 from "../assets/guitar.png";
import Sport2 from "../assets/store.png";
import Sport3 from "../assets/store3.png";
import ProductCard from "../components/ProductCard";


function Home() {
  return (
    <>
      <main className="conteudo">
        <section className="conteudo-central">
          <div className="midia">
            <img src={Sport2} alt="Ruisse" />
            <div id="texto-conteudo">
              <h1>A Perfeição Musical</h1>
            </div>
          </div>
        </section>

        <section className="products">
        <ProductCard/>
        
        </section>

        <section className="conteudo-secundario">
          <img src={Sport3} alt="Ruisse" />
        </section>
      </main>
    </>
  );
}

export default Home;