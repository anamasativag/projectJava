import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignComponent } from './asign/asign.component';
import {AppComponent} from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
// import {enableProdMode} from '@angular/core';
import {UsersComponent} from './users.component';

// enableProdMode();

export const routes: Routes = [
  { path: '', redirectTo: 'profesores', pathMatch: 'full' },
  { path: 'asignatura', component: AsignComponent},
  { path: 'profesores', component: UsersComponent},
  { path: 'estudiantes', component: EstudiantesComponent},
  { path: 'asignatura/:userId', component: AsignComponent},
  { path: 'estudiantes/:asignId', component: EstudiantesComponent}
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
