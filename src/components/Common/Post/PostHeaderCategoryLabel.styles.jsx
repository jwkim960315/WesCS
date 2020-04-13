import styled from 'styled-components';

const jobsAndInterviewCSS = () => {
    return `
        background: #414AAB;
    `;
}

const researchCSS = () => {
    return `
        background: #F84A5C;
    `;
}

const projectIdeasCSS = () => {
    return `
        background: #FF7DB1;
    `;
}

const hackathonCSS = () => {
    return `
        background: #FF9C83;
    `;
}

const eventCSS = () => {
    return `
        background: #FF9C83;
    `;
}

const miscellaneousCSS = () => {
    return `
        background: #7076FF;
    `;
}

const academicCSS = () => {
    return `
        background: #388FFF;
    `;
}

const defaultBackgroundCSS = () => {
    return `
        background: black;
    `;
}

const getBackground = ({ category }) => {
    console.log(category);
    switch(category) {
        case 'Jobs & Interviews':
            return jobsAndInterviewCSS;
        case 'Research':
            return researchCSS;
        case 'Project Ideas':
            return projectIdeasCSS;
        case 'Hackathon':
            return hackathonCSS;
        case 'Event':
            return eventCSS;
        case 'Miscellaneous':
            return miscellaneousCSS;
        case 'Academic':
            return academicCSS;
        default:
            return defaultBackgroundCSS;
    }
}

export default styled.div`
    ${getBackground}
    border-radius: 16px;
    height: 24px;
    color: white;
    padding: 1px 15px;
`;