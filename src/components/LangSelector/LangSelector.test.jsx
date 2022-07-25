import { render } from "@testing-library/react";
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