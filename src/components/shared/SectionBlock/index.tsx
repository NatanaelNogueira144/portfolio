import { Container, Wrapper } from "./styles";

interface SectionBlockProps {
    id: string;
    children: React.ReactNode;
    bgColor: 'primary'|'secondary';
}

export default function SectionBlock({ id, bgColor, children }: SectionBlockProps) {
    return (
        <Container id={id} bgColor={bgColor}>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    );
}