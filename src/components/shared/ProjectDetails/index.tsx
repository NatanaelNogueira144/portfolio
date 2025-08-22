import Carousel from "../Carousel";
import TechnologiesList from "../TechnologiesList";
import technologies from "../../../data/technologies";
import { Card, Container, Grid, LinkButton, LinkButtonsGroup, Title } from "./styles";
import { IProject } from "../../../interfaces/project.interface";

interface ProjectDetailsProps {
    project: IProject;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <Container>
            <Card>
                <Grid>
                    {(project.liveProject || project.repositoryUrl) && (
                        <div>
                            <Title>Links</Title>
                            <LinkButtonsGroup>
                                {project.repositoryUrl && (
                                    <LinkButton href={project.repositoryUrl} target="_blank">
                                        Repositório GitHub
                                    </LinkButton>
                                )}
                                {project.liveProject && (
                                    <LinkButton href={project.liveProject} target="_blank">
                                        Projeto ao Vivo
                                    </LinkButton>
                                )}
                            </LinkButtonsGroup>
                        </div>
                    )}
                    
                    <div>
                        <Title>Tecnologias Usadas</Title>
                        <TechnologiesList 
                            technologies={technologies.filter(tech => project.technologies.includes(tech.id))} 
                        />
                    </div>
                </Grid>
            </Card>
            <Carousel images={project.images} />
        </Container>
    );
}