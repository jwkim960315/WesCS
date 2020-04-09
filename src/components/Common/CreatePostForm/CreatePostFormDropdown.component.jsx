import React from 'react';

import DropdownContainer from './DropdownContainer.styles';
import CategorySelect from './CategorySelect.styles';

import { categories } from '../../../data/data.utils';

const CreatePostFormDropdown = ({ category, onCategoryChange }) => {
    return (
        <DropdownContainer>
            <i className="fas fa-caret-down fa-lg"></i>
            <CategorySelect dir="rtl" value={category} onChange={onCategoryChange} >
                {
                    categories.filter(({subURL}) => subURL !== 'allposts').map(({ title, subURL },idx) => (
                        <option key={`category-option-${idx}`} value={`${subURL}`}>{title}</option>
                    ))
                }
            </CategorySelect>
        </DropdownContainer>
    )
};

export default CreatePostFormDropdown;