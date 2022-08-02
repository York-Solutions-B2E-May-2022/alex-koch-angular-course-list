import { Action } from '@ngrx/store';
import { CourseItem } from '../models/course-item.model';

// I like enum for this.
export enum CourseActionType {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

export class AddItemAction implements Action {
  readonly type = CourseActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: CourseItem) {}
}
export class DeleteItemAction implements Action {
  readonly type = CourseActionType.DELETE_ITEM;
  //add an optional payload
  constructor(public payload: { id: string }) {}
}

// will we make a new action type for every action? this seems wrong.
export type CourseAction = AddItemAction | DeleteItemAction;
