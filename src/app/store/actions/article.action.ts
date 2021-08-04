import {Action} from "@ngrx/store";
import {ArticleModel} from "../../models/ArticleModel";

export enum ActionTypes {
  Get = '[ARTICLES] get all',

  Filter = '[ARTICLES] filter'
}

export class GetArticlesAction implements Action {
  readonly type = ActionTypes.Get;

  constructor(public payload: ArticleModel[]) {}
}

export class FilterArticlesAction implements Action {
  readonly type = ActionTypes.Filter;

  constructor(public payload: any){};
}

export type Actions = GetArticlesAction | FilterArticlesAction;
