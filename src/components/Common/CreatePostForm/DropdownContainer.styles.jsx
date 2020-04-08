import styled from 'styled-components';

export default styled.div`
    flex-grow: 1;
    background: white;
    position: relative;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    &:hover {
        background: #e0e0e0;
    }

    i {
        color: #364F6B;
        position: absolute;
        left: 10px;
    }
`;