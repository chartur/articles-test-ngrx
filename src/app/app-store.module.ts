import {NgModule} from "@angular/core";
import {ActionReducerMap, StoreModule} from "@ngrx/store";
import {AppState} from "./app.state";

import { WizardReducer } from "./store/reducers/wizard.reducer";
import {ArticlesReducer} from "./store/reducers/article.reducer";

export const reducers: ActionReducerMap<AppState, any> = {
  wizard: WizardReducer,
  articles: ArticlesReducer
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers)
  ],
  exports: [
    StoreModule
  ]
})

export class AppStoreModule {}
