import { CardContainer, Overlay, Content, Title, Subtitle } from "./styles";

interface ImageCardProps {
    image: string;
    title: string;
    subtitle: string;
    onClick?: () => void;
}

export default function ImageCard({ image, title, subtitle, onClick }: ImageCardProps) {
    return (
        <CardContainer background={image} onClick={onClick}>
            <Overlay />
            <Content>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </Content>
        </CardContainer>
    );
};