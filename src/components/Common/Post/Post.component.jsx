import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

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

const Post = ({ post: { title, category, lastEdited, author, content } }) => {
    const currentUser = useContext(UserContext);
    
    console.log(author);
    console.log(currentUser);

    
    return (
        <WhiteCard>
            <PostHeaderContainer>
                <PostHeaderLeft>
                    <PostHeaderTitle>{title}</PostHeaderTitle>
                    <PostHeaderCategoryLabel>{category}</PostHeaderCategoryLabel>
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