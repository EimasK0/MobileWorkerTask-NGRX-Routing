import * as fromStudents from './students/store/students.reducers';
export interface AppState {
  students: fromStudents.State;
}
