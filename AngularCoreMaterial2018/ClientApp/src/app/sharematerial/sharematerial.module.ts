//自訂共用Material Module供Component共用
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule,
  MatButtonToggleModule, MatRippleModule, MatSidenavModule,
  MatToolbarModule, MatListModule, MatMenuModule,
  MatStepperModule, MatFormFieldModule, MatInputModule,
  MatAutocompleteModule, MatDatepickerModule, MatSlideToggleModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
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
    MatDatepickerModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
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
    MatSlideToggleModule
  ]
})
export class SharematerialModule { }
