import { useContext } from "react";
import { langContext } from "../context/langContext";
import projectsEs from "../assets/json/projects-es.json";
import projectsEn from "../assets/json/projects-en.json";

export function getProject(id: number) {
  
  const { locale } = useContext(langContext);
  const projects = locale === "es-AR" ? projectsEs : projectsEn;
  const project = projects.filter(project => id === project.id);
  if (project != undefined) {
    return project[0];
  } else {
    return null;
  }
}
