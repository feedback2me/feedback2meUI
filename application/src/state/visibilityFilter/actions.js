import constants from '../../utils/constants';

export const setVisibilityFilter = (filter) => ({
    type: constants.setVisibilityFilter,
    filter,
});
