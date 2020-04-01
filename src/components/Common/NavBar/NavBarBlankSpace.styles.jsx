import styled, { css } from 'styled-components';

const leftCSS = css`
    flex-grow: 1;
`;

const rightCSS = css`
    flex-grow: 3;
`;

const isLeft = ({ isLeft }) => {
    return isLeft === 'true' ? leftCSS : rightCSS;
}

export default styled.div`
    flex-grow: 3;
    width: 80px;

    ${isLeft}
`;