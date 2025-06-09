import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Importa los íconos que necesites de Font Awesome

// Nota: Si usas íconos de Font Awesome, asegurate de incluir la CDN en tu index.html o instalarlos vía npm.

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Sección izquierda: Logo o nombre */}
      <div className="navbar__left">
        <h1>MiMarca</h1>
      </div>

      {/* Sección central: Menú de navegación */}
      <div className="navbar__center">
        <ul className="nav-links">
          <li><a href="#tienda">Tienda</a></li>
          <li><a href="#compras">Compras</a></li>
          <li><a href="#facturas">Facturas</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#proveedores">Proveedores</a></li>
          <li><a href="#ordenes">Ordenes de compra</a></li>
          <li><a href="#cobranza">Cobranza</a></li>
        </ul>
      </div>

      {/* Sección derecha: Íconos */}
        <div className="navbar__right">
            <a href="#cart" className="icon-link" title="Carrito de compras">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <a href="#user" className="icon-link" title="Perfil de usuario">
                 <FontAwesomeIcon icon={faUser} />
             </a>
        </div>
    </nav>
  );
};

export default Navbar;