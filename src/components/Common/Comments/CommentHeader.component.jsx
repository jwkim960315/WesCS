import React from 'react';

import CommentHeaderContainer from './CommentHeaderContainer.styles';
import UserProfile from '../UserProfile/UserProfile.component';
import CommentHeaderBlankSpace from './CommentHeaderBlankSpace.styles';
import CommentHeaderVotesContainer from './CommentHeaderVotesContainer.styles';
import CommentHeaderLikes from './CommentHeaderLikes.styles';

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