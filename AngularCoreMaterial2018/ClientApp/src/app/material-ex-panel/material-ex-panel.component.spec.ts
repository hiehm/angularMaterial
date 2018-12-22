import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExPanelComponent } from './material-ex-panel.component';

describe('MaterialExPanelComponent', () => {
  let component: MaterialExPanelComponent;
  let fixture: ComponentFixture<MaterialExPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialExPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialExPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
