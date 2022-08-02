import { ActionReducerMap } from '@ngrx/store';
import { CourseItem } from '../models/course-item.model';
import { courseReducer } from './course.reducer';

export interface AppState {
  courseList: Array<CourseItem>;
}

export const reducers: ActionReducerMap<AppState, any> = {
  courseList: courseReducer,
};
