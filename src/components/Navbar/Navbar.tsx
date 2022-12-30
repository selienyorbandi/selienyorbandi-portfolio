import brandlogo from "../../assets/brandLogo.png";
import me from "../../assets/me.png";
import briefcase from "../../assets/briefcase.png";
import home from "../../assets/home-ico.png";
import contact from "../../assets/contact.png";
import cv from "../../assets/cv-ico.png";

import styles from "./Navbar.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import LangSelector from "../LangSelector/LangSelector";
import { useContext } from "react";
import { langContext } from "../../context/langContext";

function Navbar(): JSX.Element {
  const intl = useIntl();
  const { locale } = useContext(langContext);

  return (
    <>
      <nav className={styles.Navbar__Mobile}>
        <ul>
          <li>
            <a href="#home" onClick={() => window.scroll(0, 0)}>
              <span>
                <FormattedMessage id="nav.home" defaultMessage="Home" />
              </span>
              <img src={home} alt={intl.formatMessage({ id: "nav.home" })} />
            </a>
          </li>
          <li>
            <a href="#aboutme">
              <span>
                <FormattedMessage id="nav.aboutme" defaultMessage="About me" />
              </span>
              <img src={me} alt={intl.formatMessage({ id: "nav.aboutme" })} />
            </a>
          </li>
          <li>
            <a href="#projects">
              <span>
                <FormattedMessage id="nav.projects" defaultMessage="Projects" />
              </span>
              <img src={briefcase} alt={intl.formatMessage({ id: "nav.projects" })} />
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>
                <FormattedMessage id="nav.contact" defaultMessage="Contact" />
              </span>
              <img src={contact} alt={intl.formatMessage({ id: "nav.contact" })} />
            </a>
          </li>
          <li>
            <a
              href={
                locale === "es-AR"
                  ? "https://drive.google.com/file/d/1EBdtyW6m4JLspcDI3h1SLmwJSkrY1seo/view?usp=sharing"
                  : "https://drive.google.com/file/d/1vCpi8mGL-UVVDvmjA5afTw0lhCvlzzo6/view?usp=sharing"
              }
              target="_blank"
              rel="noreferrer">
              <span>
                <FormattedMessage id="nav.cv" defaultMessage="CV" />
              </span>
              <img src={cv} alt={intl.formatMessage({ id: "nav.cv" })} />
            </a>
          </li>
        </ul>
      </nav>
      <nav className={styles.Navbar__Desktop}>
        <a href="#" className={styles.Navbar__Desktop__Brand}>
          <img src={brandlogo} alt="Selien Yorbandi" />
        </a>
        <ul className={styles.Navbar__Desktop__List}>
          <li>
            <a href="#" onClick={() => window.scroll(0, 0)}>
              <FormattedMessage id="nav.home" defaultMessage="Home" />
            </a>
          </li>
          <li>
            <a href="#aboutme">
              <FormattedMessage id="nav.aboutme" defaultMessage="About me" />
            </a>
          </li>
          <li>
            <a href="#projects">
              <FormattedMessage id="nav.projects" defaultMessage="Projects" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <FormattedMessage id="nav.contact" defaultMessage="Contact" />
            </a>
          </li>
        </ul>
        <div className={styles.Navbar__Desktop__SideContent}>
          <LangSelector />
          <a
            href={
              locale === "es-AR"
                ? "https://drive.google.com/file/d/1EBdtyW6m4JLspcDI3h1SLmwJSkrY1seo/view?usp=sharing"
                : "https://drive.google.com/file/d/1vCpi8mGL-UVVDvmjA5afTw0lhCvlzzo6/view?usp=sharing"
            }
            target="_blank"
            rel="noreferrer">
            <button className={styles.Navbar__Desktop__CV}>
              <FormattedMessage id={"nav-cvDownload"} defaultMessage="Download CV" />
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
