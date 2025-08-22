import './styles';
import { IExperience } from '../../../interfaces/experience.interface';
import { monthNameAndYearFormat } from '../../../utils/date-utils';
import { 
    CompanyTitle,
    Container,
    JobDetails,
    RoleDescription,
    RoleTitle,
    TimelineCenter,
    TimelineDot,
    TimelineItem,
    TimelineLeft, 
    TimelineLine, 
    TimelineList, 
    TimelineRight 
} from './styles';

interface ExperiencesTimelineProps {
    experiences: IExperience[];
}

export default function ExperiencesTimeline({ experiences }: ExperiencesTimelineProps) {
    return (
        <Container>
            <TimelineList>
                {experiences.map((exp, idx) => (
                    <TimelineItem key={idx}>
                        <TimelineLeft>
                            <CompanyTitle>{exp.company}</CompanyTitle>
                            <JobDetails>
                                <span><strong>Período:</strong> {monthNameAndYearFormat(exp.start)} até {monthNameAndYearFormat(exp.end)}</span>
                                <span><strong>Local:</strong> {exp.location}</span>
                                <span><strong>Jornada:</strong> {exp.workingDay}</span>
                                <span><strong>Formato:</strong> {exp.format}</span>
                            </JobDetails>
                        </TimelineLeft>
                        <TimelineCenter>
                            <TimelineDot />
                            {idx < experiences.length - 1 && <TimelineLine />}
                        </TimelineCenter>
                        <TimelineRight>
                            <RoleTitle>{exp.role}</RoleTitle>
                            <RoleDescription>{exp.description}</RoleDescription>
                        </TimelineRight>
                    </TimelineItem>
                ))}
            </TimelineList>
        </Container>
    );
}