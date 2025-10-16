import { productos } from "../db/productos";
import { useParams } from "react-router-dom";


function DetalleDeProducto() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  return (
    <>
      <section className="product-detail py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="product-image text-center mb-4">
                        <img id="main-product-image" src={`../${producto.image}`} alt="Imagen del producto" className="img-fluid rounded" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="product-title" id="product-title">{producto.name}</h1>
                    <p className="product-price h4 text-primary" id="product-price">${producto.price}</p>
                    <div className="product-description my-4" id="product-description">{producto.description}</div>

                    <div className="customization-options mb-4">
                        <div className="size-options mb-3">
                            <h5>Tamaño:</h5>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-outline-primary size-btn active" data-size="pequeno">Pequeño</button>
                                <button type="button" className="btn btn-outline-primary size-btn" data-size="mediano">Mediano</button>
                                <button type="button" className="btn btn-outline-primary size-btn" data-size="grande">Grande</button>
                            </div>
                        </div>
                        
                        <div className="message-option mb-3">
                            <h5>Mensaje personalizado (opcional):</h5>
                            <textarea className="form-control message-input" placeholder="Escribe tu mensaje aquí (máx. 50 caracteres)" maxLength="50" rows="2"></textarea>
                        </div>
                    </div>
                    
                    <div className="add-to-cart-section mb-4">
                        <div className="d-flex align-items-center">
                            <div className="quantity-selector me-3">
                                <button className="btn btn-outline-secondary quantity-btn" id="decrease-quantity">-</button>
                                <input type="number" className="quantity-input form-control text-center mx-2" id="product-quantity" placeholder="1" min="1" />
                                <button className="btn btn-outline-secondary quantity-btn" id="increase-quantity">+</button>
                            </div>
                            <button className="btn btn-primary btn-lg" id="add-to-cart-detail">Añadir al carrito</button>
                        </div>
                    </div>

                    <div className="product-details">
                        <div className="detail-item mb-2">
                            <strong>Categoría:</strong> <span id="product-category"></span>
                        </div>
                        <div className="detail-item">
                            <strong>Disponibilidad:</strong> <span className="text-success">En stock</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    </>
  );
}

export default DetalleDeProducto;


