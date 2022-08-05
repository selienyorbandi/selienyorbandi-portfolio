import { FormattedMessage } from "react-intl";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <form
      action="https://www.actionforms.io/e/r/contact-selien-yorbandi"
      method="POST"
      className={styles.ContactForm}>
      <h3>
        <FormattedMessage id="contact.form.title" defaultMessage="Get in touch" />
      </h3>
      <div>
        <label htmlFor="Name">
          <FormattedMessage id="contact.form.name" defaultMessage="Name" />
        </label>
        <input type="text" name="Name" required={true}/>
      </div>
      <div>
        <label htmlFor="Email">
          <FormattedMessage id="contact.form.email" defaultMessage="Email" />
        </label>
        <input type="email" name="Email" required={true} />
      </div>
      <div>
        <label htmlFor="Message">
          <FormattedMessage id="contact.form.message" defaultMessage="Your message" />
        </label>
        <textarea id="Message" name="Message" required={true}/>
      </div>
      <Button btnType="submit" textId="contact.form.submit" defaultText="Contact me" disabled/>
    </form>
  );
}

export default ContactForm;
