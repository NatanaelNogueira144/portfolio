import Headline from "../../shared/Headline";
import ImageCard from "../../shared/ImageCard";
import SectionBlock from "../../shared/SectionBlock";
import { Column, Grid } from "./styles";
import { IService } from "../../../interfaces/service.interface";

interface ServicesSectionProps {
    services: IService[];
    onCardClick: (service: IService) => void;
}

export default function ServicesSection({ services, onCardClick }: ServicesSectionProps) {
    return (
        <SectionBlock id="services" bgColor="secondary">
            <Headline text="Meus Serviços" align="center" />
            <Grid>
                {services.map((service, key) => (
                    <Column>
                        <ImageCard 
                            key={key}
                            image={service.cardImage} 
                            title={service.title} 
                            subtitle={service.description}
                            onClick={() => onCardClick(service)}
                        />
                    </Column>
                ))}
            </Grid>
        </SectionBlock>
    );
}