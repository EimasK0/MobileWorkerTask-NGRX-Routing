import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from './students.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentEditComponent} from './student-edit/student-edit.component';

export const studentsRoutes: Routes = [{
  path: '',
  component: StudentsComponent,
  children: [
    {path: '', component: StudentListComponent},
    {path: 'detail/:id', component: StudentDetailComponent},
    {path: 'create', component: StudentCreateComponent},
    {path: 'edit/:id', component: StudentEditComponent}
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(studentsRoutes)
  ],
  exports: [RouterModule]
})
export class StudentsRoutingModule {
}

export const studentsRoutedComponents = [
  StudentsComponent,
  StudentListComponent,
  StudentDetailComponent,
  StudentCreateComponent,
  StudentEditComponent
];
