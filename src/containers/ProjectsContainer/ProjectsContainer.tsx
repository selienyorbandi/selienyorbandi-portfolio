import { FormattedMessage, useIntl } from "react-intl";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import styles from "./ProjectsContainer.module.css";

function ProjectsContainer() {
  const intl = useIntl();

  return (
    <section className={styles.Projects}>
      <Header bottom={intl.formatMessage({ id: "projects.title" })} />
      <p className={styles.Projects__Instructions}>
        <FormattedMessage id={"projects.instructions"} defaultMessage="Click on each project for more details"/>
      </p>
      <div>
        <Carousel/>
      </div>
      <button><FormattedMessage id={"projects.seemore"} defaultMessage="See more projects"/></button>
    </section>
  );
}

export default ProjectsContainer;
