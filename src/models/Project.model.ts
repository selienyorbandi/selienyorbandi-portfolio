import { Image } from "./Image.model";

export interface Project {
    id: number,
    title: string,
    description: string,
    description_list: string[],
    images: Image[],
    technologies: Image[],
    deployLink: string,
    repositoryLink: string
}