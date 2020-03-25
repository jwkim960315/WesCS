import React from 'react';

import SearchBarContainer from './SearchBarContainer.styles';
import SearchBarButton from './SearchBarButton.styles';
import SearchBarInput from './SearchBarInput.styles';

const SearchBar = () => (
	<form>
		<SearchBarContainer>
			<SearchBarInput placeholder="keyword..." />
			<SearchBarButton>Search</SearchBarButton>
		</SearchBarContainer>
	</form>
);

export default SearchBar;