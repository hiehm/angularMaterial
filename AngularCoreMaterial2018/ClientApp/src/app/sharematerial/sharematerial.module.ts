//自訂共用Material Module供Component共用
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule,
  MatButtonToggleModule, MatRippleModule, MatSidenavModule,
  MatToolbarModule
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
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class SharematerialModule { }
