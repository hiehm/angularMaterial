import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharematerialModule } from './sharematerial/sharematerial.module'; //自訂Share Material Module
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MaterialElementComponent } from './material-element/material-element.component';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';
import { MaterialStepperComponent } from './material-stepper/material-stepper.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { ErrorStateMatcher } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MaterialElementComponent,
    MaterialSidenavComponent,
    MaterialStepperComponent,
    MaterialInputComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'material-element', component: MaterialElementComponent },
      { path: 'material-sidenav', component: MaterialSidenavComponent },
      { path: 'material-stepper', component: MaterialStepperComponent },
      { path: 'material-input', component: MaterialInputComponent }
    ]),
    SharematerialModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
