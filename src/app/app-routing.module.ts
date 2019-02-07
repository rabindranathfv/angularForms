import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validator } from '@angular/forms';


import { AngFormsComponent } from './components/ang-forms/ang-forms.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';


const routes: Routes = [
  { path: 'template' , component: TemplateComponent },
  { path: 'data' , component: DataComponent },
  { path: '' , component: DataComponent },
  // { path: '' , component: AngFormsComponent },
  { path: '**' , pathMatch: 'full', redirectTo: 'data'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
