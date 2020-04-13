import React from 'react';



import CommentsContainer from './CommentsContainer.styles';
import CommentContainer from './CommentContainer.styles';
import CommentHeader from './CommentHeader.component';
import CommentContent from './CommentContent.styles';
import PostReply from './PostReply.component';
import Reply from './Reply.component';

import { comments } from '../../../data/data.utils';

const Comments = () => {
    return (
        <CommentsContainer>
            {
                comments.map(({ author, content, replies },commentIdx) => (
                    <CommentContainer key={`comment-${commentIdx}`}>
                        <CommentHeader author={author} />
                        <CommentContent>
                            {content}
                        </CommentContent>
                        <PostReply />
                        {
                            replies.map((reply,replyIdx) => (
                                <Reply key={replyIdx} reply={reply} />        
                            ))
                        }
                    </CommentContainer>
                ))
            }
        </CommentsContainer>
    )
}

export default Comments;