import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material'; //擴充自訂Icon註冊器
import { DomSanitizer } from '@angular/platform-browser';  //避免XSS攻擊問題
@Component({
  selector: 'app-material-element',
  templateUrl: './material-element.component.html',
  styleUrls: ['./material-element.component.css']
})
export class MaterialElementComponent implements OnInit {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg', //Icon Namespace 定義命名空間
      'templateSvg', //Icon Name 定義Icon名稱
      //建立Sercurity Icon Path
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/templates.svg'
      ) 
    );
    //加入fontAwesome
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
