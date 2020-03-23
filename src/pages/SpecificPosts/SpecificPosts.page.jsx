import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import BodyContainer from '../../components/Common/Misc/BodyContainer.component';
import LeftTitle from '../../components/Common/Misc/LeftTitle.component';
import CreatePostForm from '../../components/Common/Misc/CreatePostForm.component';

const pathnameToTitle = pathname => {
	const subPathname = pathname.split('/').join('');
	switch (subPathname) {
		case 'allposts':
			return 'All Posts';
		case 'jobsInterviews':
			return 'Jobs & Interviews';
		case 'research':
			return 'Research';
		case 'projectIdeas':
			return 'Project Ideas';
		case 'hackathons':
			return 'Hackathons';
		case 'events':
			return 'Events';
		case 'academics':
			return 'Academics';
		case 'alumni':
			return 'Alumni';
		case 'miscellaneous':
			return 'Miscellaneous';
		default:
			return null;
	}
}

const SpecificPosts = () => {
	let [category,setCategory] = useState(null);
	let { pathname } = useLocation();
	
	useEffect(() => {
		setCategory(pathnameToTitle(pathname));
	},[]);

	return (
		<BodyContainer>
			<LeftTitle>{category}</LeftTitle>
			<CreatePostForm>

			</CreatePostForm>
		</BodyContainer>
	)
};

export default SpecificPosts;