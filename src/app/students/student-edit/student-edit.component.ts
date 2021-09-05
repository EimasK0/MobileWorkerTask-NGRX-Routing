import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/students';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as studentActions from '../store/students.actions';
import { GetStudent, UpdateStudent } from '../store/students.actions';
import { getStudent } from '../store/students.reducers';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  title = 'Student Edition';
  student: Student;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new GetStudent(+params.id));
    });
    this.store.select(getStudent).subscribe(student => {
      if (student != null) {
        this.student = student;
      }
    });
  }
  onSaveStudent() {
    this.store.dispatch(new UpdateStudent(this.student));
  }
  onBack() {
    this.router.navigate(['/students']);
  }
  delete(id: number) {
    if (confirm('Are you sure do you want to delete this Student?')) {
      this.store.dispatch(new studentActions.RemoveStudent(id));
    }
  }
}
