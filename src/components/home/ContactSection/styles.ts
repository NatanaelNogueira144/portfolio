import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 20px;
    margin-top: 40px;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    gap: 20px;
    border-radius: 20px;
    background-color: #EDEDED;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
        transform: scale(1.02);
        transition: 0.3s ease;
    }
`;

export const Title = styled.h3`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 12px;
    text-align: center;
`;

export const Subtitle = styled.p`
    font-weight: 600;
    margin-bottom: 8px;
    text-align: center;
`;