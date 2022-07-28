import { FormattedMessage, useIntl } from "react-intl";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import styles from "./ProjectsContainer.module.css";

function ProjectsContainer() : JSX.Element {
  const intl = useIntl();
  
  return (
    <section className={styles.Projects} id="projects">
      <Header bottom={intl.formatMessage({ id: "projects.title" })} />
      <p className={styles.Projects__Instructions}>
        <FormattedMessage id={"projects.instructions"} defaultMessage="Double click on each project for more details"/>
      </p>
      <div>
        <Carousel/>
      </div>
      <button onClick={() => window.open("https://github.com/selienyorbandi", "_blank")}><FormattedMessage id={"projects.seemore"} defaultMessage="See more projects"/></button>
    </section>
  );
}

export default ProjectsContainer;
