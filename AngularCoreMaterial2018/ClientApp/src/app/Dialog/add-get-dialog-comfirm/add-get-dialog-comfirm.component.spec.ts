import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGetDialogComfirmComponent } from './add-get-dialog-comfirm.component';

describe('AddGetDialogComfirmComponent', () => {
  let component: AddGetDialogComfirmComponent;
  let fixture: ComponentFixture<AddGetDialogComfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGetDialogComfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGetDialogComfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
