import { Action } from '@ngrx/store';
import { CourseItem } from '../models/course-item.model';

// I like enum for this.
export enum CourseActionType {
  ADD_ITEM = '[COURSE] Add Course',
}

export class AddItemAction implements Action {
  readonly type = CourseActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: CourseItem) {}
}

// will we make a new action type for every action? this seems wrong.
export type CourseAction = AddItemAction;
