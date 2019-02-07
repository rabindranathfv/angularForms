import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl('rabindranath'),
      lastname: new FormControl(null),
      email: new FormControl(null),
    });
   }

  ngOnInit() {
  }

  saveData() {
    console.log('se disparo saveData');
    console.log(this.form);
    console.log(this.form.value);
  }

}
