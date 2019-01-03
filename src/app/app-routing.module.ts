import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngFormsComponent } from './components/ang-forms/ang-forms.component';
import { TemplateComponent } from './components/template/template.component';


const routes: Routes = [
  { path: 'template' , component: TemplateComponent },
  { path: '' , component: AngFormsComponent },
  { path: '**' , pathMatch: 'full', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
