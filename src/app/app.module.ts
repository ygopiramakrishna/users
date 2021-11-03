import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user-service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    MatRippleModule,
    OverlayModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    ResetComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [UserService]
})
export class AppModule { }
