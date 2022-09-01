import { FormattedMessage } from "react-intl";

import ContactForm from "../../components/ContactForm/ContactForm";

import contactDeco from "../../assets/contact-design.webp";
import emailIco from "../../assets/icon_email.png";
import linkedinIco from "../../assets/icon_linkedin.png";
import telegramIco from "../../assets/icon_telegram.png";

import styles from "./ContactContainer.module.css";

function ContactContainer(): JSX.Element {
  return (
    <section id="contact" className={styles.ContactContainer}>
      <div className={styles.ContactContainer__Form}>
        <ContactForm />
      </div>
      <div className={styles.VerticalSeparator}></div>
      <div className={styles.ContactContainer__Moreoptions}>
        <img
          src={contactDeco}
          alt="Contact me"
          width="300px"
          height="250px"
          className={styles.ContactContainer__Moreoptions__DecoImg}
        />
        <p>
          <FormattedMessage id="contact.moreoptions" defaultMessage="Or let's talk in" />
        </p>
        <div className={styles.ContactContainer__LinkIcos}>
          <a href="https://www.linkedin.com/in/selien-yorbandi" target="_blank" rel="noreferrer">
            <img src={linkedinIco} alt="Linkedin" width="62px" height="62px" />
          </a>
          <a href="mailto:selienyorbandi@gmail.com" target="_blank" rel="noreferrer">
            <img src={emailIco} alt="Email" width="62px" height="62px" />
          </a>
          <a href="https://t.me/SelienYorbandi" target="_blank" rel="noreferrer">
            <img src={telegramIco} alt="Telegram" width="62px" height="62px" />
          </a>
        </div>
        <p>selienyorbandi@gmail.com</p>
      </div>
    </section>
  );
}

export default ContactContainer;
