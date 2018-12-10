import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialProgressComponent } from './material-progress.component';

describe('MaterialProgressComponent', () => {
  let component: MaterialProgressComponent;
  let fixture: ComponentFixture<MaterialProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
