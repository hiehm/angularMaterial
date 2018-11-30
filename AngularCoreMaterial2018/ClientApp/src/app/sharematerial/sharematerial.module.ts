//自訂共用Material Module供Component共用
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    //<mat-icon>IconName</mat-icon>語意化Icons
    MatIconModule  
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class SharematerialModule { }
