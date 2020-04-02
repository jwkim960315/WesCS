import styled from 'styled-components';

export default styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 100px;
    background: #F0F0F0;

    & div {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
        border-radius: 8px;
    }

    & div:hover {
        opacity: .8;
        background: #e0e0e0;
    }

    i {
        color: #FC5C9C;
        position: absolute;
        left: 10px;
    }
`;