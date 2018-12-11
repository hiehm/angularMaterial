import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';


@Component({
  selector: 'app-material-chip-tooltip-snackbar',
  templateUrl: './material-chip-tooltip-snackbar.component.html',
  styleUrls: ['./material-chip-tooltip-snackbar.component.css']
})
export class MaterialChipTooltipSnackbarComponent implements OnInit {
  tags: any[];
  separatorKeysCodes: any[];
  constructor() { }

  ngOnInit() {
    this.tags = ['MATT', 'MARY', 'ILANDY'];
    this.separatorKeysCodes = [ENTER, COMMA];
  }
  addTag($event: MatChipInputEvent) {
    if (($event.value || '').trim()) {
      const value = $event.value.trim();
      //判斷是否已存於Array之中
      if (this.tags.indexOf(value) === -1) {
        this.tags.push(value);
      }
    }
    //清空輸入值
    $event.input.value = '';
  }
  removeTag(tagName) {
    console.log(tagName);
    this.tags = this.tags.filter(tag => tag !== tagName);
  }
}
