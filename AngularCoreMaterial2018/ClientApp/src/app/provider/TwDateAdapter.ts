import { isNullOrUndefined } from 'util';
import { Injectable, Inject } from '@angular/core';
import { NativeDateAdapter, DateAdapter } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Platform } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class TwDateAdapter extends NativeDateAdapter {

  constructor(private datepipe: DatePipe) {
    super('datepipe', new Platform());
  }

  format(date: Date, displayFormat: Object): string {
    let display: string = '';
    if (isNullOrUndefined(date) === false) {
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      if (displayFormat === 'input') {
        if (date.getFullYear() <= 1911) {
          // display = `(民國前) ${Math.abs(year - 1911 - 1)}-${month}-${day}`;
          display = this.datepipe.transform(new Date(Math.abs(year - 1911 - 1), month, day), '(民國前) yy/MM/dd')!;
        } else {
          display = this.datepipe.transform(new Date(Math.abs(year - 1911), month, day), 'yyy/MM/dd')!;
          //display = `${Math.abs(year - 1911)}-${month}-${day}`;
        }
      } else if (displayFormat === 'monthYearLabel') {
        let checkYear = year - 1911;
        if (checkYear >= 100) {
          display = this.datepipe.transform(new Date(year - 1911, month, day), 'yyy')!;
        }
        else {
          display = this.datepipe.transform(new Date(year - 1911, month, day), '0yy')!;
        }
      }
    }
    return display;
  }

}
