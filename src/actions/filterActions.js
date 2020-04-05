import actionTypes from "./actionTypes";
import { CustomActions } from "../utils/ActionUtils";

export default class FilterActions extends CustomActions {
  setVisibility = filter => ({
    type: actionTypes.FILTER.SET_VISIBILITY,
    filter
  });
}
