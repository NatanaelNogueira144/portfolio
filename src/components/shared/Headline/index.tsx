import { Title } from "./styles";

interface HeadlineProps {
    text: string;
    align: 'left'|'center'|'right';
}

export default function Headline({ text, align }: HeadlineProps) {
    return (
        <Title align={align}>{text}</Title>
    );
}