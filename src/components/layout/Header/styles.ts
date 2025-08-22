import styled, { css } from "styled-components";

interface IListProps {
    opened: boolean;
}

export const Container = styled.header`
    display: flex;
    position: sticky;
    top: 0;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0px 15px;
    background: ${props => css`linear-gradient(to right, ${props.theme.colors.primary}, ${props.theme.colors.secondary});`};
    z-index: 10;
`;

export const Navigation = styled.nav`
    width: 100%;
    height: 100%;

    @media (max-width: 800px) {
        width: auto;
    }
`;

export const List = styled.ul<IListProps>`
    display: flex;
    height: 100%;
    list-style: none;
    justify-content: center;
    margin: 0;
    padding: 0;

    @media (max-width: 800px) {
        flex-direction: column;
        gap: 0;
        top: 70px;
        position: absolute;
        justify-content: flex-start;
        left: 0;
        right: 0;
        background: gray;
        height: auto;
        display: ${props => props.opened ? 'flex' : 'none'};
        align-items: stretch;
        box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        z-index: 9;
    }
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    &:hover {
        a {
            color: orange;
	        transition: 0.3s ease;
        }
    }
`;

export const Link = styled.a`
    height: 100%;
	padding: 25px;
	font-size: 1rem;
	font-weight: 600;
	color: white;
	text-decoration: none;
	text-transform: uppercase;
	transition: 0.3s ease;
`;

export const ToggleButton = styled.button`
    display: none;
	flex-direction: column;
	gap: 5px;
	background: none;
	border: none;
	cursor: pointer;
	margin-left: auto;
	padding: 10px;

    > span {
        display: block;
        width: 25px;
        height: 3px;
        background: white;
        border-radius: 2px;
    }

    @media (max-width: 800px) {
        display: flex;
    }
`;