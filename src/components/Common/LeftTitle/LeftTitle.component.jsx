import styled, { css } from 'styled-components';

const AlumniCSS = css`
	text-align: center;
`;

const getPage = ({ page }) => {
	switch (page) {
		case 'alumni':
			return AlumniCSS;
		default:
			return null;
	}
}

export default styled.h1`
	color: #364F6B;

	${getPage}
`;