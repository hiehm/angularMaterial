//自訂共用Material Module供Component共用
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatButtonToggleModule,
  MatRippleModule, MatSidenavModule, MatToolbarModule,
  MatListModule, MatMenuModule, MatStepperModule,
  MatFormFieldModule, MatInputModule, MatAutocompleteModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule,
  MatCheckboxModule, MatRadioModule, MatSlideToggleModule,
  MatSliderModule, MatGridListModule, MatCardModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule,
  MatChipsModule, MatTooltipModule, MatSnackBarModule,
  MatTableModule, MatSortModule, MatPaginatorModule,
  MatExpansionModule, MatTabsModule,
  MAT_DATE_LOCALE, //provide 日期語系格式化
  MAT_DATE_FORMATS,
  DateAdapter,
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter'; //datePicker格式化套件
import { AmazingTimePickerModule } from 'amazing-time-picker'; //datetimePicker地三方套件
import { PortalModule } from '@angular/cdk/portal'; //
import { AddGetDialogComponent } from '../Dialog/add-get-dialog/add-get-dialog.component';
import { AddGetDialogComfirmComponent } from '../Dialog/add-get-dialog-comfirm/add-get-dialog-comfirm.component';
import { DatePipe } from '@angular/common';
import { TwDateAdapter } from '../provider/TwDateAdapter';
//export const TW_FORMATS = {
//  parse: {
//    dateInput: 'YYYY/MM/DD'
//  },
//  display: {
//    dateInput: 'YYYY/MM/DD',
//    monthYearLabel: 'YYYY MMM',
//    dateA11yLabel: 'YYY/MM/DD',
//    monthYearA11yLabel: 'YYY MMM'
//  }
//};
export const TW_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'input',
    monthYearLabel: 'monthYearLabel',
    dateA11yLabel: 'input',
    monthYearA11yLabel: 'monthYearLabel'
  }
};

@NgModule({
  declarations: [ //宣告component
    AddGetDialogComponent,
    AddGetDialogComfirmComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule, //<mat-icon>IconName</mat-icon>語意化Icons  
    MatButtonToggleModule,  //群組Button開關控制
    MatRippleModule,//漣漪效果    
    MatSidenavModule, //介面切割 <mat-sidenav-container> <mat-sidenav> <mat-sidenav-content>
    MatToolbarModule, //ToolBar
    MatListModule, //List列表
    MatMenuModule, //Menu選單
    MatStepperModule, //Stepper流程控制表單(Wizard)
    MatFormFieldModule, //豐富表單元素模組
    MatInputModule, //Input元素
    MatAutocompleteModule, //AutoComplete自動完成,
    MatDatepickerModule, //Datepicker 日期套件
    MatNativeDateModule, //Datepicker 原生風格模組
    MatMomentDateModule, //Datepicker 日期格式轉化套件
    MatSelectModule, //Select 下拉選單
    MatCheckboxModule,//CheckBox 
    MatRadioModule,   //Radio
    MatSlideToggleModule,//SlideToggle 滑動點擊
    MatSliderModule, //Slider 滑動線條
    MatGridListModule, //GridList 網格排列元素
    MatCardModule, //Card 卡片元素
    MatProgressBarModule, //ProgressBar 線性進度條
    MatProgressSpinnerModule,//ProgressSpinner 迴圈進度條
    MatDialogModule, //Dialog 彈跳視窗
    MatChipsModule, //Chip 文章標籤
    MatTooltipModule, //Tooltip 標籤提示訊息
    MatSnackBarModule, //Toast 底部彈跳提示訊息
    MatTableModule, //Table 表格式列表
    MatExpansionModule,//Panel 收納盒與手風琴
    MatTabsModule, //Tab 標籤
    MatSortModule, //Sort 排序
    MatPaginatorModule,
    DragDropModule, //DragDrop 拖拉
    FlexLayoutModule, //FlexLayout
    AmazingTimePickerModule //DateTimePicker地三方套件
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatExpansionModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    DragDropModule,
    PortalModule,
    FlexLayoutModule,
    AmazingTimePickerModule
  ],
  providers: [
    DatePipe,
    //moment.js 全域格式化日期語系
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS },
    { provide: DateAdapter, useClass: TwDateAdapter },
    //{ provide: MatDatepickerIntl, useClass: MyCalendarIntl }
  ],
  //entryComponents 注入動態產生元件
  //在component中動態呼叫另一個component時,必須於此註冊
  entryComponents: [ 
    AddGetDialogComponent,
    AddGetDialogComfirmComponent
  ],
})
export class SharematerialModule { }
