import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Post from '../Common/Post/Post.component';
import { posts } from '../../data/data.utils';

const Posts = () => {
    const history = useHistory();

    const onPostClick = (e,postId) => {
        e.preventDefault();
        history.push('/post', {
            postId
        });
    };

    return (
        posts.map((post,postIdx) => (
            <Post key={`post-${postIdx}`} post={post} onPostClick={onPostClick} />
        ))
    );
}

export default Posts;