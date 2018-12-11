import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material'; //注入Dialog Service
import { AddGetDialogComfirmComponent } from '../add-get-dialog-comfirm/add-get-dialog-comfirm.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-get-dialog',
  templateUrl: './add-get-dialog.component.html',
  styleUrls: ['./add-get-dialog.component.css']
})
export class AddGetDialogComponent implements OnInit {
  names: string;
  constructor(private dialogRef: MatDialogRef<AddGetDialogComponent>, public matDialog: MatDialog) {

  }

  ngOnInit() {
    this.names = 'MATT';
    this.dialogRef.keydownEvents().subscribe((event) => {
      console.log(event);
    });
    this.dialogRef.backdropClick().subscribe((event) => {
      console.log(event);
    });
  }
  doPost(): void {
    //open(DialogClass,{data}) 開啟指定Dialog介面,並傳遞資料
    const confirmDialogRef = this.matDialog.open(AddGetDialogComfirmComponent, {
      data: {
        name: this.names
      }
    });
  }
}
