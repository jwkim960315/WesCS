import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import SearchBar from '../Misc/SearchBar.component';
import StyledLink from './StyledLink.styles';

// import { signInWithGoogle } from '../firebase/firebase.utils';


import './NavBar.scss'

const urlHasWord = (pathname,word) => {
	const splitUrl = pathname.split('/');
	return splitUrl.some(name => name === word);
}

const NavBar = () => {
	let location = useLocation();
	const { pathname } = location;
	
	let [user,setUser] = useState(null);

	useEffect(() => {
		const signIn = async () => {
			
		}
	},[]);

	return (
		<div className="nav-bar">
			<StyledLink to="/">LOGO</StyledLink>
			<SearchBar />
			<div className='nav-bar-right'>
				<div className="nav-bar-right-link">
					<StyledLink to="/" isactive={`${pathname === '/'}`}>HOME</StyledLink>
				</div>
				<div className="nav-bar-right-link">
					<StyledLink to="/explore" isactive={`${urlHasWord(pathname,'explore')}`}>EXPLORE</StyledLink>
				</div>
				<div className="nav-bar-right-link">
					<StyledLink to="/" isactive={`${pathname === '/signUp'}`} /*onClick={() => signInWithGoogle()}*/>SIGN UP/IN WITH GOOGLE</StyledLink>
				</div>
			</div>
		</div>
	)
};

export default NavBar;