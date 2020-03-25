import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import SearchBar from '../Misc/SearchBar.component';
import StyledLink from './StyledLink.styles';
import UserProfile from '../UserProfile/UserProfile.component';

import firebase, { signInWithGoogle, auth } from '../../../firebase/firebase.utils';

import UserContext from '../../../contexts/CurrentUser.context';


import './NavBar.scss'

const urlHasWord = (pathname,word) => {
	const splitUrl = pathname.split('/');
	return splitUrl.some(name => name === word);
}

const GoogleAuthButton = ({ pathname }) => (
	<div className="nav-bar-right-link">
		<StyledLink to={`${pathname}`} onClick={() => signInWithGoogle()}>SIGN UP/IN WITH GOOGLE</StyledLink>
	</div>
);

const NavBar = () => {
	
	let location = useLocation();
	const { pathname } = location;

	const currentUser = useContext(UserContext);

	return (
		<div className="nav-bar">
			<StyledLink to="/">LOGO</StyledLink>
			<div className="nav-bar-blank-space"></div>
			<SearchBar />
			<div className="nav-bar-blank-space"></div>
			<div className='nav-bar-right'>
				<div className="nav-bar-right-link">
					<StyledLink to="/" isactive={`${pathname === '/'}`}>HOME</StyledLink>
				</div>
				<div className="nav-bar-right-link">
					<StyledLink to="/explore" isactive={`${urlHasWord(pathname,'explore')}`}>EXPLORE</StyledLink>
				</div>
				{ currentUser ? <UserProfile user={currentUser} /> : <GoogleAuthButton pathname={pathname} /> }
				{ currentUser ? <StyledLink to={`${pathname}`} onClick={() => auth.signOut()}>SIGN OUT</StyledLink> : null }
			</div>
		</div>
	)
};

export default NavBar;