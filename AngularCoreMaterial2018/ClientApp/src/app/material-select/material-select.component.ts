import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-select',
  templateUrl: './material-select.component.html',
  styleUrls: ['./material-select.component.css']
})
export class MaterialSelectComponent implements OnInit {
  myList: any[];
  mySports: any[];
  isMultiple: boolean;
  constructor() {
    this.myList = [
      {
        id: 1,
        name:'MATT'
      },
      {
        id: 3,
        name:'ILANDY'
      },
      {
        id: 4,
        name:'BONNIE'
      }
    ]
    this.mySports = [
      {
        category: '球類',
        sportName:['保齡球','籃球','網球','躲避球']
      }, {
        category: '休閒',
        sportName:['跑步','散步']
      }
    ]
  }

  ngOnInit() {
    this.isMultiple = true;
  }

}
