import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material'; //注入Dialog Service
import { MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-get-dialog-comfirm',
  templateUrl: './add-get-dialog-comfirm.component.html',
  styleUrls: ['./add-get-dialog-comfirm.component.css']
})
export class AddGetDialogComfirmComponent implements OnInit {
  get name() {
    return this.data.name;
  }
  //注入MAT_DIALOG_DATA 接收別的Dialog傳遞資料
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private matDialog: MatDialog) {

  }

  ngOnInit() {
  }
  //關閉所有Dialog介面
  confirm() {
    this.matDialog.closeAll();
  }
}
