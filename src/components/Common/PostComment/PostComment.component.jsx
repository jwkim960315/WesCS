import React, { useState } from 'react';

import PostCommentForm from './PostCommentForm.styles';
import PostCommentInput from './PostCommentInput.styles';
import CreatePostFormBottom from '../CreatePostForm/CreatePostFormBottom.component';
import CreatePostFormCheckboxContainer from '../CreatePostForm/CreatePostFormCheckboxContainer.styles';
import CreatePostFormCheckbox from '../CreatePostForm/CreatePostFormCheckbox.styles';
import CreatePostFormButton from '../CreatePostForm/CreatePostFormButton.styles';

const PostComment = () => {
    let [isAnonymous,setIsAnonymous] = useState(true);

    const onIsAnonymousChange = e => {
		e.preventDefault();
		setIsAnonymous(!isAnonymous);
	}

    return (
        <PostCommentForm>
            <PostCommentInput placeholder="comment..."/>
            <CreatePostFormBottom>
                <CreatePostFormCheckboxContainer onClick={onIsAnonymousChange}>
                    <CreatePostFormCheckbox
                        id="anonymous-checkbox"
                        value={isAnonymous ? "yes" : "no"}
                        name="Yes"
                    >{isAnonymous ? <i className="fas fa-check"></i> : null}</CreatePostFormCheckbox>
                    <label htmlFor="anonymous-checkbox">Wish to be anonymous?</label>
                </CreatePostFormCheckboxContainer>
                <CreatePostFormButton type="submit" value="Create Comment" />
            </CreatePostFormBottom>
        </PostCommentForm>
    )
}

export default PostComment;