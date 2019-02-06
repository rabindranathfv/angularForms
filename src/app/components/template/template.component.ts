import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user: Object = {
    name: 'rabindranath',
    lastname: 'ferreira',
    email: 'test@hotmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

  save( form: NgForm) {
    console.log('save data');
    console.log(form);
    console.log(`data capturada con el form ${form.value}`);
  }
}
