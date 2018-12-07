import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCheckboxRadioSlidetoggleComponent } from './material-checkbox-radio-slidetoggle.component';

describe('MaterialCheckboxRadioSlidetoggleComponent', () => {
  let component: MaterialCheckboxRadioSlidetoggleComponent;
  let fixture: ComponentFixture<MaterialCheckboxRadioSlidetoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCheckboxRadioSlidetoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCheckboxRadioSlidetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
