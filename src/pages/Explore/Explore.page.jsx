import React from 'react';
import { useHistory } from 'react-router-dom';

// Components
import LeftTitle from '../../components/Common/Misc/LeftTitle.component';
import CategoriesContainer from '../../components/Explore/CategoriesContainer.component';
import CategoryCard from '../../components/Explore/CategoryCard.component';

// Data
import { categories } from '../../data/data.utils';

const Explore = () => {
	let history = useHistory();

	return (
		<div className="body-container">
			<LeftTitle>Categories</LeftTitle>
			<CategoriesContainer>
				{categories.map((category,idx) => (
					<CategoryCard 
						to={`${category.subURL}`}
						key={`category-${idx}`} 
						color={category.color}
					>
						{category.title}
					</CategoryCard>
				))}
			</CategoriesContainer>
		</div>
	)
};

export default Explore;