import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  user = {
    name: 'Rabindranath',
    lastname: '',
    details: {
      sexo: 'MASCULINO',
      edad: 28
    },
    email: 'test@getMaxListeners.com'
  };
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      details: new FormGroup({
        sexo: new FormControl(''),
        edad: new FormControl('')
      }),
      email: new FormControl('', [Validators.required, Validators.pattern('/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/'), Validators.email])
    });
    // another way to binding default data from object directly to a formgroup
    this.form.setValue( this.user );
   }

  ngOnInit() {
  }

  saveData() {
    console.log('se disparo saveData');
    console.log(this.form);
    console.log(this.form.value);
  }

}
