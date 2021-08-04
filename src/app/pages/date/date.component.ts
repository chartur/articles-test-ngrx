import { Component, OnInit } from '@angular/core';
import {CalendarDayModel} from "../../models/CalendarDayModel";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {ChangeWizardAction} from "../../store/actions/wizard.action";
import {filter, map} from "rxjs/operators";
import {FilterArticlesAction} from "../../store/actions/article.action";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  public selectedDate$: Observable<any>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new ChangeWizardAction({
      title: 'Select Date',
      count: 1
    }));

    this.selectedDate$ = this.store.select('articles').pipe(
      filter(state => !!state),
      map(state => state.selectedDay)
    );
  }

  onCalendarDateSelect(date: CalendarDayModel) {
    this.store.dispatch(new FilterArticlesAction(date.date));
    this.router.navigate(['/articles'])
  }
}
