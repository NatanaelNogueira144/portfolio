import Headline from "../../shared/Headline";
import ImageCard from "../../shared/ImageCard";
import SectionBlock from "../../shared/SectionBlock";
import { Column, Grid, LoadMoreButton, LoadMoreButtonContainer } from "./styles";
import { IProject } from "../../../interfaces/project.interface";
import { useState } from "react";

interface ProjectsSectionProps {
    projects: IProject[];
    onCardClick: (project: IProject) => void;
}

export default function ProjectsSection({ projects, onCardClick }: ProjectsSectionProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const perPage = 6;
    const totalPages = Math.ceil(projects.length / perPage);

    return (
        <SectionBlock id="projects" bgColor="secondary">
            <Headline text="Meus Projetos" align="center" />
            <Grid>
                {projects.filter((_, index) => index < currentPage * perPage).map((project, key) => (
                    <Column key={key}>
                        <ImageCard 
                            image={project.cardImage} 
                            title={project.title} 
                            subtitle={project.description}
                            onClick={() => onCardClick(project)}
                        />
                    </Column>
                ))}
            </Grid>
            {currentPage < totalPages && (
                <LoadMoreButtonContainer>
                    <LoadMoreButton onClick={() => setCurrentPage(currentPage + 1)}>
                        Carregar Mais
                    </LoadMoreButton>
                </LoadMoreButtonContainer>
            )}
        </SectionBlock>
    );
}