import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDynamicComponentComponent } from './cdk-dynamic-component.component';

describe('CdkDynamicComponentComponent', () => {
  let component: CdkDynamicComponentComponent;
  let fixture: ComponentFixture<CdkDynamicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkDynamicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
