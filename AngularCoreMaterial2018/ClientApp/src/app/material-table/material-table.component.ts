import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {
  //MatTableDataSource<T> <mat-table>主要資源設定
  emailsDataSource = new MatTableDataSource<any>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getDataSource();
  }
  getDataSource(): void {
    this.httpClient.get<any>('https://api.github.com/search/issues?q=repo:angular/material2&page=1')
      .subscribe(data => {
        this.emailsDataSource.data = data.items;
      });
  }
  reply(obj: any): void {
    console.log(obj);
  }
  delete(obj: any): void {
    console.log(obj);
  }
}
