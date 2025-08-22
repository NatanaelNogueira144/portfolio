import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 10px;
    width: 100%;
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