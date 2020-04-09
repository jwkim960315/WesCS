import React from 'react';

import WhiteCardContainer from './WhiteCardContainer.styles';

const WhiteCard = ({ children, onPostClick, postId }) => (
    <WhiteCardContainer onClick={e => onPostClick(e,postId) || null}>
        {children}
    </WhiteCardContainer>
);

export default WhiteCard;