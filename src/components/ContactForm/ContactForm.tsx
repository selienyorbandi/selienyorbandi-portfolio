import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const intl = useIntl();
  const [nameForm, setName] = useState("");
  const [emailForm, setEmail] = useState("");
  const [messageForm, setMessage] = useState("");
  const [error, setError] = useState({ exist: false, errorMsg: "" });
  const [success, setSuccess] = useState(false);

  const isValidEmail = () => {
    const regExpr =
      /^[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9]){1,}?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9]){1,}?$/;
    if (regExpr.test(emailForm)) {
      return { isvalid: true, errorMsg: null };
    } else {
      return {
        isvalid: false,
        errorMsg: `${intl.formatMessage({ id: "form.error.invalidemail" })}`,
      };
    }
  };

  const validateInputs = () => {
    if (nameForm !== "" && emailForm !== "" && messageForm !== "") {
      console.log(isValidEmail());
      return isValidEmail();
    } else {
      return { isvalid: false, errorMsg: intl.formatMessage({ id: "form.error.emptyfield" }) };
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateInputs()?.isvalid) {
      const formdata = new FormData();
      formdata.set("Name", nameForm);
      formdata.set("Email", emailForm);
      formdata.set("Message", messageForm);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://www.actionforms.io/e/r/contact-selien-yorbandi", true);
      xhr.send(formdata);
      setError({ exist: false, errorMsg: "" });
      setSuccess(true);
      e.target.reset();
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } else {
      setError({ exist: true, errorMsg: validateInputs()?.errorMsg || "Error" });
      setTimeout(() => {
        setError({ exist: false, errorMsg: "" });
      }, 5000);
    }
  };

  return (
    <form className={styles.ContactForm} onSubmit={e => handleSubmit(e)} id="contactForm">
      <h3>
        <FormattedMessage id="contact.form.title" defaultMessage="Get in touch" />
      </h3>
      <div>
        <label htmlFor="Name">
          <FormattedMessage id="contact.form.name" defaultMessage="Name" />
        </label>
        <input
          type="text"
          name="Name"
          id="Name"
          required={true}
          onChange={e => setName(e.target.value)}
          value={nameForm}
        />
      </div>
      <div>
        <label htmlFor="Email">
          <FormattedMessage id="contact.form.email" defaultMessage="Email" />
        </label>
        <input
          type="email"
          name="Email"
          id="Email"
          required={true}
          onChange={e => setEmail(e.target.value)}
          value={emailForm}
        />
      </div>
      <div>
        <label htmlFor="Message">
          <FormattedMessage id="contact.form.message" defaultMessage="Your message" />
        </label>
        <textarea
          id="Message"
          name="Message"
          required={true}
          onChange={e => setMessage(e.target.value)}
          value={messageForm}
        />
      </div>
      {error.exist && <p className={styles.ContactForm__ErrorMsg}> {error.errorMsg} </p>}
      {success && (
        <p className={styles.ContactForm__Success}>
          {" "}
          {`${intl.formatMessage({ id: "form.success" })}`}{" "}
        </p>
      )}
      <Button btnType="submit" textId="contact.form.submit" defaultText="Contact me" />
    </form>
  );
}

export default ContactForm;
