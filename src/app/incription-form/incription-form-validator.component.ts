import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {Entreprise} from "../model/entreprise";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'incription-form-validator',
  templateUrl: './incription-form-validator.component.html',
  styleUrls: ['./incription-form-validator.component.css']
})
export class IncriptionFormValidatorComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  utilisateur: Utilisateur = new Utilisateur();
  entreprise: Entreprise = new Entreprise();


  save() {
    this.utilisateurService.save(this.utilisateur);
  }


  constructor(private utilisateurService: UtilisateurHttpService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {this.registerForm = this.formBuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mdp: ['', [Validators.required, Validators.minLength(6)]],
    confirmation: ['', Validators.required]
  }, {
    validator: MustMatch('password', 'confirmation')
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n')
  }
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    var control = formGroup.controls[controlName];
    var matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
