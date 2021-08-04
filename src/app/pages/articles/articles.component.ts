import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ArticleModel} from "../../models/ArticleModel";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {ChangeWizardAction} from "../../store/actions/wizard.action";
import {pluck} from "rxjs/operators";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles$: Observable<ArticleModel[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.articles$ = this.store.select('articles').pipe(
      pluck('filteredArticlesByDate')
    );

    this.store.dispatch(new ChangeWizardAction({
      title: 'Select Articles',
      count: 2
    }));
  }
}
