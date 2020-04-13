import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import WhiteCard from '../WhiteCard/WhiteCard.component';
import PostHeaderContainer from './PostHeaderContainer.styles';
import PostHeaderTitle from './PostHeaderTitle.styles';
import PostHeaderLeft from './PostHeaderLeft.styles';
import PostHeaderCategoryLabel from './PostHeaderCategoryLabel.styles';
import PostHeaderEditButton from './PostHeaderEditButton.styles';
import PostHeaderDeleteButton from './PostHeaderDeleteButton.styles';
import PostHeaderButtons from './PostHeaderButtons.styles';
import PostContent from './PostContent.styles';

import UserContext from '../../../contexts/CurrentUser.context';

const Post = ({ post: { title, category, lastEdited, author, content, id }, onPostClick }) => {
    const history = useHistory();
    const location = useLocation();

    const currentUser = useContext(UserContext);

    
    return (
        
        <WhiteCard onPostClick={onPostClick} postId={id}>
            <PostHeaderContainer>
                <PostHeaderLeft>
                    <PostHeaderTitle>{title}</PostHeaderTitle>
                    <PostHeaderCategoryLabel category={category}>{category}</PostHeaderCategoryLabel>
                </PostHeaderLeft>
                    
                    {
                        currentUser && currentUser.id === author.uid ? (
                            <PostHeaderButtons>
                                <PostHeaderEditButton to='/post/edit'>Edit</PostHeaderEditButton>
                                <PostHeaderDeleteButton to='/post/delete'>Delete</PostHeaderDeleteButton>
                            </PostHeaderButtons>
                        ) : (
                            <div>{author.name}</div>
                        )
                    }
            </PostHeaderContainer>
            <div>{lastEdited}</div>
            <PostContent>
                {content}
            </PostContent>
        </WhiteCard>
    )
}

export default Post;