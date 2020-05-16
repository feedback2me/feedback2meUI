import constants from '../../utils/constants';

export const updateSelectedMenuId = (id) => ({
    type: constants.updateSelectedMenuId,
    id,
});
