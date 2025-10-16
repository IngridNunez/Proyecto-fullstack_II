import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";    
import NavbarComponent from "../src/components/Navbar.jsx";

describe("Componente Navbar", () => {
  it("renderiza correctamente", () => {
    render(
      <MemoryRouter>
        <NavbarComponent />
      </MemoryRouter>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});


it("contiene los enlaces principales con href correctos", () => {
    render(
      <MemoryRouter>
        <NavbarComponent />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: /productos/i })).toHaveAttribute("href", "/productos");
    expect(screen.getByRole("link", { name: /nosotros/i })).toHaveAttribute("href", "/nosotros");
    expect(screen.getByRole("link", { name: /contacto/i })).toHaveAttribute("href", "/contacto");
    expect(screen.getByRole("link", { name: /blog/i })).toHaveAttribute("href", "/blog");
});