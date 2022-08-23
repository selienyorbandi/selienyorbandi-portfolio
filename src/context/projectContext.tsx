/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

const projectContext = React.createContext({
  currentProject: 1,
  isSelected: false,
  setProject: (id:number) => undefined,
  prevProject: (id:number) => undefined,
  nextProject: (id:number) => undefined,
  closeProject: () => undefined
});

function ProjectProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [currentProject, setCurrentProject] = useState(1);
  const [isSelected, setIsSelected] = useState(false);

  const scrollToView = () => {
    /* ProjectContainer have position absolute, so I have to scroll to its parent container (projects) */
    const view = document.getElementById("projects");
    view?.scrollIntoView();
  };

  const setProject = (id: number) => {
    setCurrentProject(id);
    setIsSelected(true);
    scrollToView();
    return undefined;
  };
  
  const closeProject = () => {
    setIsSelected(false);
    return undefined;
  };

  const prevProject = (id:number) => {
    if (id !== 1) {
      setCurrentProject(id - 1);
    } else {
      setCurrentProject(5);
    }
    setIsSelected(true);
    scrollToView();
    return undefined;
  };

  const nextProject = (id:number) => {
    if (id !== 5) {
      setCurrentProject(id + 1);
    } else {
      setCurrentProject(1);
    }
    setIsSelected(true);
    scrollToView();
    return undefined;
  };

  return (
    <projectContext.Provider value={{ currentProject, isSelected, setProject, closeProject, prevProject, nextProject}}>
      {children}
    </projectContext.Provider>
  );
}

export { ProjectProvider, projectContext };
