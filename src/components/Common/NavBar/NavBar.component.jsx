import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import NavBarContainer from './NavBarContainer.styles';
import SearchBar from '../SearchBar/SearchBar.component';
import NavBarBlankSpace from './NavBarBlankSpace.styles';
import NavBarRight from './NavBarRight.styles';
import StyledLink from './StyledLink.styles';
import UserProfile from '../UserProfile/UserProfile.component';
import NavBarRightOne from './NavBarRightOne.styles';
import NavBarRightTwo from './NavBarRightTwo.styles';
import SignOutContainer from './SignOutContainer.styles';


// Firebase
import { signInWithGoogle, auth } from '../../../firebase/firebase.utils';

// Contexts
import UserContext from '../../../contexts/CurrentUser.context';

// Helper Function
const urlHasWord = (pathname,word) => {
	const splitUrl = pathname.split('/');
	return splitUrl.some(name => name === word || name === 'post');
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

	/* 
		No SCSS 
			- NavBarRightTwo
			- SignOutContainer
	*/

	return (
		<NavBarContainer>
			<StyledLink to="/">LOGO</StyledLink>
			<NavBarBlankSpace isLeft={'true'} />
			<SearchBar />
			<NavBarBlankSpace isLeft={'false'} />
			<NavBarRight>
				<NavBarRightOne>
					<div>
						<StyledLink to="/" isactive={`${pathname === '/'}`}>HOME</StyledLink>
					</div>
					<div>
						<StyledLink to="/explore" isactive={`${urlHasWord(pathname,'explore')}`}>EXPLORE</StyledLink>
					</div>
					<div>
						{ currentUser ? <UserProfile user={currentUser} /> : <GoogleAuthButton pathname={pathname} /> }
					</div>	
				</NavBarRightOne>
				<NavBarRightTwo>
					{ currentUser ? <SignOutContainer><StyledLink to={`${pathname}`} onClick={() => auth.signOut()}>SIGN OUT</StyledLink></SignOutContainer> : null }
				</NavBarRightTwo>
			</NavBarRight>
		</NavBarContainer>
	)
};

export default NavBar;