import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGridlistComponent } from './material-gridlist.component';

describe('MaterialGridlistComponent', () => {
  let component: MaterialGridlistComponent;
  let fixture: ComponentFixture<MaterialGridlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialGridlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialGridlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
