import styled from "styled-components";

export const Container = styled.section`
    display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 70px;
	padding: 0px 15px;
	background: ${props => props.theme.colors.secondary};
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	margin-right: 10px;
`;

export const LeftText = styled.span`
	font-size: 1.1rem;
	font-weight: 600;
	color: ${props => props.theme.colors.white};
`;

export const List = styled.ul`
	display: flex;
	gap: 7px;
	height: 100%;
	list-style: none;
	justify-content: center;
	margin: 0;
	padding: 0;
`;

export const Item = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`;

interface ILinkProps {
	hoverColor: string;
}

export const Link = styled.a<ILinkProps>`
	text-decoration: none;
	text-transform: uppercase;
	transition: 0.3s ease;

	> svg {
		color: white;
		transition: 0.3s ease;
	}

	&:hover {
		> svg {
			color: ${props => props.hoverColor};
			transition: 0.3s ease;
		}
	}
`;