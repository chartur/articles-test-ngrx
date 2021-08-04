import {WizardModel} from "../../models/WizardModel";
import { Actions, ActionTypes } from "../actions/wizard.action";

export function WizardReducer(state: WizardModel = null, action: Actions) {
  switch (action.type) {
    case ActionTypes.Change:
        return {...action.payload};
    case ActionTypes.Delete:
      return {title: null, count: null};
    default:
        return state;
  }
}
