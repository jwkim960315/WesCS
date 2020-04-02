import React from 'react';

import WhiteCardContainer from './WhiteCardContainer.styles';

const WhiteCard = ({ children }) => (
    <WhiteCardContainer>
        {children}
    </WhiteCardContainer>
);

export default WhiteCard;