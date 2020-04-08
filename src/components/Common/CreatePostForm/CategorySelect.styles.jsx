import styled, { css } from 'styled-components';

const overflowCSS = css`
    padding-right: 10px;
`;

const jobsInterviewsCSS = css`
    ${overflowCSS}
    width: 100%;
`;

const projectIdeasCSS = css`
    ${overflowCSS}
    width: 130px;
`;

const hackathonCSS = css`
    ${overflowCSS}
    width: 120px;
`;

const academicsCSS = css`
    ${overflowCSS}
    width: 110px;
`;

const miscellaneousCSS = css`
    ${overflowCSS}
    width: 140px;
`;

const fitCSS = css`
    width: 100px;
`;

const smallCSS = css`
    width: 80px;
`;

const getWidthCSS = ({ defaultValue }) => {
    switch (defaultValue) {
        case 'jobsInterviews':
            return jobsInterviewsCSS;
        case 'projectIdeas':
            return projectIdeasCSS;
        case 'hackathons':
            return hackathonCSS;
        case 'academics':
            return academicsCSS;
        case 'miscellaneous':
            return miscellaneousCSS;
        case 'recent':
            return smallCSS;
        case 'oldest':
            return smallCSS;
        case 'events':
            return smallCSS;
        case 'alumni':
            return smallCSS;
        default:
            return fitCSS;
    }
}

export default styled.select`
    flex-grow: 1;
    z-index: 3;
    padding-right: 10px;
    height: 5vh;
    background: none;
    border: none;
    color: #364F6B;
    font-size: 16px;
    appearance: none;

    &:focus {
        outline: none;
    }
`;