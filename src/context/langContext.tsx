import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import englishMessages from "../lang/en-US.json";
import spanishMessages from "../lang/es-AR.json";

const langContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLanguage: (language: string) => console.log(""),
  locale: "en-US",
});

function LangProvider({ children }: { children: JSX.Element }): JSX.Element {
  const adaptLanguage = (language: string) => {
    if (language.slice(0, 2) === "es") {
      return "es-AR";
    } else {
      return "en-US";
    }
  };

  const setDefMessages = (language: string) => {
    if (language === "en-US") {
      return englishMessages;
    } else if (language === "es-AR") {
      return spanishMessages;
    } else {
      return englishMessages;
    }
  };

  const getPreferredDefLanguage = () => {
    const language = window.navigator.language;
    return adaptLanguage(language);
  };

  const getSelectedLanguage = () => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      localeDefault = lang;
      messagesDefault = setDefMessages(lang);
    }
  };

  let localeDefault = getPreferredDefLanguage();
  let messagesDefault = setDefMessages(localeDefault);
  getSelectedLanguage();

  const [messages, setMessages] = useState(messagesDefault);
  const [locale, setLocale] = useState(localeDefault || "en-US");

  const setLanguage = (language: string) => {
    switch (language) {
      case "es-AR":
        setMessages(spanishMessages);
        setLocale("es-AR");
        localStorage.setItem("lang", "es-AR");
        break;
      case "en-US":
        setMessages(englishMessages);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      default:
        setMessages(englishMessages);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
    }
  };

  return (
    <langContext.Provider value={{ setLanguage, locale }}>
      <IntlProvider locale={`${locale}`} defaultLocale="en-US" messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
}

export { LangProvider, langContext };
