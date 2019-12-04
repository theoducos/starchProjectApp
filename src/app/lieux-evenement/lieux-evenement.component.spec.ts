import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxEvenementComponent } from './lieux-evenement.component';

describe('LieuxEvenementComponent', () => {
  let component: LieuxEvenementComponent;
  let fixture: ComponentFixture<LieuxEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuxEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
