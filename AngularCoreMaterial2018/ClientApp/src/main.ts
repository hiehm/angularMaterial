import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
//利用Provide設計一個可注入的基底方法
//provide:'@Inject('provideName'),useFactory:callFunc
const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}
//將Providers寫入platformBrowserDynamic,讓欲使用的Component可於ConStructor中呼叫
platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
