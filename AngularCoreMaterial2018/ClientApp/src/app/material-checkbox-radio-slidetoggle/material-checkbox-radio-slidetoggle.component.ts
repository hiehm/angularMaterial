import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MatCheckboxChange, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material'; //mat-checkbox event module
@Component({
  selector: 'app-material-checkbox-radio-slidetoggle',
  templateUrl: './material-checkbox-radio-slidetoggle.component.html',
  styleUrls: ['./material-checkbox-radio-slidetoggle.component.css'],
  providers: [
    //設定mat-checkbox點擊之後的行為,'noop'不做任何動作由(click)設定後續行為
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' }
  ]
})
export class MaterialCheckboxRadioSlidetoggleComponent implements OnInit {
  surverForm: FormGroup;
  indeterminateSelectedPayFor: boolean;
  constructor() {
    this.surverForm = new FormGroup({
      checkboxFormGroup: new FormGroup({
        payForAll: new FormControl(false),
        book: new FormControl(false),
        movie: new FormControl(true),
        voice: new FormControl(false)
      }),
      radioFormGroup: new FormGroup({

      }),
      slidetoggleFormGroup: new FormGroup({

      })
    });
  }
  ngOnInit() {
    this._setSelectAllState();
  }
  //取得CheckboxChange event
  checkAllChange($event: MatCheckboxChange) {
    this.surverForm!
      .get('checkboxFormGroup')!
      .get('book')!
      .setValue($event.checked);
    this.surverForm!
      .get('checkboxFormGroup')!
      .get('movie')!
      .setValue($event.checked);
    this.surverForm
      .get('checkboxFormGroup')!
      .get('voice')!
      .setValue($event.checked);
    this._setSelectAllState();
  }
  payForChange() {
    this._setSelectAllState();
  }
  //取得所有checkbox選取狀態,判斷並設定payForAll值
  private _setSelectAllState() {
    const payForBook = this.surverForm!.get('checkboxFormGroup')!.get('book')!.value;
    const payForMusic = this.surverForm!.get('checkboxFormGroup')!.get('movie')!.value;
    const payForMovie = this.surverForm!.get('checkboxFormGroup')!.get('voice')!.value;
    const count = (payForBook ? 1 : 0) + (payForMusic ? 1 : 0) + (payForMovie ? 1 : 0);
    this.surverForm!.get('checkboxFormGroup')!.get('payForAll')!.setValue(count === 3);
    this.indeterminateSelectedPayFor = count > 0 && count < 3;
  }
}
