import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import NavBarContainer from './NavBarContainer.styles';
import SearchBar from '../SearchBar/SearchBar.component';
import NavBarBlankSpace from './NavBarBlankSpace.styles';
import NavBarRight from './NavBarRight.styles';
import StyledLink from './StyledLink.styles';
import UserProfile from '../UserProfile/UserProfile.component';

// Firebase
import firebase, { signInWithGoogle, auth } from '../../../firebase/firebase.utils';

// Contexts
import UserContext from '../../../contexts/CurrentUser.context';

// Helper Function
const urlHasWord = (pathname,word) => {
	const splitUrl = pathname.split('/');
	return splitUrl.some(name => name === word);
}

const GoogleAuthButton = ({ pathname }) => (
	<div className="nav-bar-right-link">
		<StyledLink to={`${pathname}`} onClick={() => signInWithGoogle()}>SIGN IN WITH GOOGLE</StyledLink>
	</div>
);

const NavBar = () => {
	
	let location = useLocation();
	const { pathname } = location;

	const currentUser = useContext(UserContext);

	return (
		<NavBarContainer>
			<StyledLink to="/">LOGO</StyledLink>
			<NavBarBlankSpace />
			<SearchBar />
			<NavBarBlankSpace />
			<NavBarRight>
				<div className="nav-bar-right-link">
					<StyledLink to="/" isactive={`${pathname === '/'}`}>HOME</StyledLink>
				</div>
				<div className="nav-bar-right-link">
					<StyledLink to="/explore" isactive={`${urlHasWord(pathname,'explore')}`}>EXPLORE</StyledLink>
				</div>
				<div>
					{ currentUser ? <UserProfile user={currentUser} /> : <GoogleAuthButton pathname={pathname} /> }
				</div>
				{ currentUser ? <div><StyledLink to={`${pathname}`} onClick={() => auth.signOut()}>SIGN OUT</StyledLink></div> : null }
			</NavBarRight>
		</NavBarContainer>
	)
};

export default NavBar;