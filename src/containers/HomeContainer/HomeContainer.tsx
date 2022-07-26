import { FormattedMessage, useIntl } from "react-intl";
import gif from "../../assets/aboutme.gif";
import Header from "../../components/Header/Header";
import styles from "./HomeContainer.module.css";

function HomeContainer(): JSX.Element {
  const intl = useIntl();
  
  return (
    <>
      <Header top="Selien Yorbandi" bottom={intl.formatMessage({ id: "header.title" })} isMain/>
      <section className={styles.Home}>
        <p>
          <FormattedMessage
            id="home.body"
            defaultMessage="I develop modern, efficient and interactive web apps in React Js focused on a good user experience. I train and keep myself updated to offer real solutions to real problems."
          />
        </p>
        <div>
          <img src={gif} loading="lazy" alt="Developer" />
        </div>
      </section>
    </>
  );
}

export default HomeContainer;
