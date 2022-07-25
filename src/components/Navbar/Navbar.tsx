import brandlogo from "../../assets/brandLogo.png";
import me from "../../assets/me.png";
import briefcase from "../../assets/briefcase.png";
import home from "../../assets/home-ico.png";
import contact from "../../assets/contact.png";
import cv from "../../assets/cv-ico.png";

import styles from "./Navbar.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import LangSelector from "../LangSelector/LangSelector";

function Navbar(): JSX.Element {
  const intl = useIntl();

  return (
    <>
      <nav className={styles.Navbar__Mobile}>
        <ul>
          <li>
            <span>
              <FormattedMessage id="nav.home" defaultMessage="Home" />
            </span>
            <img src={home} alt={intl.formatMessage({ id: "nav.home" })}/>
          </li>
          <li>
            <span>
              <FormattedMessage id="nav.aboutme" defaultMessage="About me" />
            </span>
            <img src={me} alt={intl.formatMessage({ id: "nav.aboutme" })}/>
          </li>
          <li>
            <span>
              <FormattedMessage id="nav.projects" defaultMessage="Projects" />
            </span>
            <img src={briefcase} alt={intl.formatMessage({ id: "nav.projects" })}/>
          </li>
          <li>
            <span>
              <FormattedMessage id="nav.contact" defaultMessage="Contact" />
            </span>
            <img src={contact} alt={intl.formatMessage({ id: "nav.contact" })}/>
          </li>
          <li>
            <span>
              <FormattedMessage id="nav.cv" defaultMessage="CV" />
            </span>
            <img src={cv} alt={intl.formatMessage({ id: "nav.cv" })}/>
          </li>
        </ul>
      </nav>
      <nav className={styles.Navbar__Desktop}>
        <div>
          <img src={brandlogo} alt="Selien Yorbandi" />
        </div>
        <ul className={styles.Navbar__Desktop__List}>
          <li>
            <FormattedMessage id="nav.home" defaultMessage="Home" />
          </li>
          <li>
            <FormattedMessage id="nav.aboutme" defaultMessage="About me" />
          </li>
          <li>
            <FormattedMessage id="nav.projects" defaultMessage="Projects" />
          </li>
          <li>
            <FormattedMessage id="nav.contact" defaultMessage="Contact" />
          </li>
        </ul>
        <div className={styles.Navbar__Desktop__SideContent}>
          <LangSelector />
          <a
            href="https://drive.google.com/file/d/10r-kLdMN2YP-wJMaRsy0LSHLKtcuumah"
            target="_blank"
            rel="noreferrer">
            <button className={styles.Navbar__Desktop__CV}>
              <FormattedMessage id={"nav-cvDownload"} defaultMessage="Download CV"/>
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
