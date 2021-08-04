import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {Observable} from "rxjs";
import {WizardModel} from "../../models/WizardModel";

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit, OnDestroy {

  public wizard$: Observable<WizardModel>;

  constructor(
    private store: Store<AppState>
  ) {
    this.wizard$ = this.store.select('wizard')
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
