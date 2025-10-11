import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import IniciarSesion from './pages/iniciarSesion.jsx';
import Productos from './pages/Productos.jsx';
import Navbar from './components/Navbar.jsx';
import Registro from "./pages/registro.jsx";
import { ContextoFiltros } from "./Contexts/ContextoFiltros.jsx";

function App(){
  return(
    <ContextoFiltros>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/inicio_sesion" element={<IniciarSesion />} />
          <Route path="/registro" element={<Registro />} />
          {/*<Route path="/detalle_producto" element={<DetalleDeProducto />} />*/}
        </Routes>
      </BrowserRouter>
    </ContextoFiltros>
    
  )
}

export default App;