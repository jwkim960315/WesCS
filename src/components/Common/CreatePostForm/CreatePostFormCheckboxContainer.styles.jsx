import styled from 'styled-components';

export default styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 14px;
    color: #364F6B;

    &:focus {
        outline: none;
    }

    &:hover {
		opacity: .8;
    }
`;