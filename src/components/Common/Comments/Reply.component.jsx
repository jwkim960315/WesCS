import React from 'react';

import CommentHeader from './CommentHeader.component';
import ReplyContainer from './ReplyContainer.styles';
import ReplyContent from './ReplyContent.styles';


const Reply = ({ reply: { content } }) => {
    return (
        <ReplyContainer>
            <CommentHeader />
            <ReplyContent>
                {content}
            </ReplyContent>
        </ReplyContainer>
    )
}

export default Reply;