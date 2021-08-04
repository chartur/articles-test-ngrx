import {Actions, ActionTypes} from "../actions/article.action";
import {ArticleModel} from "../../models/ArticleModel";
import * as moment from "moment";

const initialState: any = {
  filteredArticlesByDate: [],
  list: [],
  selectedDay: moment()
};

export function ArticlesReducer(state: any = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.Get:
      return {
        ...state,
        list: [...action.payload]
      };
    case ActionTypes.Filter:
      return  {
        ...state,
        selectedDay: action.payload.clone(),
        filteredArticlesByDate: state.list.filter(
      (article: ArticleModel) => article.date.isSame(action.payload, 'day')
        )
      };
    default:
      return state;
  }
}
