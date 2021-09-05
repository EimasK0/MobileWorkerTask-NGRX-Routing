import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as studentActions from '../store/students.actions';
import { GetStudent } from '../store/students.actions';
import { Observable } from 'rxjs';
import { Student } from '../shared/students';
import { getStudent } from '../store/students.reducers';

@Component({
  selector: 'student-detail.component',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  title = 'Student Details';
  student: Observable<Student>;
  constructor(private route: ActivatedRoute,
    private store: Store<AppState>) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new GetStudent(+params.id));
    });
    this.student = this.store.select(getStudent);
  }
  delete(id: number) {
    if (confirm('Are you sure do you want to delete this Student?')) {
      this.store.dispatch(new studentActions.RemoveStudent(id));
    }
  }

}
