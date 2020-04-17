import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { posts } from '../../data/data.utils';

import UserContext from '../../contexts/CurrentUser.context';

import UnclickableWhiteCard from '../../components/Common/UnclickableWhiteCard/UnclickableWhiteCard.styles';
import PostHeaderContainer from '../../components/Common/Post/PostHeaderContainer.styles';
import PostHeaderTitle from '../../components/Common/Post/PostHeaderTitle.styles';
import PostHeaderLeft from '../../components/Common/Post/PostHeaderLeft.styles';
import PostHeaderCategoryLabel from '../../components/Common/Post/PostHeaderCategoryLabel.styles';
import PostHeaderEditButton from '../../components/Common/Post/PostHeaderEditButton.styles';
import PostHeaderDeleteButton from '../../components/Common/Post/PostHeaderDeleteButton.styles';
import PostHeaderButtons from '../../components/Common/Post/PostHeaderButtons.styles';
import ChosenPostContent from '../../components/Common/ChosenPost/ChosenPostContent.styles';
import BodyContainer from '../../components/Common/BodyContainer/BodyContainer.component';
import PostComment from '../../components/Common/PostComment/PostComment.component';
import Comments from '../../components/Common/Comments/Comments.component';

const ChosenPost = () => {
    const { state: { postId } } = useLocation();
    const { title, category, author, lastEdited, content } = posts.filter(({ id }) => id === postId)[0];

    const currentUser = useContext(UserContext);
    
    return (
        <BodyContainer>
            <UnclickableWhiteCard>
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
                <ChosenPostContent>
                    {content}
                </ChosenPostContent>

                <PostComment />

                <Comments />
            </UnclickableWhiteCard>
        </BodyContainer>
    )
}

export default ChosenPost;