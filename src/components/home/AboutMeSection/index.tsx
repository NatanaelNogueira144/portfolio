import Headline from "../../shared/Headline";
import SectionBlock from "../../shared/SectionBlock";
import { 
    CardGroup,
    CardTitle,
    Column,
    Grid,
    InfoCard,
    InfoCardIcon,
    InfoCardWrapper,
    InfoContainer,
    InfoDescription,
    InfoNumber,
    InfosGroup
} from "./styles";
import { IAbout } from "../../../interfaces/about.interface";
import { IProject } from "../../../interfaces/project.interface";
import { IService } from "../../../interfaces/service.interface";

interface AboutMeSectionProps {
    about: IAbout;
    projects: IProject[];
    services: IService[];
}

export default function AboutMeSection({ about, projects, services }: AboutMeSectionProps) {
    return (
        <SectionBlock id="about-me" bgColor="primary">
            <Grid>
                <Column>
                    <CardGroup>
                        {services.map((service, key) => (
                            <InfoCard key={key} color={service.color}>
                                <InfoCardWrapper>
                                    <InfoCardIcon color={service.color}>
                                        <service.icon color="white" size={35} />
                                    </InfoCardIcon>
                                    <div>
                                        <CardTitle>{service.title}</CardTitle>
                                        <span>{service.projectsCount} Projetos</span>
                                    </div>
                                </InfoCardWrapper>
                            </InfoCard>
                        ))}
                    </CardGroup>
                </Column>
                <Column>
                    <Headline text={about.title} align="left" />
                    {about.description.map((paragraph, key) => (
                        <p key={key}>{paragraph}</p>
                    ))}
                    <InfosGroup>
                        <InfoContainer>
                            <InfoNumber>{services.reduce((p, s) => s.projectsCount + p, 0)}+</InfoNumber>
                            <InfoDescription>Projetos Completos</InfoDescription>
                        </InfoContainer>

                        <InfoContainer>
                            <InfoNumber>{about.clientsNumber}+</InfoNumber>
                            <InfoDescription>Clientes Satisfeitos</InfoDescription>
                        </InfoContainer>
                    </InfosGroup>
                </Column>
            </Grid>
        </SectionBlock>
    );
}