import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private formBuilder: FormBuilder
  ) {
    this.firebaseErrorMessage = '';
    this.signupForm = this.formBuilder.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  signup() {
    if (this.signupForm.invalid) {
      return;
    }

    this.authService.signupUser(this.signupForm.value).then((result) => {
      if (result == null) {
        this.router.navigate(['/']);
      } else if (result.isValid == false) {
        this.firebaseErrorMessage = result.message;
      }
    }).catch(() => {});
  }
}
