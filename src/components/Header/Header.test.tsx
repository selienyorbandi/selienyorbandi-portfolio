import { render } from "@testing-library/react";
import { LangProvider } from "../../context/langContext";
import Header from "./Header";

test("renders content", () => {
  const headerRender = render(
    <LangProvider>
      <Header top="Selien Yorbandi" bottom="Lorem ipsum" />
    </LangProvider>
  );

  expect(headerRender.container).toBeVisible();
});
