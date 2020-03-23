import React, { useState } from 'react';

import CreatePostFormContainer from './CreatePostFormContainer.component';
import CreatePostFormInput from './CreatePostFormInput.component';
import CreatePostFormBottom from './CreatePostFormBottom.component';
import CreatePostFormButton from './CreatePostFormButton.component';

const CreatePostForm = () => {
	let [title,setTitle] = useState('');
	let [content,setContent] = useState('');
	let [isAnonymous,setIsAnonymous] = useState(false);

	const onTitleChange = e => setTitle(e.target.value);
	const onContentChange = e => setContent(e.target.value);
	const onIsAnonymousChange = e => setIsAnonymous(e.target.value);

	return (
		<CreatePostFormContainer>
			<CreatePostFormInput onChange={onTitleChange} placeholder="Title" />
			<CreatePostFormInput onChange={onContentChange} placeholder="Please be appropriate..." />
			<CreatePostFormBottom>
				<div>
					<select>
						<option>Yes</option>
						<option>No</option>
					</select>
					<label>Wish to be anonymous?</label>
				</div>
				<CreatePostFormButton type="submit">Create Post</CreatePostFormButton>
			</CreatePostFormBottom>
		</CreatePostFormContainer>
	)
};

export default CreatePostForm;