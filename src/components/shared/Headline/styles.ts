import styled from "styled-components";

interface TitleProps {
    align: 'left'|'center'|'right';
}

export const Title = styled.h1<TitleProps>`
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 1rem;
    text-align: ${props => props.align};
`;