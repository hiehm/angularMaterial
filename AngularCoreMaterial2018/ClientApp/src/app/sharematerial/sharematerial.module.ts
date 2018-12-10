//自訂共用Material Module供Component共用
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule, MatButtonToggleModule,
  MatRippleModule, MatSidenavModule, MatToolbarModule,
  MatListModule, MatMenuModule, MatStepperModule,
  MatFormFieldModule, MatInputModule, MatAutocompleteModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule,
  MatCheckboxModule, MatRadioModule, MatSlideToggleModule,
  MatSliderModule, MatGridListModule, MatCardModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule,
  MAT_DATE_LOCALE, //provide 日期語系格式化
  MAT_DATE_FORMATS, //provide 日期顯示格式化
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter'; //datePicker格式化套件
import { AddGetDialogComponent } from '../Dialog/add-get-dialog/add-get-dialog.component';
export const TW_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
};

@NgModule({
  declarations: [ //宣告component
    AddGetDialogComponent
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
    MatDialogModule
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
    MatDialogModule
  ],
  providers: [
    //moment.js 全域格式化日期語系
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS }
  ],
  //entryComponents 注入動態產生元件
  //在component中動態呼叫另一個component時,必須於此註冊
  entryComponents: [ 
    AddGetDialogComponent
  ],
})
export class SharematerialModule { }
