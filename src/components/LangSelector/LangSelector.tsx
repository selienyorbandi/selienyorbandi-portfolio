import { useContext, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import langIco from ".././../assets/language-ico.svg";
import styles from "./LangSelector.module.css";

function LangSelector() {
  const { setLanguage } = useContext(langContext);
  const [active, setActive] = useState(false);
  const langSelectorRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(langSelectorRef, () => setActive(false));

  return (
    <div className={styles.LangSelector} ref={langSelectorRef}>
      <img src={langIco} alt="Language selector" onClick={() => setActive(!active)} />
      {active ? (
        <ul>
          <div onClick={() => setLanguage("en-US")}>
            <li>
              <FormattedMessage id="lang.en" defaultMessage="English" />
            </li>
          </div>{" "}
          |
          <div onClick={() => setLanguage("es-AR")}>
            <li>
              <FormattedMessage id="lang.es" defaultMessage="Spanish" />
            </li>
          </div>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LangSelector;
