import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const activeCSS = css`
	color: #FC5C9C;
`; 

const inactiveCSS = css`
	color: white;
`; 

const getLinkColor = ({ isactive }) => isactive === 'true' ? activeCSS : inactiveCSS;

export default styled(Link)`
	text-decoration: none;
	flex-grow: 1;
	${getLinkColor}
`;