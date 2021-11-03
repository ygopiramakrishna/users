import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loading = false;
  submitted = false;
  signInForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly router: Router
  ) {
    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.signInForm.controls; }

  ngOnInit(): void {
  }

  login(): void {
    this.submitted = true;
    if (this.signInForm.invalid) {
      return;
    }
    this.router.navigate(['/home']);
  }
}
