// src/App.jsx

// 1. Quita BrowserRouter de aquí, solo necesitas Routes y Route
import { Routes, Route } from "react-router-dom"; 
import Home from './pages/home.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Login from './pages/login.jsx';
import Productos from './pages/Productos.jsx';
import Navbar from './components/Navbar.jsx';
import Registro from "./pages/registro.jsx";
// 2. Importa tu componente Carrito
import Carrito from "./pages/Carrito.jsx"; 
import { ContextoFiltros } from "./Contexts/ContextoFiltros.jsx";
import { AuthProvider } from '../src/contexts/AuthContext';


function App(){
  return(
    <AuthProvider>
      <ContextoFiltros>
        {/* BrowserRouter se fue de aquí */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          {/* 3. Añade la ruta para el carrito */}
          <Route path="/carrito" element={<Carrito />} /> 
          {/*<Route path="/detalle_producto" element={<DetalleDeProducto />} />*/}
        </Routes>
      </ContextoFiltros>
    </AuthProvider>
  );
}

export default App;