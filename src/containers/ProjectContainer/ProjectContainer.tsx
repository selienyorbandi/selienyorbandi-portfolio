import { useContext, useRef } from "react";
import { FormattedMessage } from "react-intl";
import Button from "../../components/Button/Button";
import IconsList from "../../components/IconsList/IconsList";
import Slider from "../../components/Slider/Slider";
import { projectContext } from "../../context/projectContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { Project } from "../../models/Project.model";

import styles from "./ProjectContainer.module.css";

function ProjectContainer({project} : {project: Project | null }) {
  
  const { isSelected, closeProject, prevProject, nextProject} = useContext(projectContext);
  const projectSelectorRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(projectSelectorRef, () => closeProject());
  
  return (
    isSelected ? 
      <div className={styles.ProjectContainer__background} >
        <article className={styles.ProjectContainer} ref={projectSelectorRef} >
          {
            project !== null &&
        <>
          <div className={styles.ProjectContainer__ExitBtn} onClick={()=> closeProject()}>&#10006;</div>
          <div className={styles.ProjectContainer__Content} >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className={styles.ProjectContainer__DescriptionList}>
              {project.description_list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <div className={styles.ProjectContainer__Techs}>
              <h3><FormattedMessage id="project.technologies" defaultMessage="Technologies"/></h3>
              <IconsList icons={project.technologies}/>
            </div>
          </div>
          <div className={styles.ProjectContainer__Slides}>
            <Slider images={project.images}/>
            <div className={styles.ProjectContainer__LinkButtons}>
              <a href={project.deployLink} target="_blank" rel="noreferrer"><Button textId="project.deployBtnLink" defaultText="Go to site"/></a>
              <a href={project.repositoryLink} target="_blank" rel="noreferrer"><Button textId="project.repositoryBtnLink" defaultText="See source code" topColor="#008AB0" bottomColor="#00B2DF"/></a>
            </div>
          </div>
          <div className={styles.ProjectContainer__PrevSlide} onClick={()=> prevProject(project.id)}>{"<"}</div>
          <div className={styles.ProjectContainer__NextSlide} onClick={()=> nextProject(project.id)}>{">"}</div>
        </>
          }   
        </article>
      </div>
      : <></>
  );
}

export default ProjectContainer;
