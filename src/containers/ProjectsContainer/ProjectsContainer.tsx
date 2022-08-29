import { useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { projectContext } from "../../context/projectContext";

import { getProject } from "../../services/getProject";

import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";

import mainProjectsImg from "../../assets/json/main-projects.json";
import styles from "./ProjectsContainer.module.css";
import DownBtn from "../../components/DownBtn/DownBtn";

function ProjectsContainer(): JSX.Element {
  const intl = useIntl();
  const { currentProject, isSelected } = useContext(projectContext);

  return (
    <section className={styles.Projects} id="projects">
      <Header bottom={intl.formatMessage({ id: "projects.title" })} />
      <p className={styles.Projects__Instructions}>
        <FormattedMessage
          id={"projects.instructions"}
          defaultMessage="Double click on each project for more details"
        />
      </p>
      <div className={styles.Projects__Carousel}>
        <Carousel images={mainProjectsImg} />
      </div>
      <a
        href="https://github.com/selienyorbandi"
        target="_blank"
        rel="noreferrer"
        className={styles.Projects__AllProjects}>
        <Button textId="projects.seemore" defaultText="See more projects" />
      </a>
      {isSelected && <ProjectContainer project={getProject(currentProject)} />}
      <div className={styles.Projects__DownBtn}>
        <DownBtn link="#contact" />
      </div>
    </section>
  );
}

export default ProjectsContainer;
