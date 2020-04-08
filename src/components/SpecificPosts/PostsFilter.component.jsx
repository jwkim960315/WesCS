import React, { useState } from 'react';

import PostsFilterContainer from './PostsFilterContainer.styles';
import { categories } from '../../data/data.utils';
import PostsFilterSelect from './PostsFilterSelect.styles';

const PostsFilter = () => {
    const [chosenFilter,setChosenFilter] = useState('recent');

    const onChosenFilterChange = e => setChosenFilter(e.target.value);

    return (
        <PostsFilterContainer>
            <div>
                <i className="fas fa-caret-down fa-lg"></i>
                <PostsFilterSelect align="center" defaultValue={chosenFilter} onChange={onChosenFilterChange}>
                    <option value="recent">Recent</option>
                    <option value="oldest">Oldest</option>
                    {
                        categories.map(({ title, subURL },idx) => (
                            <option key={`filter-option-${idx}`} value={`${subURL}`}>{title}</option>
                        ))
                    }
                </PostsFilterSelect>
            </div>
        </PostsFilterContainer>
    );
}

export default PostsFilter;