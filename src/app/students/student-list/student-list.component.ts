import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Student } from '../shared/students';
import { Observable } from 'rxjs';
import * as studentActions from '../store/students.actions';
import { getAllStudents } from '../store/students.reducers';
import { MatDialog } from '@angular/material/dialog';
import { StudentCreateComponent } from '../student-create/student-create.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  title = '';
  students: Observable<Student[]>;
  constructor(public dialog: MatDialog,
    private store: Store<AppState>) {
  }
  ngOnInit() {
    console.log('... initializing Student list component.');
    this.students = this.store.select(getAllStudents);
  }
  public openDialog(): void {
    let dialogRef = this.dialog.open(StudentCreateComponent, {

    });
  }
  delete(id: number) {
    if (confirm('Are you sure do you want to delete this Student?')) {
      this.store.dispatch(new studentActions.RemoveStudent(id));
    }
  }
}
