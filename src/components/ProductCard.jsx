import {} from "react";
import music4 from "../assets/drum.png";
import "../css/estilo.css";
import music1 from "../assets/guitar.png"
import music2 from "../assets/violao.png"
import music3 from "../assets/teclado.png"
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <>
      <Link to="/SingleProduct" className="nostyle tlink">
        <div className="product">
          <img src={music4} alt="Ruisse" />
          <h2>Bateria</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi!</p>
          <p className="price">R$ 1500,99</p>
          <button>Comprar</button>
        </div>
      </Link>
      <Link to="/SingleProduct2" className="nostyle tlink">
        <div className="product">
          <img src={music1} alt="Ruisse" />
          <h2>Guitarra</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, dicta!</p>
          <p className="price">R$ 179,90</p>
          <button>Comprar</button>
        </div>
      </Link>
      <Link to="/SingleProduct3" className="nostyle tlink">
        <div className="product">
          <img src={music2} alt="Ruisse" />
          <h2>Violão</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, fuga?</p>
          <p className="price">R$ 550,99</p>
          <button>Comprar</button>
        </div>
      </Link>
      <Link to="/SingleProduct4" className="nostyle tlink">
        <div className="product">
          <img src={music3} alt="Ruisse" />
          <h2>Teclado Yamaha</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, expedita!
          </p>
          <p className="price">R$ 349,99</p>
          <button>Comprar</button>
        </div>
      </Link>
      
      
    </>
  );
}
export default ProductCard;