import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading = false;
  submitted = false;
  signUpForm: FormGroup;
  genderList = ['Male', 'Female'];
  educationList = [{
    key: 0,
    value: 'Masters'
  }, {
    key: 1,
    value: 'Graduation'
  }, {
    key: 2,
    value: 'Diploma'
  }];
  hobbiesList = [{
    key: 0,
    value: 'One'
  }, {
    key: 1,
    value: 'Two'
  }, {
    key: 0,
    value: 'Three'
  }];
  uploadedFilePath: any;

  constructor(
    private fb: FormBuilder,
    private readonly router: Router
  ) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern('^[ A-Za-z0-9_@./#&+-]*$'), Validators.min(6), Validators.max(12)]],
      confirmpassword: ['', [Validators.required, Validators.pattern('^[ A-Za-z0-9_@./#&+-]*$'), Validators.min(6), Validators.max(12)]],
      picture: [''],
      gender: ['', Validators.required],
      education: ['', Validators.required],
      // hobbies: new FormGroup({
      //   one: new FormControl(false)
      // })
    });
  }

  get f() { return this.signUpForm.controls; }

  ngOnInit(): void {
  }

  uploadImage(event: any): void {
    const files = event.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.uploadedFilePath = reader.result;
    };
  }
  signup(): void {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.router.navigate(['/signin']);
  }
}
