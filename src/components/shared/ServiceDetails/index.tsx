import Carousel from "../Carousel";
import { IService } from "../../../interfaces/service.interface";
import { Container } from "./styles";

interface ServiceDetailsProps {
    service: IService;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
    return (
        <Container>
            <Carousel images={service.images} />
        </Container>
    );
}