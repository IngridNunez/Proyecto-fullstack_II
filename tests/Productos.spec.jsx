// tests/Productos.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import Productos from '../src/pages/Productos';
// CORRECCIÓN DEFINITIVA: Importamos el objeto de contexto, no el componente.
import { FiltrosContext } from '../src/Contexts/ContextoFiltros';
import { CarritoContext } from '../src/Contexts/CarritoContext';
import { AuthContext } from '../src/contexts/AuthContext';

// --- Mocking de la base de datos ---
vi.mock('../src/db/productos.js', () => ({
    productos: [
        { id: 1, name: 'Torta de Chocolate', category: 'Tortas Circulares', price: 15000, image: 'mock.jpg', description: 'desc' },
        { id: 2, name: 'Cheesecake de Fresa', category: 'Postres Individuales', price: 12000, image: 'mock.jpg', description: 'desc' },
        { id: 3, name: 'Torta de Mil Hojas', category: 'Pastelería Tradicional', price: 18000, image: 'mock.jpg', description: 'desc' },
    ],
}));

// --- Proveedor de Contexto Falso ---
const TestAppProvider = ({ children }) => {
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(25000);
    const [category, setCategory] = React.useState("Todos");

    return (
        <MemoryRouter>
            <AuthContext.Provider value={{ user: null }}>
                <CarritoContext.Provider value={{ agregarProducto: vi.fn(), carrito: [] }}>
                    <FiltrosContext.Provider value={{ minPrice, maxPrice, category, setMinPrice, setMaxPrice, setCategory }}>
                        {children}
                    </FiltrosContext.Provider>
                </CarritoContext.Provider>
            </AuthContext.Provider>
        </MemoryRouter>
    );
};

// --- Inicio de las Pruebas ---
describe('Página de Productos', () => {
    test('debe renderizar la lista completa de productos de prueba inicialmente', () => {
        render(
            <TestAppProvider>
                <Productos />
            </TestAppProvider>
        );
        expect(screen.getByText('Torta de Chocolate')).toBeInTheDocument();
        expect(screen.getByText('Cheesecake de Fresa')).toBeInTheDocument();
        expect(screen.getByText('Torta de Mil Hojas')).toBeInTheDocument();
    });

    test('debe filtrar los productos correctamente cuando el usuario selecciona una categoría', async () => {
        const user = userEvent.setup();
        render(
            <TestAppProvider>
                <Productos />
            </TestAppProvider>
        );

        const categorySelect = screen.getByLabelText('Categoría:');
        await user.selectOptions(categorySelect, 'Postres Individuales');

        expect(screen.getByText('Cheesecake de Fresa')).toBeInTheDocument();
        expect(screen.queryByText('Torta de Chocolate')).not.toBeInTheDocument();
        expect(screen.queryByText('Torta de Mil Hojas')).not.toBeInTheDocument();
    });
});