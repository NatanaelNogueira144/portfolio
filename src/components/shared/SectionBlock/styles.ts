import styled from "styled-components";

interface IContainerProps {
    bgColor: 'primary'|'secondary';
}

export const Container = styled.section<IContainerProps>`
    display: flex;
    justify-content: center;
    width: 100%;
	padding: 40px 20px;
    background-color: ${props => props.bgColor === 'primary' ? '#E1E8FF' : '#BECDFC'};
`;

export const Wrapper = styled.div`
    max-width: 1200px;
    width: 1200px;
`;