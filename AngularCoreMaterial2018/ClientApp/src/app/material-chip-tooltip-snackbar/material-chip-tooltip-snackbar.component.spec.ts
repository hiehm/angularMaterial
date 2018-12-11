import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialChipTooltipSnackbarComponent } from './material-chip-tooltip-snackbar.component';

describe('MaterialChipTooltipSnackbarComponent', () => {
  let component: MaterialChipTooltipSnackbarComponent;
  let fixture: ComponentFixture<MaterialChipTooltipSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialChipTooltipSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialChipTooltipSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
