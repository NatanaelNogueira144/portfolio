import { ISocial } from "../../../interfaces/social.interface";
import { Container, Item, Left, LeftText, Link, List } from "./styles";

interface FooterProps {
    socials: ISocial[];
}

export default function Footer({ socials }: FooterProps) {
    return (
        <Container>
            <Left>
                <LeftText>Desenvolvido por Natanael Nogueira</LeftText>
            </Left>

            <List>
                {socials.map((social, key) => (
                    <Item key={key}>
                        <Link 
                            href={social.url} 
                            target="_blank" 
                            hoverColor={social.hoverColor} 
                            title={social.title}
                        >
                            <social.icon color="white" size={28} />
                        </Link>
                    </Item>
                ))}
            </List>
        </Container>
    );
}