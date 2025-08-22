import { Container } from "./styles";
import { ITechnology } from "../../../interfaces/technology.interface"

interface TechnologiesListProps {
    technologies: ITechnology[];
}

export default function TechnologiesList({ technologies }: TechnologiesListProps) {
    return (
        <Container>
            {technologies.map((technology, key) => (
                <img key={key} src={technology.badge} alt={technology.name} />
            ))}
        </Container>
    );
}