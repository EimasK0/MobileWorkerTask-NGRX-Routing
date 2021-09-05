import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../app.state';
import {GetAllStudents} from './store/students.actions';
import {
  getCreateError, getDeleteError, getStudentsError, getUpdateError, isCreated, isDeleted,
  isUpdated
} from './store/students.reducers';
@Component({
  selector: 'app-students',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private router: Router,
              private store: Store<AppState>) {
  }
  ngOnInit() {
    console.log('... Initializing Students component');
    this.store.dispatch(new GetAllStudents());

    this.store.select(getStudentsError).subscribe((error) => this.loadingError(error));
    this.store.select(isDeleted).subscribe((done) => {
      this.actionSuccess(done, 'The student was deleted successfully!!!');
    });
    this.store.select(getDeleteError).subscribe((error) => {
      this.actionError(error, 'Error while deleting the student');
    });
    this.store.select(isUpdated).subscribe((done) => {
      this.actionSuccess(done, 'The student was updated successfully!!!');
    });
    this.store.select(getUpdateError).subscribe((error) => {
      this.actionError(error, 'Error while updating the student');
    });
    this.store.select(isCreated).subscribe((done) => {
      this.actionSuccess(done, 'The student was created successfully!!!');
    });
    this.store.select(getCreateError).subscribe((error) => {
      this.actionError(error, 'Error while creating the student');
    });
  }

  loadingError(error) {
    if (error) {
      alert('Error while loading the list of students');
    }
  }


  actionSuccess(done: boolean, message: string) {
    if (done) {
      alert(message);
      this.router.navigate(['/students']);
    }
  }

  actionError(error, message: string) {
    if (error) {
      alert(message);
    }
  }
}
