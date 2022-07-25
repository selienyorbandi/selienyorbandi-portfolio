import { FormattedMessage } from "react-intl";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.Header}>
      <h1>
        <span>Selien Yorbandi</span>
        <FormattedMessage id="header.title" defaultMessage="Frontend Developer"/>
      </h1>
    </header>
  );
}

export default Header;
