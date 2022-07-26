import { render } from "@testing-library/react";
import { LangProvider } from "../../context/langContext";
import ProjectsContainer from "./ProjectsContainer";

test("renders content", () => {
  const homeRender = render(
    <LangProvider>
      <ProjectsContainer />
    </LangProvider>
  );
    
  expect(homeRender.container).toBeVisible();
});