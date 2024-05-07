import { Link } from "react-router-dom";
import { GrFormEdit } from "react-icons/gr";
import { GrTrash } from "react-icons/gr";
import ListaProdutos from "../../data.json";
import { useState } from "react";

export default function Produtos() {
  const [products, setProducts] = useState(ListaProdutos.products);
  console.log(products)
  return (
    <section className="produtos">
      <h1>LISTA DE PRODUTOS</h1>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
          {products.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.price}</td>
                <td>
                  {" "}
                  {/*Link para chamar a tela de editar produtos */}
                  <Link>
                    <GrFormEdit />
                  </Link>{" "}
                  | {/*Link para chamar a tela de excluir produtos */}
                  <Link>
                    <GrTrash />
                    {/*espaço entre os links '' */}
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
