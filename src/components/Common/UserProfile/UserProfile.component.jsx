import React from 'react';
import { useLocation } from 'react-router-dom';

import StyledLink from '../NavBar/StyledLink.styles';
import UserProfileContainer from './UserProfileContainer.styles';
import UserProfilePicture from './UserProfilePicture.styles';
import UserProfileName from './UserProfileName.styles';


const UserProfile = ({ user: { photoURL, displayName } }) => {
    const { pathname } = useLocation();

    return (
        <UserProfileContainer>
            <StyledLink to="/profile" isactive={`${pathname === '/profile'}`}>
                <UserProfilePicture src={photoURL} alt="user-profile-picture" />
                <UserProfileName>{displayName.toUpperCase()}</UserProfileName>
            </StyledLink>
        </UserProfileContainer>
    )
};

export default UserProfile;