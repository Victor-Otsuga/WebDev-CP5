import {} from 'react';
import '../css/estilo.css';
import Produto from '../assets/produto.png'
import { useNavigate } from 'react-router-dom';
import ProductCard from "../components/ProductCard";

function Portifolio() {

  //UTILIZANDO O useNavigate para redirecionar componentes
  const navigate= useNavigate();

  //CRIANDO A FUNCAO HANDLELOGOUT
  const handleLogout =()=>{
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("saindo do sistema...")
    navigate("/");
    navigate(0);
  }


  return (
    <>
        <main className="conteudo">

        <h1>Nossos Produtos</h1>

        <section className="products">
        <ProductCard/>
        
        </section>
        </main>
    </>
  );
}
export default Portifolio;