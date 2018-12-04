import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core'; //Error錯誤控制介面

//不屬於 app.module.ts declarations的類別,必須放置於@Component之前或本體Class之下
export class EarlyErrorStateMarcher implements ErrorStateMatcher {
  //實作isErrorState需匯入 FormGroupDirective、NgForm模組
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    //預設驗證touched、invalid、dirty -->自訂驗證 invalid、dirty
    return !!(control && control.invalid && control.dirty);
  }
}
@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css'],
  providers: [
    //全域套用ErrorStateMatcher
    { provide: ErrorStateMatcher, useClass: EarlyErrorStateMarcher }
  ]
})
export class MaterialInputComponent {
  basicFormGroup: FormGroup;
  earlyErrorStateMacher = new EarlyErrorStateMarcher();
  constructor() {
    this.basicFormGroup = new FormGroup({
      nickname: new FormControl('', Validators.required),
      intro_self: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }
}

