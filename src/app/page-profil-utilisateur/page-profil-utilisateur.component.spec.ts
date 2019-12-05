import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfilUtilisateurComponent } from './page-profil-utilisateur.component';

describe('PageProfilUtilisateurComponent', () => {
  let component: PageProfilUtilisateurComponent;
  let fixture: ComponentFixture<PageProfilUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfilUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfilUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
