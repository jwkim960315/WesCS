import React from 'react';

import SearchBarContainer from './SearchBarContainer.styles';
import SearchBarButton from './SearchBarButton.styles';
import SearchBarInput from './SearchBarInput.styles';

import './SearchBar.scss';

const SearchBar = () => (
	<SearchBarContainer>
		<div className="search-bar">
			<SearchBarInput placeholder="keyword..." />
			<SearchBarButton>Search</SearchBarButton>
		</div>
	</SearchBarContainer>
);

export default SearchBar;