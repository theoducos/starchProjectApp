import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaEvenementStarchComponent } from './orga-evenement-starch.component';

describe('OrgaEvenementStarchComponent', () => {
  let component: OrgaEvenementStarchComponent;
  let fixture: ComponentFixture<OrgaEvenementStarchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgaEvenementStarchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgaEvenementStarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
