import { Component, OnInit, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material'; //注入Dialog Service
import { AddGetDialogComponent } from '../Dialog/add-get-dialog/add-get-dialog.component';


@Component({
  selector: 'app-material-gridlist',
  templateUrl: './material-gridlist.component.html',
  styleUrls: ['./material-gridlist.component.css']
})
export class MaterialGridlistComponent implements OnInit {
  posts$: any[];
  constructor(public matDialog: MatDialog) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.posts$ = ['MATT', 'MARY', 'Ilandy'];
    }, 1500);
  }
  showDialog(): void {
    //動態載入component,需於Module中的entryComponents成員註冊
    this.matDialog.open(AddGetDialogComponent)
  }
}
