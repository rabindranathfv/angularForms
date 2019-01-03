import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngFormsComponent } from './ang-forms.component';

describe('AngFormsComponent', () => {
  let component: AngFormsComponent;
  let fixture: ComponentFixture<AngFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
