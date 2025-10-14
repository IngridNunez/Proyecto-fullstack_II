import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Login from './pages/login.jsx';
import Productos from './pages/Productos.jsx';
import Navbar from './components/Navbar.jsx';
import Registro from "./pages/registro.jsx";
import { ContextoFiltros } from "./Contexts/ContextoFiltros.jsx";
import { AuthProvider } from '../src/contexts/AuthContext';

function App(){
  return(
    <AuthProvider>
      <ContextoFiltros>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            {/*<Route path="/detalle_producto" element={<DetalleDeProducto />} />*/}
          </Routes>
        </BrowserRouter>
      </ContextoFiltros>
    </AuthProvider>
    
  )
}

export default App;