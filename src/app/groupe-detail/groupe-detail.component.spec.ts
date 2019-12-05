import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {GroupeDetailComponent} from './goupe-detail.component';


describe('GroupeDetailComponent', () => {
  let component: GroupeDetailComponent;
  let fixture: ComponentFixture<GroupeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
