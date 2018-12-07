import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material'; //取得DatePickerEvent模組
import * as moment from 'moment';
import { DISABLED } from '@angular/forms/src/model';


@Component({
  selector: 'app-material-datepicker',
  templateUrl: './material-datepicker.component.html',
  styleUrls: ['./material-datepicker.component.css']
})
export class MaterialDatepickerComponent implements OnInit {
  basicGroupForm: FormGroup;
  //設定日期起始時間
  startDate = moment(new Date('1999-1-10'));
  minDate = moment(new Date('1999-1-5'));
  maxDate = moment(new Date('1999-1-25'));

  constructor() {
    this.basicGroupForm = new FormGroup({
      birthdayDefault: new FormControl('', [Validators.required]),
      birthdayStartAt: new FormControl('', [Validators.required]),
      birthdayStartDate: new FormControl('', [Validators.required]),
      birthdayRange: new FormControl('', [Validators.required]),
      birthdayFilter: new FormControl('', [Validators.required]),
      birthdayDateEvent: new FormControl('', [Validators.required]),
      //預設Input為disabed=true
      birthdayInputDisabled: new FormControl({ value: '', disabled: true }, [Validators.required]),
      birthdayCustomOpen: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }
  //過濾不可被選擇日期, 星期二 與 星期五
  dayFilter(date: moment.Moment): boolean {
    const day = date.day();
    return day !== 2 && day !== 5;
  }
  //輸入後觸發
  logInputEvent($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event);
  }
  //輸入值變更後觸發
  logChangeEvent($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event);
  }
}
