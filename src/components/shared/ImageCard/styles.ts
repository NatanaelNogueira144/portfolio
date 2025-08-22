import styled from "styled-components";

interface CardContainerProps {
    background: string;
}

export const CardContainer = styled.div<CardContainerProps>`
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }

    @media (max-width: 480px) {
        height: 150px;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0);
    transition: background 0.3s ease;

    ${CardContainer}:hover & {
        background: rgba(0,0,0,0.75);
    }
`;

export const Content = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 16px;
    color: ${props => props.theme.colors.white};
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;

    ${CardContainer}:hover & {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Title = styled.h3`
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
`;

export const Subtitle = styled.p`
    margin: 4px 0 0;
    font-size: 0.9rem;
    opacity: 0.85;
`;