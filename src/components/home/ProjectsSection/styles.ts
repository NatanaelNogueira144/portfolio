import styled from "styled-components";

export const ProjectsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 10px;
    margin-top: 40px;

    @media (max-width: 1150px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    justify-content: center;
`;

export const LoadMoreButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const LoadMoreButton = styled.button`
    padding: 15px;
    margin-top: 20px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    transition: opacity .3s;
    text-decoration: none;

    &:hover {
        opacity: .7;
    }
`;