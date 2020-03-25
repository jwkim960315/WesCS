import React from 'react';
import { useLocation } from 'react-router-dom';

import StyledLink from '../NavBar/StyledLink.styles';
import UserProfileContainer from './UserProfileContainer.styles';
import UserProfilePicture from './UserProfilePicture.styles';
import UserProfileName from './UserProfileName.styles';


const UserProfile = ({ user: { photoURL, displayName } }) => {
    const { pathname } = useLocation();

    return (
        <StyledLink to="/profile" isactive={`${pathname === '/profile'}`}>
            <UserProfileContainer>
                    <UserProfilePicture src={photoURL} alt="user-profile-picture" />
                    <UserProfileName>{displayName}</UserProfileName>
            </UserProfileContainer>
        </StyledLink>
    )
};

export default UserProfile;