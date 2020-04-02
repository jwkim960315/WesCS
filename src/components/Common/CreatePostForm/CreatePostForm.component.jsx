import React, { useState } from 'react';

import CreatePostFormContainer from './CreatePostFormContainer.component';
import CreatePostFormInput from './CreatePostFormInput.component';
import CreatePostFormTextarea from './CreatePostFormTextarea.styles';
import CreatePostFormBottom from './CreatePostFormBottom.component';
import CreatePostFormButton from './CreatePostFormButton.component';
import CreatePostFormCheckbox from './CreatePostFormCheckbox.styles';
import CreatePostFormCheckboxContainer from './CreatePostFormCheckboxContainer.styles';

const CreatePostForm = () => {
	let [title,setTitle] = useState('');
	let [content,setContent] = useState('');
	let [isAnonymous,setIsAnonymous] = useState(true);

	const onTitleChange = e => setTitle(e.target.value);
	const onContentChange = e => setContent(e.target.value);
	const onIsAnonymousChange = e => {
		e.preventDefault();
		setIsAnonymous(!isAnonymous);
	}

	return (
		<CreatePostFormContainer>
			<CreatePostFormInput onChange={onTitleChange} placeholder="Title" />
			<CreatePostFormTextarea onChange={onContentChange} placeholder="Please be appropriate..."></CreatePostFormTextarea>
			<CreatePostFormBottom>
				<CreatePostFormCheckboxContainer onClick={onIsAnonymousChange}>
					<CreatePostFormCheckbox 
						id="anonymous-checkbox"
						value={isAnonymous ? "yes" : "no"}
						name="Yes"
					>{isAnonymous ? <i className="fas fa-check"></i> : null}</CreatePostFormCheckbox>
					<label htmlFor="anonymous-checkbox">Wish to be anonymous?</label>
				</CreatePostFormCheckboxContainer>
				<CreatePostFormButton type="submit">Create Post</CreatePostFormButton>
			</CreatePostFormBottom>
		</CreatePostFormContainer>
	)
};

export default CreatePostForm;