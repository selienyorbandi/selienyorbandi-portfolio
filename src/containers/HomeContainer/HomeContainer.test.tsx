import { render, screen } from "@testing-library/react";
import { LangProvider } from "../../context/langContext";
import HomeContainer from "./HomeContainer";
import enUs from "../../lang/en-US.json";
import esAr from "../../lang/en-US.json";

test("renders content", () => {
  const homeRender = render(
    <LangProvider>
      <HomeContainer />
    </LangProvider>
  );
  expect(homeRender.container).toBeVisible();
});

test("show home body", () => {
  render(
    <LangProvider>
      <HomeContainer />
    </LangProvider>
  );
  expect(screen.getByText(enUs["home.body"] || esAr["home.body"]));
});
