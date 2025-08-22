import Headline from "../../shared/Headline";
import SectionBlock from "../../shared/SectionBlock";
import { Card, Grid, Subtitle, Title } from "./styles";
import { IContact } from "../../../interfaces/contact.interface";

interface ContactSectionProps {
    contacts: IContact[];
}

export default function ContactSection({ contacts }: ContactSectionProps) {
    return (
        <SectionBlock id="contact" bgColor="primary">
            <Headline text="Contato" align="center" />
            <Grid>
                {contacts.map((contact, key) => (
                    <Card 
                        key={key} 
                        onClick={() => {
                            window.open(contact.url, '_blank');
                        }}
                    >
                        <contact.icon color={contact.iconColor} size={100} />
                        <div>
                            <Title>{contact.title}</Title>
                            <Subtitle>{contact.subtitle}</Subtitle>
                        </div>
                    </Card>
                ))}
            </Grid>
        </SectionBlock>
    );
}