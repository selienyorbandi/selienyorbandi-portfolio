import { useContext } from "react";
import { langContext } from "../../context/langContext";
import { FormattedMessage, useIntl } from "react-intl";
import DownBtn from "../../components/DownBtn/DownBtn";
import Header from "../../components/Header/Header";
import IconsList from "../../components/IconsList/IconsList";

import aboutMe from "../../assets/json/aboutme.json";
import aboutmeImg from "../../assets/aboutme-img.jpg";
import styles from "./AboutMeContainer.module.css";

function AboutMeContainer(): JSX.Element {
  const { locale } = useContext(langContext);
  const intl = useIntl();

  return (
    <section id="aboutme" className={styles.AboutMe}>
      <Header bottom={intl.formatMessage({ id: "aboutme.title" })} />
      <div className={styles.AboutMe__Content}>
        <img src={aboutmeImg} alt="dev" width="200px" />
        {locale === "es-AR"
          ? aboutMe.es.map((paragraph, index) => <p key={`aboutme${index}`}>{paragraph}</p>)
          : aboutMe.en.map((paragraph, index) => <p key={`aboutme${index}`}>{paragraph}</p>)}
      </div>
      <article className={styles.AboutMe__Techs}>
        <h3>
          <FormattedMessage id="aboutme.techs" defaultMessage="Technologies" />
        </h3>
        <IconsList icons={aboutMe.technologies} />
      </article>
      <div className={styles.AboutMe__DownBtn}>
        <DownBtn link="#projects" />
      </div>
    </section>
  );
}

export default AboutMeContainer;
