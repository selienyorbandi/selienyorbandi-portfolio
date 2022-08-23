import { FormattedMessage } from "react-intl";

import ContactForm from "../../components/ContactForm/ContactForm";

import contactDeco from "../../assets/contact-design.png";
import emailIco from "../../assets/icon_email.png";
import linkedinIco from "../../assets/icon_linkedin.png";
import telegramIco from "../../assets/icon_telegram.png";

import styles from "./ContactContainer.module.css";

function ContactContainer(): JSX.Element {
  return (
    <section id="contact" className={styles.ContactContainer} >
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
            <img src={linkedinIco} alt="Linkedin" />
          </a>
          <a href="mailto:selienyorbandi@gmail.com" target="_blank" rel="noreferrer">
            <img src={emailIco} alt="Email" />
          </a>
          <a href="https://t.me/SelienYorbandi" target="_blank" rel="noreferrer">
            <img src={telegramIco} alt="Telegram" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactContainer;
