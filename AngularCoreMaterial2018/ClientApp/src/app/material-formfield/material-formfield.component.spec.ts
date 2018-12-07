import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormfieldComponent } from './material-formfield.component';

describe('MaterialFormfieldComponent', () => {
  let component: MaterialFormfieldComponent;
  let fixture: ComponentFixture<MaterialFormfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFormfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFormfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
