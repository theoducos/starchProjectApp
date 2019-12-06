import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationGroupeComponent } from './creation-groupe.component';

describe('CreationGroupeComponent', () => {
  let component: CreationGroupeComponent;
  let fixture: ComponentFixture<CreationGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationGroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
