import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncriptionFormComponent } from './incription-form.component';

describe('IncriptionFormComponent', () => {
  let component: IncriptionFormComponent;
  let fixture: ComponentFixture<IncriptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncriptionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
