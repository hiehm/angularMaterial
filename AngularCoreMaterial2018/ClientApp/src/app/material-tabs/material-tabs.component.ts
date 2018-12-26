import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-material-tabs',
  templateUrl: './material-tabs.component.html',
  styleUrls: ['./material-tabs.component.css']
})
export class MaterialTabsComponent implements OnInit {
  @ViewChild('filter') filter: ElementRef;  
  tabIndex: number;
  tabs = ['First', 'Second', 'Third']; //tabs容器數
  selected = new FormControl(0); //建立一個FormControl

  constructor() {
  }

  ngOnInit() {
    this.tabIndex = 0;
    console.log((this.filter.nativeElement as HTMLInputElement).value);
  }
  //新增一個Tab
  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  //MatTabChangeEvent 撈取Tab相關事件
  tabFocusChange($event: MatTabChangeEvent) {
    console.log(`focus變更，indx：${$event.index}`);
  }

  tabSelectedIndexChange($event: number) {
    console.log(`selectedIndex變更，index：${$event}`);
  }

  tabSelectedTabChange($event: MatTabChangeEvent) {
    console.log(`selectedTab變更，index：${$event.index}`);
  }
}
