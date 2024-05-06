import {} from "react";
import { Link } from "react-router-dom";
import "../css/estilo.css";



function Nav() {
  const getUsuario = sessionStorage.getItem("usuario");
  const getSenha = sessionStorage.getItem("senha");

  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("saindo do sistema...");
    navigate("/");
  };

  return (
    <>
      <header className="menu">
        <nav className="nav-menu">
          <ul>
            <Link to="/" className="tlink">
              Home
            </Link>{" "}
            {""}
            <Link to="/contato" className="tlink">
              Contato
            </Link>
            <Link to="/produto" className="tlink">
              Produtos
            </Link>
            {getUsuario && getSenha ? (
              <>
                <Link to="/portifolio" className="tlink">
                  Portifólio
                </Link>
                <Link onClick={handleLogout} className="tlink">
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login" className="tlink">
                Login
              </Link>
            )}
          </ul>
        </nav>

      </header>
    </>
  );
}
export default Nav;
