import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;

export const Column = styled.div`
    width: 100%;
    padding: 10px;
    column-span: 1;
`;

export const CardGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

interface InfoCardProps {
    color: string;
}

export const InfoCard = styled.div<InfoCardProps>`
    position: relative;
    width: 100%;    
    padding: 20px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 2px 2px 0px ${props => props.color};
    bottom: 0;
    transition: all ease-in 0.2s;

    &:hover {
        bottom: 5px;
        box-shadow: 0px 2px 2px 1px ${props => props.color};
    }
`;

export const InfoCardWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

interface InfoCardIconProps {
    color: string;
}

export const InfoCardIcon = styled.div<InfoCardIconProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    border-radius: 100%;
    background-color: ${props => props.color};

    > svg {
        color: ${props => props.theme.colors.white};
    }
`;

export const CardTitle = styled.h4`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.secondary};
`;

export const InfosGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 25px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InfoNumber = styled.span`
    font-size: 4rem;
    font-weight: 600;
    color: ${props => props.theme.colors.secondary};
`;

export const InfoDescription = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.secondary};
`;