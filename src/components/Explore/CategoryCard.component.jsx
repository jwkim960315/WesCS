import styled from 'styled-components';
import { Link } from 'react-router-dom';

const getCategoryColor = ({ color }) => {
	return `
		background: ${color};
	`;
}

export default styled(Link)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 130px;
	border-radius: 8px;
	color: white;
	font-size: 1.5vw;
	text-decoration: none;
	
	${getCategoryColor}

	&:hover {
		opacity: .8;
	}
`;