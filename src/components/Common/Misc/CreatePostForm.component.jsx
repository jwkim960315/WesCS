import React, { useState } from 'react';

import './CreatePostForm.scss';

const CreatePostForm = () => {
	let [title,setTitle] = useState('');
	let [content,setContent] = useState('');
	let [isAnonymous,setIsAnonymous] = useState(false);

	const onTitleChange = e => setTitle(e.target.value);
	const onContentChange = e => setContent(e.target.value);
	const onIsAnonymousChange = e => setIsAnonymous(e.target.value);

	return (
		<form>
			<input className="create-post-form-input" onChange={onTitleChange} placeholder="Title" />
			<input className="create-post-form-input" onChange={onContentChange} placeholder="Please be appropriate..." />
			
			<div className="create-post-form-bottom">
				<select>
					<option>Yes</option>
					<option>No</option>
				</select>
				<label>Wish to be anonymous?</label>
				<button type="submit">Create Post</button>
			</div>
		</form>
	)
};

export default CreatePostForm;