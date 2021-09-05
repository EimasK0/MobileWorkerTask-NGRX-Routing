import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as studentActions from './students.actions';
import {
  AddStudent,
  AddStudentError,
  AddStudentSuccess,
  GetAllStudentsError,
  GetAllStudentsSuccess,
  GetStudent,
  GetStudentError,
  GetStudentSuccess,
  RemoveStudent,
  RemoveStudentError,
  RemoveStudentSuccess,
  UpdateStudent,
  UpdateStudentError,
  UpdateStudentSuccess
} from './students.actions';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {StudentsService} from '../shared/students.service';
import {Student} from '../shared/students';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class StudentEffects {
  constructor(private actions$: Actions,
              private svc: StudentsService) {
  }

  @Effect()
  getAllStudents$: Observable<Action> = this.actions$.pipe(
    ofType(studentActions.GET_GAMES),
    switchMap(() => this.svc.findAll()),
    map(heroes => new GetAllStudentsSuccess(heroes)),
    catchError((err) => [new GetAllStudentsError(err)])
  );

  @Effect()
  getStudent$ = this.actions$.pipe(
    ofType(studentActions.GET_GAME),
    map((action: GetStudent) => action.payload),
    switchMap(id => this.svc.findById(id)),
    map(hero => new GetStudentSuccess(hero)),
    catchError((err) => [new GetStudentError(err)])
  );


  @Effect()
  updateStudent$ = this.actions$.pipe(
    ofType(studentActions.UPDATE_GAME),
    map((action: UpdateStudent) => action.payload),
    switchMap(student => this.svc.update(student)),
    map(() => new UpdateStudentSuccess()),
    catchError((err) => [new UpdateStudentError(err)])
  );

  @Effect()
  createStudent$ = this.actions$.pipe(
    ofType(studentActions.CREATE_GAME),
    map((action: AddStudent) => action.payload),
    switchMap(newStudent => this.svc.insert(newStudent)),
    map((response) => new AddStudentSuccess(response.id)),
    catchError((err) => [new AddStudentError(err)])
  );

  @Effect()
  removeStudent$ = this.actions$.pipe(
    ofType(studentActions.DELETE_GAME),
    map((action: RemoveStudent) => action.payload),
    switchMap(id => this.svc.delete(id)),
    map((hero: Student) => new RemoveStudentSuccess(hero)),
    catchError((err) => [new RemoveStudentError(err)])
  );
}
