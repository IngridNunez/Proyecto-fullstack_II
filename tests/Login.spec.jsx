import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext";
import Login from "../src/pages/login.jsx";

const renderWithProviders = (ui) =>
  render(
    <MemoryRouter>
      <AuthProvider>{ui}</AuthProvider>
    </MemoryRouter>
  );

describe("Componente Login", () => {
  it("renderiza el título correctamente", () => {
    renderWithProviders(<Login />);
    expect(screen.getByText(/iniciar/i)).toBeInTheDocument();
  });

  it("contiene un formulario de inicio de sesión", () => {
    renderWithProviders(<Login />);
    expect(screen.getByLabelText(/usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
  });

  it("renderiza el botón de inicio de sesión", () => {
  renderWithProviders(<Login />);
  expect(screen.getByRole("button", { name: /ingresar|iniciar/i })).toBeInTheDocument();
  });
});

