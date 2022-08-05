import { FormattedMessage, useIntl } from "react-intl";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import styles from "./ProjectsContainer.module.css";

function handleClick() {
  window.open("https://github.com/selienyorbandi", "_blank");
}

function ProjectsContainer(): JSX.Element {
  const intl = useIntl();

  return (
    <section className={styles.Projects} id="projects">
      <Header bottom={intl.formatMessage({ id: "projects.title" })} />
      <p className={styles.Projects__Instructions}>
        <FormattedMessage
          id={"projects.instructions"}
          defaultMessage="Double click on each project for more details"
        />
      </p>
      <div>
        <Carousel />
      </div>
      <Button textId="projects.seemore" defaultText="See more projects" onClickFn={handleClick} />
    </section>
  );
}

export default ProjectsContainer;
