import { Component, InjectionToken, Inject } from '@angular/core';

//建立要注入的Token,為之後要注入資料的依據
export const HOME_INJECT_DATA = new InjectionToken<any>('home-inject-data');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  constructor(@Inject(HOME_INJECT_DATA) private data: any) { }

  get name() {
    return this.data.nameInObject;
  }
}
