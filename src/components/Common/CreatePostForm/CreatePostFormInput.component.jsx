import styled from 'styled-components';

export default styled.input`
	font-size: 1em;
	color: #364F6B;
	height: 5vh;
	padding-left: 15px;
	border-radius: 8px;
	border: none;
	margin: 10px 0;
	flex-grow: 30;

	&:focus {
		::placeholder {
			color: #364F6B;
		}
	}
`;