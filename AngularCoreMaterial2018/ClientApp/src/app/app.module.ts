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
import { MaterialDatepickerComponent } from './material-datepicker/material-datepicker.component';
import { MaterialSelectComponent } from './material-select/material-select.component';
import { MaterialFormfieldComponent } from './material-formfield/material-formfield.component';
import { MaterialCheckboxRadioSlidetoggleComponent } from './material-checkbox-radio-slidetoggle/material-checkbox-radio-slidetoggle.component';
import { MaterialSliderComponent } from './material-slider/material-slider.component';
import { MaterialGridlistComponent } from './material-gridlist/material-gridlist.component';

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
    MaterialInputComponent,
    MaterialDatepickerComponent,
    MaterialSelectComponent,
    MaterialFormfieldComponent,
    MaterialCheckboxRadioSlidetoggleComponent,
    MaterialSliderComponent,
    MaterialGridlistComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'material-element', component: MaterialElementComponent },
      { path: 'material-sidenav', component: MaterialSidenavComponent },
      { path: 'material-stepper', component: MaterialStepperComponent },
      { path: 'material-input', component: MaterialInputComponent },
      { path: 'material-datepicker', component: MaterialDatepickerComponent },
      { path: 'material-select', component: MaterialSelectComponent },
      { path: 'material-formfield', component: MaterialFormfieldComponent },
      { path: 'material-checkbox-radio-slidetoggle', component: MaterialCheckboxRadioSlidetoggleComponent },
      { path: 'material-slider', component: MaterialSliderComponent },
      { path: 'material-gridlist', component: MaterialGridlistComponent }
    ]),
    SharematerialModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
