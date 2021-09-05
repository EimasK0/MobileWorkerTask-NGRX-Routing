import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// components
import {PageNotFoundComponent} from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
