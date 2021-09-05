import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/students';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { AddStudent } from '../store/students.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  title = 'Create new event';
  student: Student = new Student();
  constructor(private router: Router,
    private store: Store<AppState>) {
  }
  onBack() {
    this.router.navigate(['/students']);
  }
  onSaveStudent() {
    this.store.dispatch(new AddStudent(this.student));
  }
}
