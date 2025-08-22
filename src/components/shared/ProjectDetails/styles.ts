import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Card = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: #EDEDED;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 20px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 12px;
`;

export const LinkButtonsGroup = styled.div`
    display: flex;
    gap: 4px;
`;

export const LinkButton = styled.a`
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    transition: opacity .3s;
    text-decoration: none;

    &:hover{
        opacity: .7;
    }
`;