import { ITechnology } from "./technology.interface";

export interface IProject {
    title: string;
    type: 'website'|'webapplication'|'api'|'mobile';
    technologies: string[];
    cardImage: string;
    description: string;
    images: string[];
    liveProject?: string;
    repositoryUrl?: string;
}