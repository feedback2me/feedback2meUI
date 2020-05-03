import React from 'react';
import FilterLink from '../../containers/filterLink';
import constants from '../../utils/constants';

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={constants.visibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={constants.visibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter={constants.visibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </div>
);

export default Footer;
