import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = [{
    no: 1,
    name: 'gopi',
    email: 'test@gmail.com',
    username: 'testgopi'
  }];
  loading = false;
  submitted = false;
  passwordForm: FormGroup;
  isAdmin = true;
  passwordScreen = false;
  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private users: UserService
  ) {
    this.passwordForm = this.fb.group({
      old: ['', Validators.required],
      new: ['', Validators.required]
    });
  }
  get f() { return this.passwordForm.controls; }

  ngOnInit(): void {
    this.users.getUsers().subscribe((result: any) => {
      console.log(result);
    });
  }

  changePassword(state: any): void {
    this.passwordScreen = state;
  }

  submit(): void {
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return;
    }
    this.router.navigate(['/signin']);
  }

  signout() {
    this.router.navigate(['/signin']);
  }
}
