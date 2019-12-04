import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauLieuFormComponent } from './nouveau-lieu-form.component';

describe('NouveauLieuFormComponent', () => {
  let component: NouveauLieuFormComponent;
  let fixture: ComponentFixture<NouveauLieuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauLieuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauLieuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
