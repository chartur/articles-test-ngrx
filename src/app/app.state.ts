import { WizardModel } from "./models/WizardModel";
import {ArticleModel} from "./models/ArticleModel";

export interface AppState {
  wizard: WizardModel,
  articles: {
    filteredArticlesByDate: ArticleModel[],
    list: ArticleModel[],
    selectedDay: any
  }
}
