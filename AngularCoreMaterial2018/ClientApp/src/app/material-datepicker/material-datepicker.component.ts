import { Component, OnInit, Inject,Host, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MatDatepickerInputEvent, MatCalendar } from '@angular/material'; //取得DatePickerEvent模組
import { AmazingTimePickerService } from 'amazing-time-picker'; //引用DateTimePicker Service
import * as moment from 'moment';
import { CustomDatePickerHeaderComponent } from '../Partial/custom-date-picker-header/custom-date-picker-header.component';


@Component({
  selector: 'app-material-datepicker',
  templateUrl: './material-datepicker.component.html',
  styleUrls: ['./material-datepicker.component.css']
})
export class MaterialDatepickerComponent implements OnInit {
  basicGroupForms: FormGroup;
  //設定日期起始時間
  startDate = moment(new Date('1999-1-10'));
  minDate = moment(new Date('1999-1-5'));
  maxDate = moment(new Date('1999-1-25'));
  exampleHeader: any;
  constructor(
    private atp: AmazingTimePickerService) {
    this.basicGroupForms = new FormGroup({
      birthdayDefault: new FormControl('', [Validators.required]),
      birthdayStartAt: new FormControl('', [Validators.required]),
      birthdayStartDate: new FormControl('', [Validators.required]),
      birthdayRange: new FormControl('', [Validators.required]),
      birthdayFilter: new FormControl('', [Validators.required]),
      birthdayDateEvent: new FormControl('', [Validators.required]),
      //預設Input為disabed=true
      birthdayInputDisabled: new FormControl({ value: '', disabled: true }, [Validators.required]),
      birthdayCustomOpen: new FormControl('', [Validators.required]),
      dateTimePickerInput: new FormControl('', [Validators.required]),
      CustomDatePickerHeader: new FormControl('', [Validators.required])
    });
    this.exampleHeader = CustomDatePickerHeaderComponent;
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
  //amazing-time-pick open
  amazingTimePickOpne() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.basicGroupForms.get('dateTimePickerInput')!.setValue(time);
      console.log(time);
    });
  }
}
