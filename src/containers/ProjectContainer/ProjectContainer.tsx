import ThumbnailsSlider from "../../components/ThumbnailsSlider/ThumbnailsSlider";

const myProjects = [
  {
    imgSrc: "string",
    thumbsrc: "string",
    alt: "string",
  }
];

function ProjectContainer() {
  return (
    <div>
      <ThumbnailsSlider images={myProjects}/>
    </div>
  );
}

export default ProjectContainer;