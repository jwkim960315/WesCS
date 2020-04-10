import React from 'react';

import { comments } from '../../../data/data.utils';

const Comments = () => {
    return (
        comments.map(({ author, content, replies },commentIdx) => (
            <CommentsContainer key={`comment-${commentIdx}`}>
                <CommentsHeader author={author}/>
                <CommentContent>
                    {content}
                </CommentContent>
                <PostReply />
                {
                    replies.map((reply,replyIdx) => (
                        <Reply key={replyIdx} reply={reply} />        
                    ))
                }
            </CommentsContainer>
        ))
    )
}

export default Comments;