import {NgModule} from '@angular/core';
import {StudentsService} from './shared/students.service';
import {studentsRoutedComponents, StudentsRoutingModule} from './students-routing.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule, ActionReducerMap} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StudentEffects} from './store/students.effects';
import * as studentReducer from './store/students.reducers';
import { DemoMaterialModule } from '../material-module';
import { StudentCreateComponent } from './student-create/student-create.component';
export const reducers: ActionReducerMap<any> = {
  students: studentReducer.reducer,

};
@NgModule({
  imports: [
    SharedModule,
    StudentsRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([StudentEffects]),
    DemoMaterialModule,
  ],
  declarations: [studentsRoutedComponents],
  providers: [
    StudentsService,
  ],
  entryComponents: [StudentCreateComponent],
})
export class StudentsModule {
}
