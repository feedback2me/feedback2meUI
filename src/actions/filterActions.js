import actionTypes from "./actionTypes";
import { CustomActions } from "../utils/ActionUtils";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export default class FilterActions extends CustomActions {
  setVisibility = filter => ({
    type: actionTypes.FILTER.SET_VISIBILITY,
    filter
  });
}
