import styled, { css } from "styled-components";

export const CarouselContainer = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: auto;
    background: ${props => props.theme.colors.white};
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

interface ButtonProps {
    left?: boolean;
}

export const Button = styled.button<ButtonProps>`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    z-index: 2;

    ${({ left }) => left ? css`
        left: 0px;
    ` : css`
        right: 0px;
    `}
`;

export const Indicators = styled.div`
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
`;

interface DotProps {
    active: boolean;
}

export const Dot = styled.div<DotProps>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ active, theme }) =>
        active ? theme.colors.primary : "rgba(255, 255, 255, 0.6)"};
    cursor: pointer;
    transition: background 0.3s;
`;