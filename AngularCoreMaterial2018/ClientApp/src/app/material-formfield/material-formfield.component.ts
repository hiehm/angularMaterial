import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
@Component({
  selector: 'app-material-formfield',
  templateUrl: './material-formfield.component.html',
  styleUrls: ['./material-formfield.component.css'],
  providers: [{
    //設定全域 placeholder狀態
    provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float:'always'}
  }]
})
export class MaterialFormfieldComponent implements OnInit {
  basicFormGroup: FormGroup;
  constructor() {
    this.basicFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      nickname: new FormControl('', [Validators.required, Validators.maxLength(5)])
    });
  }

  ngOnInit() {
  }

}
