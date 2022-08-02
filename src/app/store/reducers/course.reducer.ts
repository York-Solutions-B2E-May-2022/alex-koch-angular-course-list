import { CourseItem } from '../models/course-item.model';
import { CourseAction, CourseActionType } from '../actions/course.action';

const initialState: Array<CourseItem> = [
  {
    id: 0,
    department: 'Computer Engineering',
    name: 'C++ Programming',
  },
];

export function courseReducer(
  state: Array<CourseItem> = initialState,
  // Does this mean that this reducer can only take 1 type of action?
  action: CourseAction
): Array<CourseItem> {
  switch (action.type) {
    case CourseActionType.ADD_ITEM:
      return [...state, action.payload];
    case CourseActionType.DELETE_ITEM:
      // TODO create delete item logic
      return [...state];
    default:
      return [...state];
  }
}
