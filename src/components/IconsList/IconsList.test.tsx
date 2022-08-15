import { render } from "@testing-library/react";
import { LangProvider } from "../../context/langContext";
import IconsList from "./IconsList";

const mockIconsList = [
  {
    id: 101,
    imgSrc: "https://gitlab.com/selienyorbandi/assets/-/raw/main/Icons/technologies/react-tech.png",
    thumbSrc:
      "https://gitlab.com/selienyorbandi/assets/-/raw/main/Icons/technologies/react-tech.png",
    alt: "React JS. Hooks.",
    title: "React JS",
  },
  {
    id: 100,
    imgSrc: "https://gitlab.com/selienyorbandi/assets/-/raw/main/Icons/technologies/js-tech.png",
    thumbSrc: "https://gitlab.com/selienyorbandi/assets/-/raw/main/Icons/technologies/js-tech.png",
    alt: "Javascript. ECMA 6+",
    title: "Javascript",
  },
  {
    id: 103,
    imgSrc: "https://gitlab.com/selienyorbandi/assets/-/raw/main/Icons/technologies/css-tech.png",
    thumbSrc: "https://gitlab.com/selienyorbandi/assets/-/raw/main/Icons/technologies/css-tech.png",
    alt: "CSS 3. Css modules",
    title: "CSS 3",
  },
  {
    id: 107,
    imgSrc: "https://gitlab.com/selienyorbandi/assets/-/raw/main/Icons/technologies/html-tech.png",
    thumbSrc:
      "https://gitlab.com/selienyorbandi/assets/-/raw/main/Icons/technologies/html-tech.png",
    alt: "HTML 5. Semantic HTML",
    title: "HTML 5",
  },
];

test("renders content", () => {
  const iconsListRender = render(
    <LangProvider>
      <IconsList icons={mockIconsList} />
    </LangProvider>
  );

  expect(iconsListRender.container).toBeVisible();
});
