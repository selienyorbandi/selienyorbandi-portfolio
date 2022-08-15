import { render } from "@testing-library/react";
import { LangProvider } from "../../context/langContext";
import ContactForm from "./ContactForm";

test("renders content", () => {
  const contactFormRender = render(
    <LangProvider>
      <ContactForm/>
    </LangProvider>
  );
    
  expect(contactFormRender.container).toBeVisible();
});
