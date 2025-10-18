import { useState } from 'react';
import './App.css';
import { ProductList } from './pages/ProductList.jsx';
import Navbar from './components/Navbar.jsx';
import React from 'react';
import { productos } from './db/productos.js';
import Nosotros from './pages/Nosotros.jsx'
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
<<<<<<< Updated upstream

// Lista de productos 


function App() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(25000);
  const [category, setCategory] = useState("Todos");
  const [filtreredProducts, setFiltredProducts] = useState(productos);

  const handleFilter = () => {
    const newfiltredProducts = productos.filter(product => {
      const priceInrange = product.price >= minPrice && product.price <= maxPrice;
      const inSelectedCategory = category === "Todos" || product.category === category;
      return priceInrange && inSelectedCategory;
    });
    setFiltredProducts(newfiltredProducts);
  };

  return (
    <div className='app-container'>
      <div className="filter-section">
        <label>
          Precio mínimo:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Precio máximo:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Categoría:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value='Todos'>Todos</option>
            <option value='Tortas Circulares'>Tortas Circulares</option>
            <option value='Tortas Cuadradas'>Tortas Cuadradas</option>
            <option value='Postres Individuales'>Postres Individuales</option>
            <option value='Sin Azúcar'>Sin Azúcar</option>
            <option value='Tradicional'>Tradicional</option>
            <option value='Sin Gluten'>Sin Gluten</option>
          </select>
        </label>
        <button onClick={handleFilter}>Aplicar Filtros</button>
      </div>

    {/* <ProductList products={filtreredProducts} /> */}


      <ProductList min = {minPrice} max = {maxPrice} category = {category} />
      
    </div>
  );
=======
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
>>>>>>> Stashed changes
}

export default App;
