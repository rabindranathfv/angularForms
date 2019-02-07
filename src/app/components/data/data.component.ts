import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/'), Validators.email])
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
