import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseItem } from './store/models/course-item.model';
import { AppState } from './store/reducers/reducers';

import { NgForm } from '@angular/forms';
import { AddItemAction } from './store/actions/course.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Trailing $ is a convention for observables.
  // Does everything from state come as an observable?
  // Yes ?? - Store extends Observable.
  courseItems$!: Observable<Array<CourseItem>>;

  // Pass the store in the constructor.
  // Store extends Observable, the type is the type of our state.
  // constructor(private store: Store<AppState>) {}
  constructor(private store: Store<{ courseList: Array<CourseItem> }>) {}

  ngOnInit(): void {
    // this is equivalent to useSelector in Redux.
    this.courseItems$ = this.store.select((state) => state.courseList);
    // This syntax also works with store.select();
    // this.courseItems$ = this.store.select('courseList');
  }

  // takes the data from ngModel in the form.
  addCourse(form: NgForm) {
    // dispatch a new action to the reducer, with the form value as payload.
    this.store.dispatch(new AddItemAction(form.value));

    // reset the form
    form.reset();
  }
}
