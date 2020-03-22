import styled from 'styled-components';

export default styled.input`
	width: 276px;
	height: 38px;
	padding: 0 0 0 15px;
	border: 1px solid #FC5C9C;
	border-radius: 4px 0 0 4px;
	background: none;
	color: white;

	&:focus {
		outline: none;
		border: 1px solid white;
		border-right: 1px solid #FC5C9C;
	}
`;