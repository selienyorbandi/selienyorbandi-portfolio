import { FormattedMessage } from "react-intl";
import gif from "../../assets/aboutme.gif";
import styles from "./AboutMeContainer.module.css";

function AboutMeContainer(): JSX.Element {
  return (
    <section className={styles.Aboutme}>
      <p>
        <FormattedMessage id="aboutMe.body" defaultMessage="I develop modern, efficient and interactive web apps in React Js focused on a good user experience. I train and keep myself updated to offer real solutions to real problems."/>
      </p>
      <div>
        <img src={gif} loading="lazy" alt="Developer" />
      </div>
    </section>
  );
}

export default AboutMeContainer;
