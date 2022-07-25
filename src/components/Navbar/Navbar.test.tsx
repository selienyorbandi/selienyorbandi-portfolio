import { render, screen } from "@testing-library/react";
import { LangProvider } from "../../context/langContext";
import Navbar from "./Navbar";

test("renders content", () => {
  const navRender = render(
    <LangProvider>
      <Navbar />
    </LangProvider>
  );
  expect(navRender.container).toBeVisible();
  screen.getAllByText("Home" || "Inicio");
  screen.getAllByText("About me" || "Sobre mí");
  screen.getAllByText("Projects" || "Proyectos");
  screen.getAllByText("Contact" || "Contacto");
});