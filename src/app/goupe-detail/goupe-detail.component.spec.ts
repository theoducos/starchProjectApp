import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoupeDetailComponent } from './goupe-detail.component';

describe('GoupeDetailComponent', () => {
  let component: GoupeDetailComponent;
  let fixture: ComponentFixture<GoupeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoupeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoupeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
