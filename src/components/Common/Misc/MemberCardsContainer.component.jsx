import styled, { css } from 'styled-components';

const AlumniCSS = css`
	margin-top: 70px;
`;

const getPage = ({ page }) => {
	switch (page) {
		case 'alumni':
			return AlumniCSS;
		default:
			return null;
	}
}

export default styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-items: stretch;
	grid-auto-rows: minmax(150px, auto);
	grid-gap: 100px;

	${getPage}
`;