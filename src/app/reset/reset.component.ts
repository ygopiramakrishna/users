import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare let Email: any;

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  loading = false;
  submitted = false;
  resetForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly router: Router
  ) {
    this.resetForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  get f() { return this.resetForm.controls; }

  ngOnInit(): void {
  }

  reset(): void {
    this.submitted = true;
    if (this.resetForm.invalid) {
      return;
    }
    this.router.navigate(['/landing']);
  }

}
