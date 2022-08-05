import { fireEvent, render, screen } from "@testing-library/react";
import { LangProvider } from "../../context/langContext";
import LangSelector from "./LangSelector";

test("renders content", () => {
  const headerRender = render(
    <LangProvider>
      <LangSelector />
    </LangProvider>
  );
  expect(headerRender.container).toBeVisible();
});

test("show options", () => {
  const component = render(
    <LangProvider>
      <LangSelector />
    </LangProvider>
  );
  const toggler = component.getByAltText("Language selector");
  fireEvent.click(toggler);
  expect(screen.getByText("Spanish" || "Español"));
  expect(screen.getByText("English" || "Inglés"));
});
