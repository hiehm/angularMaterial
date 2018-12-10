import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGetDialogComponent } from './add-get-dialog.component';

describe('AddGetDialogComponent', () => {
  let component: AddGetDialogComponent;
  let fixture: ComponentFixture<AddGetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
