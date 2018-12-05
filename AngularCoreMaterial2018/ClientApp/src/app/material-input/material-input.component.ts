import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; //加入Http類別
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core'; //Error錯誤控制介面

//不屬於 app.module.ts declarations的類別,必須放置於@Component之前或本體Class之下
export class EarlyErrorStateMarcher implements ErrorStateMatcher {
  //實作isErrorState需匯入 FormGroupDirective、NgForm模組
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    //預設驗證touched、invalid、dirty -->自訂驗證 invalid、dirty(不包含touched)
    return !!(control && control.invalid && control.dirty);
  }
}
@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css'],
  providers: [
    //全域套用ErrorStateMatcher
    { provide: ErrorStateMatcher, useClass: EarlyErrorStateMarcher }
  ],
  //自訂class套入,修改ViewEncapsulation.None
  encapsulation: ViewEncapsulation.None
})
export class MaterialInputComponent implements OnInit {
  basicFormGroup: FormGroup;
  earlyErrorStateMacher = new EarlyErrorStateMarcher();
  country$: Observable<any[]>;
  majorTechList: any[];

  constructor(private httpClient: HttpClient) {
    this.basicFormGroup = new FormGroup({
      nickname: new FormControl('', Validators.required),
      intro_self: new FormControl('', [Validators.required, Validators.minLength(10)]),
      country: new FormControl('', []),
      majorTech: new FormControl('', [])
    });
    this.majorTechList = [
      {
        name: '前端',
        items: ['HTML', 'CSS', 'JavaScript']
      },
      {
        name: '後端',
        items: ['C#', 'NodeJs', 'Go']
      }]
  }
  ngOnInit() {
    //TODO: 關鍵字大小寫顏色顯示,只能取其一,尚未做出全大小寫判斷

    //取得Input country元素
    const obj = this.basicFormGroup.get('country');
    if (obj != undefined)
      obj.valueChanges //valueChanges 輸入值變更後觸發
        .pipe(
          debounceTime(300),
          distinctUntilChanged()
        )
        .subscribe(inputCountry => {//inputCountry 使用者輸入值
          //每次輸入後撈取JSON Data
          this.country$ = this.httpClient.get<any[]>('assets/data/countries.json')
            .pipe(
              //map 資料重新組合後回傳
              map(countries => {
                return countries.filter(country =>
                  country.name.toLowerCase().indexOf(inputCountry.toString().toLowerCase()) >= 0
                )
              })
            )
        });
  }
  //轉換文字並Highlight關鍵字
  highlightFiltered(countryName: string) {
    const inputCountry = this.basicFormGroup.get('country');
    if (inputCountry != undefined && inputCountry != null)
      return countryName.replace(inputCountry.value, `<span class="autocomplete-highlight">${inputCountry.value}</span>`);
    return null;
  }

  //與[displayWith]綁定,顯示最終結果
  displayCountry(country: any) {
    if (country) {
      return `${country.name} / ${country.code}`;
    } else {
      return '';
    }
  }
}

