import { Component, OnInit, ChangeDetectionStrategy, AfterContentInit, Host, Inject, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MatCalendar, DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material';
import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-date-picker-header',
  templateUrl: './custom-date-picker-header.component.html',
  styleUrls: ['./custom-date-picker-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDatePickerHeaderComponent<D> implements OnInit, AfterContentInit, OnDestroy {
  private destroyed = new Subject<void>();
  private _periodLabel = new Subject<string>();
  basicGroupForm: FormGroup;
  periodLabel: any;
  private PrevYear: any;

  constructor(
    @Host() private calendar: MatCalendar<D>,
    private dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => cdr.markForCheck());
  }
  ngOnInit() {
    this.basicGroupForm = new FormGroup({
      periodInput: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[0-9]*$")])
    });
    this._periodLabel.pipe(
      distinctUntilChanged())
      .subscribe(res => {
        console.log(res);
        this.periodLabel = res;
        this.PrevYear = this.periodLabel;
      })
  }
  ngAfterContentInit() {
    this.periodLabel = this.dateAdapter.format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel);
    this.PrevYear = this.periodLabel;
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  previousClicked(mode: 'month' | 'year') {
    this.calendar.activeDate = mode === 'month' ?
      this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
      this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
    this._periodLabel.next(this.dateAdapter.format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel));
  }

  nextClicked(mode: 'month' | 'year') {
    this.calendar.activeDate = mode === 'month' ?
      this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
      this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
    this._periodLabel.next(this.dateAdapter.format(
                                this.calendar.activeDate,
                                this.dateFormats.display.monthYearLabel));

  }
  periodChange(yearInput: string) {
    if (yearInput.length === 3) {
      //現在時間-上一次紀錄時間
      let resultYear = ((Number(yearInput) - <number>this.PrevYear));
      //resultYear為正則時間軸為+ ,反之時間軸為-
      this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate, resultYear);
      //為設定HeaderComponent中的Input連動
      this._periodLabel.next(this.dateAdapter.format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel));
      console.log(this.PrevYear);
    }
  }
  clearValidator(): void {
    this.basicGroupForm.get('periodInput')!.clearValidators();
    this.basicGroupForm.get('periodInput')!.updateValueAndValidity();
  }
  setValidator(): void {
    this.basicGroupForm.get('periodInput')!.setValidators([Validators.required, Validators.minLength(3), Validators.pattern("^[0-9]*$")]);
    this.basicGroupForm.get('periodInput')!.updateValueAndValidity();
  }
}
