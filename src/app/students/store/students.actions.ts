import {Action} from '@ngrx/store';
import {Student} from '../shared/students';

export const GET_GAMES = '[ALL] Students';
export const GET_GAMES_SUCCESS = '[ALL] Students Success';
export const GET_GAMES_ERROR = '[ALL] Students Error';

export const GET_GAME = '[GET] Student';
export const GET_GAME_SUCCESS = '[GET] Students Success';
export const GET_GAME_ERROR = '[GET] Students Error';

export const CREATE_GAME = '[CREATE] Student';
export const CREATE_GAME_SUCCESS = '[CREATE] Student Success';
export const CREATE_GAME_ERROR = '[CREATE] Student Error';

export const DELETE_GAME = '[DELETE] Student';
export const DELETE_GAME_SUCCESS = '[DELETE] Student Success';
export const DELETE_GAME_ERROR = '[DELETE] Student Error';

export const UPDATE_GAME = '[UPDATE] Student';
export const UPDATE_GAME_SUCCESS = '[UPDATE] Student Success';
export const UPDATE_GAME_ERROR = '[UPDATE] Student Error';

/****************************************
 * GET all the students
 ****************************************/
export class GetAllStudents implements Action {
  readonly type = GET_GAMES;
}

export class GetAllStudentsSuccess implements Action {
  readonly type = GET_GAMES_SUCCESS;

  constructor(public payload: Student[]) {
  }
}

export class GetAllStudentsError implements Action {
  readonly type = GET_GAMES_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * GET student by id
 ****************************************/
export class GetStudent implements Action {
  readonly type = GET_GAME;

  constructor(public payload: number) {
  }
}

export class GetStudentSuccess implements Action {
  readonly type = GET_GAME_SUCCESS;

  constructor(public payload: Student) {
  }
}

export class GetStudentError implements Action {
  readonly type = GET_GAME_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * ADD new student
 ****************************************/
export class AddStudent implements Action {
  readonly type = CREATE_GAME;

  constructor(public payload: Student) {
  }
}

export class AddStudentSuccess implements Action {
  readonly type = CREATE_GAME_SUCCESS;

  constructor(public payload: number) {
  }
}

export class AddStudentError implements Action {
  readonly type = CREATE_GAME_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * REMOVE a student by id
 ****************************************/
export class RemoveStudent implements Action {
  readonly type = DELETE_GAME;

  constructor(public payload: number) {
  }
}

export class RemoveStudentSuccess implements Action {
  readonly type = DELETE_GAME_SUCCESS;

  constructor(public payload: Student) {
  }
}

export class RemoveStudentError implements Action {
  readonly type = DELETE_GAME_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * UPDATE student by id
 ****************************************/
export class UpdateStudent implements Action {
  readonly type = UPDATE_GAME;

  constructor(public payload: Student) {
  }
}

export class UpdateStudentSuccess implements Action {
  readonly type = UPDATE_GAME_SUCCESS;
}

export class UpdateStudentError implements Action {
  readonly type = UPDATE_GAME_ERROR;

  constructor(public payload: Error) {
  }
}
