import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngFormsComponent } from './components/ang-forms/ang-forms.component';

const routes: Routes = [
  { path: '' , component: AngFormsComponent},
  { path: '**' , pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
