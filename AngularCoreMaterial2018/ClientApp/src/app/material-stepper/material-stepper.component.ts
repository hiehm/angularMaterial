import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material'; //引用Optional Label Module

export class CustomOptionalLabel extends MatStepperIntl {
  optionalLabel="必填"
}

@Component({
  selector: 'app-material-stepper',
  templateUrl: './material-stepper.component.html',
  styleUrls: ['./material-stepper.component.css'],
  providers: [{
    provide: MatStepperIntl,
    useClass: CustomOptionalLabel
  }]
})


export class MaterialStepperComponent implements OnInit {
  isLinear: boolean = true; //修改Linear狀態
  basicFormGroup: FormGroup; //ReactiveForm-單一表單單一Step流程
  surverForm: FormGroup; //多表單單一Step

  constructor() {
    //FormGroup
    this.basicFormGroup = new FormGroup({
      //FormControl,加入Form Validators
      name: new FormControl('', Validators.required)
    });
    //Multi FormGroup
    this.surverForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', Validators.required)
      }),
      basicQuestions2: new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required])
      }),
      basicQuestions3: new FormGroup({
        other: new FormControl('', Validators.required)
      })
    });
  }

  ngOnInit() {

  }
}
