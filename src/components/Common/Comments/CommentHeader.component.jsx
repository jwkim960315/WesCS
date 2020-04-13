import React from 'react';

import CommentHeaderContainer from './CommentHeaderContainer.styles';

const CommentHeader = ({ author }) => {
    return (
        <CommentHeaderContainer>
            <UserProfile />
            <CommentHeaderBlankSpace />
            <CommentHeaderVotesContainer>
                <i></i>
                <CommentHeaderLikes>: {}</CommentHeaderLikes>
            </CommentHeaderVotesContainer>
        </CommentHeaderContainer>
    )
}

export default CommentHeader;