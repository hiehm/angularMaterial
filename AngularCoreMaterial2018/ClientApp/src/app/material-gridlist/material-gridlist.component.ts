import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-material-gridlist',
  templateUrl: './material-gridlist.component.html',
  styleUrls: ['./material-gridlist.component.css']
})
export class MaterialGridlistComponent implements OnInit {
  posts$: any[];
  constructor() {
  
  }

  ngOnInit() {
    this.posts$ = ['MATT', 'MARY', 'Ilandy'];
  }

}
