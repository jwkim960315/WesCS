import React from 'react';

import PostReplyContainer from './PostReplyContainer.styles';
import PostReplyInput from './PostReplyInput.styles';

const PostReply = () => {
    return (
        <PostReplyContainer>
            <div>You:</div>
            <PostReplyInput />
        </PostReplyContainer>
    )
}

export default PostReply;