import React from 'react';
import Button from './Button.styles';
import Input from './Input.styles';

import './SearchBar.scss';

const SearchBar = () => (
	<form>
		<div className="search-bar">
			<Input placeholder="keyword..." />
			<Button>Search</Button>
		</div>
	</form>
);

export default SearchBar;