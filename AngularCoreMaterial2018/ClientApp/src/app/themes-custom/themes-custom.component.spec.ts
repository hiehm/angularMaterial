import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesCustomComponent } from './themes-custom.component';

describe('ThemesCustomComponent', () => {
  let component: ThemesCustomComponent;
  let fixture: ComponentFixture<ThemesCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemesCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
