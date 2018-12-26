import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent, Sort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {
  //分頁元件
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('DynamicPaginator') DynamicPaginator: MatPaginator;
  @ViewChild('paginatorMulti') paginatorMulti: MatPaginator;
  @ViewChild('paginatorMulti2') paginatorMulti2: MatPaginator;
  //排序元件
  @ViewChild('sortTable') sortTable: MatSort;
  //DOM Native 
  @ViewChild('filter') filter: ElementRef;

  //MatTableDataSource<T> <mat-table>主要資源設定
  emailsDataSource: MatTableDataSource<any>; 
  DynamicEmailDataSource: MatTableDataSource<any>;  
  PaginatorMultiDataSource: MatTableDataSource<any>; 
  PaginatorCardDataSource: any[];
  ImageSrc: string;
  private filterText = new Subject<string>();

  constructor(private httpClient: HttpClient) {
    this.emailsDataSource = new MatTableDataSource<any>();
    this.DynamicEmailDataSource = new MatTableDataSource<any>();
    this.PaginatorMultiDataSource = new MatTableDataSource<any>();
    this.PaginatorCardDataSource = [];
  }

  ngOnInit() {
    this.getDataSource();
    //Dynamic Paginator Init Data
    this.getDynamicDataSource(0, 10);
    this.getPaginatorMultiDataSource(1, 5);
    //PageEvent 分頁按下時觸發
    this.DynamicPaginator.page.subscribe((page: PageEvent) => {
      this.getDynamicDataSource(page.pageIndex, page.pageSize);
    });
    this.paginatorMulti.page.subscribe((page: PageEvent) => {
      this.getPaginatorMultiDataSource(page.pageIndex, page.pageSize);
    });
    this.paginatorMulti2.page.subscribe((page: PageEvent) => {
      this.getPaginatorMultiDataSource(page.pageIndex, page.pageSize);
    });
    //Filter Function
    fromEvent(this.filter.nativeElement, 'keyup').pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe(() => {
        //this.MatTableDataSource.filter 取得欲過濾的字串
        this.emailsDataSource.filter = (this.filter.nativeElement as HTMLInputElement).value;
        //this.MatTableDataSource.filterPredicate 設定過濾欄位條件
        //(data 每一列資料來源,filter 傳入的過濾字串)
        this.emailsDataSource.filterPredicate = (data: any, filter: string): boolean => {
          return data.title.indexOf(filter) !== -1;
        };
      });

    //Subject方式
    //this.filterText.pipe(
    //  debounceTime(300),
    //  distinctUntilChanged(),
    //).subscribe((term: string) => {
    //  //過濾Table DataSource
    //  this.emailsDataSource.filter = term
    //});
  }
  //Subject方式
  //filterKeyup(term: string): void {
  //  this.filterText.next(term);
  //}
  getDataSource(): void {
    this.httpClient.get<any>('https://api.github.com/search/issues?q=repo:angular/material2&page=1')
      .subscribe(data => {
        //Paginator 總筆數
        this.paginator.length = data.items.length;
        //Paginator 初始頁碼
        this.paginator.pageIndex = 0;
        //Paginator 單頁總數
        this.paginator.pageSize = 10;
        //Paginator 切換單頁顯示數量
        this.paginator.pageSizeOptions = [5, 10, 15];
        //Table 資料來源
        this.emailsDataSource.data = data.items;
        //Table 搭載Paginator物件
        this.emailsDataSource.paginator = this.paginator;
        //Table 搭載Sort物件
        this.emailsDataSource.sort = this.sortTable;
      });
  }
  getDynamicDataSource(pageIndex: number, pageSize: number): void {
    this.httpClient.get<any>(`https://api.github.com/search/issues?q=repo:angular/material2&page=
                             ${pageIndex + 1}&per_page=${pageSize}`)
      .subscribe(data => {
        //動態將資料載入MatTableDataSource<T>,不需指定Paginator給Table        
        this.DynamicPaginator.length = data.total_count;
        this.DynamicEmailDataSource.data = data.items;
      });
  }
  getPaginatorMultiDataSource(pageIndex: number, pageSize: number) {
    this.httpClient.get<any>(`https://api.github.com/search/issues?q=repo:angular/material2&page=
                             ${pageIndex + 1}&per_page=${pageSize}`)
      .subscribe(data => {
        this.ImageSrc = `https://picsum.photos/300/300/?random=${pageIndex+15}`;
        this.paginatorMulti.pageIndex = pageIndex;
        this.paginatorMulti.pageSize = pageSize;     
        this.paginatorMulti.pageSize = 5;
        this.paginatorMulti.length = data.total_count;
        this.paginatorMulti2.pageIndex = pageIndex;
        this.paginatorMulti2.pageSize = pageSize;
        this.paginatorMulti2.pageSize = 5;
        this.paginatorMulti2.length = data.total_count;
        this.PaginatorMultiDataSource.data = data.items;
        this.PaginatorCardDataSource = data.items;
      });
  }
  changeSort(sortInfo: Sort) {
    //Sort包含兩種排序相關屬性active,direction
  }
  reply(obj: any): void {
    console.log(obj);
  }
  delete(obj: any): void {
    console.log(obj);
  }
}
