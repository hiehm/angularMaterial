import { Component, OnInit, ViewChildren, QueryList, ViewContainerRef, TemplateRef, ViewChild, Injector, Inject, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { Portal, CdkPortal, TemplatePortal, ComponentPortal, PortalInjector, CdkPortalOutlet, DomPortalOutlet } from '@angular/cdk/portal';
import { HomeComponent, HOME_INJECT_DATA } from '../home/home.component';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-cdk-dynamic-component',
  templateUrl: './cdk-dynamic-component.component.html',
  styleUrls: ['./cdk-dynamic-component.component.css']
})
export class CdkDynamicComponentComponent implements OnInit {
  currentPortal: Portal<any>; //載入Portal的內容
  @ViewChildren(CdkPortal) templatPortals: QueryList<CdkPortal>; //Directive指定元素載入
  @ViewChild('template') template3: TemplateRef<any>; //<ng-template #temp> #符號指定載入
  @ViewChild('portalOutlet') portalOutlet: CdkPortalOutlet; //CdkPortalOutlet 指定載入
  domPortalOutlet: DomPortalOutlet; //操作<app-root>範圍之外元素
  name: string;
  constructor(@Inject(DOCUMENT) private document: any, //直接使用document操作DOM元素
    private viewContainerRef: ViewContainerRef, //DomPortalOutlet 相依
    private injector: Injector, //DomPortalOutlet 相依
    private componentFactoryResolver: ComponentFactoryResolver, //DomPortalOutlet 相依
    private appRef: ApplicationRef) { } //DomPortalOutlet 相依

  ngOnInit() {
    this.name = 'MATT';
  }
  //建立PortalInjector,將要注入的Component InjectionToken與當前的Injector合併
  private _createInjector(): PortalInjector {
    const injectionTokens = new WeakMap();
     //設定欲傳入資料Component的注入Token,內容為一個{}
    injectionTokens.set(HOME_INJECT_DATA, { nameInObject: this.name });
    return new PortalInjector(this.injector, injectionTokens);
  }
  //使用document自訂DOM Template
  createOutletOutOfApp() {
    const element = this.document.createElement('div');
    element.innerHTML = '<br>我在&ltapp-root&gt;之外';
    this.document.body.appendChild(element);
    //把自訂div變成可被管理的容器
    this.domPortalOutlet = new DomPortalOutlet(element, this.componentFactoryResolver, this.appRef, this.injector);
  }
  //透過 attachTemplatePortal 將內容塞入容器之中
  addTemplatePortal() {
    this.domPortalOutlet.attachTemplatePortal(this.templatPortals.last);
  }
  changePortal1() {
    this.templatPortals.first.context = { nameInObject: this.name };
    this.currentPortal = this.templatPortals.first;
  }

  changePortal2() {
    this.templatPortals.last.context = { nameInObject: this.name };
    this.currentPortal = this.templatPortals.last;
    this.portalOutlet.detach(); //清除附加的Portal
    this.portalOutlet.attach(this.templatPortals.first); //將Portal加入
  }
  changePortal3() {
    // 使用TemplatePortal把一般的TemplateRef包裝起來
    // TemplatePortal(內容,ViewContainerRef,欲傳入到Portal的內容)
    this.currentPortal = new TemplatePortal(this.template3, this.viewContainerRef,
                          { nameInObject: this.name });
  }
  changePortal4() {
    //使用ComponentPortal動態載入Component
    //將合併後的Injector寫入ComponentPortal,達成傳入資料動作
    this.currentPortal = new ComponentPortal(HomeComponent, undefined, this._createInjector());
  }
}
