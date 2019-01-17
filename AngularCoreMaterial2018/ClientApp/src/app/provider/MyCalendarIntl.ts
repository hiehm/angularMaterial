import { Injectable } from "@angular/core";
import { MatDatepickerIntl } from '@angular/material';

@Injectable({
  providedIn:'root'
})
export class MyCalendarIntl extends MatDatepickerIntl {
  
  calendarLabel = 'y';
  openCalendarLabel = 'yy';
  nextMultiYearLabel = 'asda';
}
