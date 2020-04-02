import styled from 'styled-components';

export default styled.textarea`
    font-size: 1em;
    color: #364F6B;
    resize: none;
    padding: 15px 0 0 15px;
    border-radius: 8px;
    border: none;
    margin: 10px 0;
    height: 15vh;

    &:focus {
        ::placeholder {
            color: #364F6B;
        }
    }
`;