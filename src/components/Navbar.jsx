import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-text">Pastelería Mil Sabores</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="Index">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
            <li className="nav-item"><Link className="nav-link cart-link" to="#">Carrito <span className="cart-count">(0)</span></Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="userMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                <li><Link className="dropdown-item" to="/registro">📝 Registro</Link></li>
                <li><Link className="dropdown-item" to="/inicio_sesion">🔐 Iniciar Sesión</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
