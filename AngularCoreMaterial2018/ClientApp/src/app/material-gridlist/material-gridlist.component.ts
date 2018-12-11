import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material'; //注入Dialog Service
import { AddGetDialogComponent } from '../Dialog/add-get-dialog/add-get-dialog.component';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-material-gridlist',
  templateUrl: './material-gridlist.component.html',
  styleUrls: ['./material-gridlist.component.css']
})

export class MaterialGridlistComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  //將<ng-template>透過@ViewChild('TemplateName')指派給dialogByTemplate
  @ViewChild('dialogByTemplate') dialogByTemplate;
  posts$: any[];
  constructor(public matDialog: MatDialog) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.posts$ = ['MATT', 'MARY', 'Ilandy'];
    }, 500);
  }
  showDialog(): void {
    //動態載入component,需於Module中的entryComponents成員註冊
    this.matDialog.open(AddGetDialogComponent, {
      //backdropClass 阻隔畫面樣式
      //backdropClass:'color',
      //hasBackdrop 不產生灰底阻隔底下畫面
      //hasBackdrop: false,
      data: {
        name: 'MATT'
      }
    });
  }
  ShowTemplate(): void {
    this.matDialog.open(this.dialogByTemplate);
  }
}
