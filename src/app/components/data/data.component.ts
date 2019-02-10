import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { notEqual } from 'assert';
import { Observable } from 'rxjs';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

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
    email: 'test@getMaxListeners.com',
    pasatiempos: ['correr', 'dormir', 'volar']
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
      email: new FormControl('', [Validators.required, Validators.pattern('/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/'), Validators.email]),
      pasatiempos: new FormArray([
        new FormControl('correr', Validators.required)
      ]),
      username: new FormControl('', Validators.required, this.existUsername ),
      passwd: new FormControl('', Validators.required),
      passwd2: new FormControl('', Validators.required)
    });
    // another way to binding default data from object directly to a formgroup
    // this.form.setValue( this.user );

    // add asyn validation
    this.form.controls['passwd2'].setValidators(Validators.required);

    // valueChanges return and observable for check changes inside the form
    this.form.valueChanges.subscribe( resp => console.log(resp) );

    this.form.statusChanges.subscribe( resp => console.log(resp) );
   }

  ngOnInit() {
  }

  existUsername( control: FormControl ): Promise<any>|Observable<any> {
     const promesa = new Promise( (resolve, reject) => {
        setTimeout(() => {
          if( control.value === 'strider' ) {
            resolve( {exist: true} );
          } else {
            reject( null );
          }
        }, 3000 );
     });
     return promesa;
  }

  addPasatiempo() {
    // le indicas el tipado del forma (<tipo>).method
    (<FormArray>this.form.controls['pasatiempos']).push(
      new FormControl('dormir', Validators.required)
    );
  }

  notEqual( control: FormControl): { [s: string]: boolean} {
    console.log(this);
    let form: any = this;
    if ( control.value !== this.form.controls['passwd1'].value ) {
      return {
        notEqual: true
      };
    }
    return null;
  }

  saveData() {
    console.log('se disparo saveData');
    console.log(this.form);
    console.log(this.form.value);

    // reset form
    this.form.reset({
      name: '',
      lastname: '',
      details: {
        sexo: '',
        edad: ''
      },
      email: ''
    });
  }

}
