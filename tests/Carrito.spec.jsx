// tests/Carrito.spec.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Carrito from '../src/pages/Carrito';
import { CarritoContext } from '../src/Contexts/CarritoContext';

// --- Escenario 1: El carrito está vacío ---
describe('Componente Carrito (Vacío)', () => {
    test('debe mostrar el mensaje "El carrito está vacío" si no hay productos', () => {
        const mockContextoVacio = {
            carrito: [], // Simulamos un carrito vacío
            agregarProducto: vi.fn(),
            eliminarProducto: vi.fn(),
            vaciarCarrito: vi.fn(),
        };

        render(
            <CarritoContext.Provider value={mockContextoVacio}>
                <Carrito />
            </CarritoContext.Provider>
        );

        // Verificamos que el mensaje correcto se muestre en pantalla
        expect(screen.getByText('El carrito está vacío.')).toBeInTheDocument();
    });
});

// --- Escenario 2: El carrito tiene productos ---
describe('Componente Carrito (con productos)', () => {
    // Datos de prueba para simular productos en el carrito
    const productosDePrueba = [
        { id: 1, name: 'Torta de Chocolate', price: 15000, cantidad: 2, image: 'img/torta.jpg' },
        { id: 2, name: 'Cheesecake de Fresa', price: 12000, cantidad: 1, image: 'img/cheesecake.jpg' },
    ];

    const mockContextoConProductos = {
        carrito: productosDePrueba,
        agregarProducto: vi.fn(),
        eliminarProducto: vi.fn(), // Usamos vi.fn() para simular funciones
        vaciarCarrito: vi.fn(),
    };

    test('debe renderizar los productos que están en el carrito', () => {
        render(
            <CarritoContext.Provider value={mockContextoConProductos}>
                <Carrito />
            </CarritoContext.Provider>
        );

        // Verificamos que los nombres y precios de los productos aparezcan
        expect(screen.getByText('Torta de Chocolate')).toBeInTheDocument();
        expect(screen.getByText('$12000')).toBeInTheDocument();
    });

    test('debe mostrar el total correcto de la compra', () => {
        render(
            <CarritoContext.Provider value={mockContextoConProductos}>
                <Carrito />
            </CarritoContext.Provider>
        );
        // El total debería ser (15000 * 2) + (12000 * 1) = 42000
        const total = screen.getByText(/Total: \$42000.00/i);
        expect(total).toBeInTheDocument();
    });

    test('debe llamar a la función eliminarProducto al hacer clic en el ícono de basura', () => {
        render(
            <CarritoContext.Provider value={mockContextoConProductos}>
                <Carrito />
            </CarritoContext.Provider>
        );
        
        // Buscamos todos los botones con el ícono de basura
        const botonesEliminar = screen.getAllByText('🗑️');
        // Simulamos un clic en el primer botón de eliminar (el de la Torta de Chocolate)
        fireEvent.click(botonesEliminar[0]);

        // Verificamos que la función del contexto fue llamada con el ID correcto (1)
        expect(mockContextoConProductos.eliminarProducto).toHaveBeenCalledWith(1);
    });
});