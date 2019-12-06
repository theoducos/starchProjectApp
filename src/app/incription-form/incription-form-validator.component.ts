import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {Entreprise} from "../model/entreprise";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'incription-form-validator',
  templateUrl: './incription-form-validator.component.html',
  styleUrls: ['./incription-form.component.css']
})
export class IncriptionFormValidatorComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  utilisateur: Utilisateur = new Utilisateur();
  entreprise: Entreprise = new Entreprise();


  save() {
    this.utilisateurService.save(this.utilisateur);
  }


  constructor(private utilisateurService: UtilisateurHttpService) {
  }

  ngOnInit() {
  }
}
  export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (!control || !matchingControl) {
        return null;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

