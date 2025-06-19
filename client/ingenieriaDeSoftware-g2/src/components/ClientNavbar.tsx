import { Link } from 'react-router-dom';
import './ClientNavbar.css';

function ClientNavbar() {
  return (
    <header className="client-navbar"> {/* Usamos una clase diferente para el CSS */}
      {/* Sección del logo a la izquierda */}
      <div className="client-navbar__left">
        <Link to="/">
          {/* logo.png/ */}
          <img src="/logo.png" alt="Cafe El Mejor Logo" className="client-navbar__logo-img" />
        </Link>
      </div>

      {/* Sección de navegación a la derecha: solo los enlaces de la página de bienvenida */}
      <nav className="client-navbar__right">
        <ul className="nav-links">
          {/* Usamos <Link> para la navegación en React */}
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/menu">Menú</Link></li> {}
          <li><Link to="/login">Iniciar sesión</Link></li> {/* Esta ruta es :LoginPage */}
        </ul>
      </nav>
    </header>
  );
}

export default ClientNavbar;