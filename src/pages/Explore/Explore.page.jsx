import React from 'react';
import { useLocation } from 'react-router-dom';

// Components
import BodyContainer from '../../components/Common/Misc/BodyContainer.component';
import LeftTitle from '../../components/Common/Misc/LeftTitle.component';
import CategoriesContainer from '../../components/Explore/CategoriesContainer.component';
import CategoryCard from '../../components/Explore/CategoryCard.component';

// Data
import { categories } from '../../data/data.utils';

const Explore = () => {
	let { pathname } = useLocation();

	return (
		<BodyContainer>
			<LeftTitle>Categories</LeftTitle>
			<CategoriesContainer>
				{categories.map((category,idx) => (
					<CategoryCard 
						to={`${pathname}/${category.subURL}`}
						key={`category-${idx}`} 
						color={category.color}
					>
						{category.title}
					</CategoryCard>
				))}
			</CategoriesContainer>
		</BodyContainer>
	)
};

export default Explore;