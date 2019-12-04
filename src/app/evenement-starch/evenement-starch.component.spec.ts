import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementStarchComponent } from './evenement-starch.component';

describe('EvenementStarchComponent', () => {
  let component: EvenementStarchComponent;
  let fixture: ComponentFixture<EvenementStarchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementStarchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementStarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
