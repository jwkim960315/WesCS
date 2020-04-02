import styled, { css } from 'styled-components';

const checkedCSS = css`
    background-color: #FC5C9C;
    color: white;
    border: 3px solid #FC5C9C;
`;

const isChecked = ({ value }) => value === "yes" ? checkedCSS : null;

export default styled.span`
    width: 20px;
    height: 20px;
    border-radius: 8px;
    border: 3px solid #e0e0e0;
    margin-right: 5px;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${isChecked}
    
    & + label {
        cursor: pointer;
    }
`;