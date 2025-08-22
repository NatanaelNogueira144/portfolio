import ExperiencesTimeline from "../../shared/ExperiencesTimeline";
import Headline from "../../shared/Headline";
import SectionBlock from "../../shared/SectionBlock";
import { IExperience } from "../../../interfaces/experience.interface";

interface ExperienceSectionProps {
    experiences: IExperience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    return (
        <SectionBlock id="experiences" bgColor="primary">
            <Headline text="Minhas Experiências" align="center" />
            <ExperiencesTimeline experiences={experiences} />
        </SectionBlock>
    );
}