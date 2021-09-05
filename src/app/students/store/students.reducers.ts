import * as studentActions from './students.actions';
import {AppAction} from '../../app.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Student} from '../shared/students';

export interface State {
  data: Student[];
  selected: Student;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: State = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: AppAction): State {
  // ...state create immutable state object
  switch (action.type) {
      /*************************
     * GET all students actions
     ************************/
    case studentActions.GET_GAMES:
      return {
        ...state,
        action: studentActions.GET_GAMES,
        done: false,
        selected: null,
        error: null
      };
    case studentActions.GET_GAMES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null
      };
    case studentActions.GET_GAMES_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };

      /*************************
     * GET student by id actions
     ************************/
    case studentActions.GET_GAME:
      return {
        ...state,
        action: studentActions.GET_GAME,
        done: false,
        selected: null,
        error: null
      };
    case studentActions.GET_GAME_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        done: true,
        error: null
      };
    case studentActions.GET_GAME_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };

      /*************************
     * CREATE student actions
     ************************/
    case studentActions.CREATE_GAME:
      return {
        ...state,
        selected: action.payload,
        action: studentActions.CREATE_GAME,
        done: false,
        error: null
      };
    case studentActions.CREATE_GAME_SUCCESS:
      {
        const newStudent = {
          ...state.selected,
          id: action.payload
        };
        const data = [
          ...state.data,
          newStudent
        ];
        return {
          ...state,
          data,
          selected: null,
          error: null,
          done: true
        };
      }
    case studentActions.CREATE_GAME_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };

      /*************************
     * UPDATE student actions
     ************************/
    case studentActions.UPDATE_GAME:
      return {
        ...state,
        selected: action.payload,
        action: studentActions.UPDATE_GAME,
        done: false,
        error: null
      };
    case studentActions.UPDATE_GAME_SUCCESS:
      {
        const index = state
          .data
          .findIndex(h => h.id === state.selected.id);
        if (index >= 0) {
          const data = [
            ...state.data.slice(0, index),
            state.selected,
            ...state.data.slice(index + 1)
          ];
          return {
            ...state,
            data,
            done: true,
            selected: null,
            error: null
          };
        }
        return state;
      }
    case studentActions.UPDATE_GAME_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };

      /*************************
     * DELETE student actions
     ************************/
    case studentActions.DELETE_GAME:
      {
        const selected = state.data.find(h => h.id === action.payload);
        return {
          ...state,
          selected,
          action: studentActions.DELETE_GAME,
          done: false,
          error: null
        };
      }
    case studentActions.DELETE_GAME_SUCCESS:
      {
        const data = state.data.filter(h => h.id !== state.selected.id);
        return {
          ...state,
          data,
          selected: null,
          error: null,
          done: true
        };
      }
    case studentActions.DELETE_GAME_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getStudentsState = createFeatureSelector < State > ('students');
export const getAllStudents = createSelector(getStudentsState, (state: State) => state.data);
export const getStudent = createSelector(getStudentsState, (state: State) => {
  if (state.action === studentActions.GET_GAME && state.done) {
    return state.selected;
  } else {
    return null;
  }

});
export const isDeleted = createSelector(getStudentsState, (state: State) =>
  state.action === studentActions.DELETE_GAME && state.done && !state.error);
export const isCreated = createSelector(getStudentsState, (state: State) =>
 state.action === studentActions.CREATE_GAME && state.done && !state.error);
export const isUpdated = createSelector(getStudentsState, (state: State) =>
 state.action === studentActions.UPDATE_GAME && state.done && !state.error);

export const getDeleteError = createSelector(getStudentsState, (state: State) => {
  return state.action === studentActions.DELETE_GAME
    ? state.error
   : null;
});
export const getCreateError = createSelector(getStudentsState, (state: State) => {
  return state.action === studentActions.CREATE_GAME
    ? state.error
   : null;
});
export const getUpdateError = createSelector(getStudentsState, (state: State) => {
  return state.action === studentActions.UPDATE_GAME
    ? state.error
   : null;
});
export const getStudentsError = createSelector(getStudentsState, (state: State) => {
  return state.action === studentActions.GET_GAMES
    ? state.error
   : null;
});
export const getStudentError = createSelector(getStudentsState, (state: State) => {
  return state.action === studentActions.GET_GAME
    ? state.error
   : null;
});
