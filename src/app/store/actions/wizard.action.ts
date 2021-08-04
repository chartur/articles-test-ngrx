import { Action } from "@ngrx/store";
import {WizardModel} from "../../models/WizardModel";

export enum ActionTypes {
  Change = '[WIZARD] change',

  Delete = '[WIZARD] delete'
}

export class ChangeWizardAction implements Action {
  readonly type = ActionTypes.Change;

  constructor(public payload: WizardModel) {}
}

export class DeleteWizardAction implements Action {
  readonly type = ActionTypes.Delete;
}

export type Actions = ChangeWizardAction | DeleteWizardAction;
