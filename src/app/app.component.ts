import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showPassword: boolean;
  registrationButtonIsClickable = false;
  registrationSuccessful = false;
  
  nameErrorMessage = "";
  emailErrorMessage = "";
  passwordErrorMessage = "";
  passwordConfirmationErrorMessage = "";

  
  @ViewChild('name', { read: ElementRef }) name: ElementRef;
  @ViewChild('email', { read: ElementRef }) email: ElementRef;
  @ViewChild('password', { read: ElementRef }) password: ElementRef;
  @ViewChild('passwordConfirmation', { read: ElementRef }) passwordConfirmation: ElementRef;
  constructor (private http: HttpClient) { }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  async subscribe($event) {
    $event.preventDefault();

    const body = {
      name: this.name.nativeElement.value,
      email: this.email.nativeElement.value,
      password: this.password.nativeElement.value 
    };

    this.http.post(environment.serverUrl, body)
            .subscribe(response => {
                // @ts-ignore
                response?.status === 201
                  ? this.confirmRegistration()
                  : this.failRegistration()
            });
  }
  
  updateFormValidity() {
    this.registrationButtonIsClickable = false;
    // name validity
    if (!this.name.nativeElement.validity.valid) {
      this.nameErrorMessage = "The name can only contain letters and white spaces";
      return;
    } else {
      this.nameErrorMessage = "";
    }
    // email validity
    if (!this.email.nativeElement.validity.valid) {
      this.emailErrorMessage = "Please insert a valid email";
      return;
    } else {
      this.emailErrorMessage = "";
    }
    // password validity 
    if (!this.password.nativeElement.validity.valid) {
      this.passwordErrorMessage = "Password should be at least 8 characters long and " + 
                                  "should not include the following characters:   " + 
                                  "( ) / > < ] [ \ , ; |";
      return;
    } else {
      this.passwordErrorMessage = "";
    }
    // password confirmation validity 
    if (this.password.nativeElement.value !== this.passwordConfirmation.nativeElement.value) {
      this.passwordConfirmationErrorMessage = "The passwords do not match";
      return;
    } else {
      this.passwordConfirmationErrorMessage = "";
    }
    this.registrationButtonIsClickable = true;
  }

  confirmRegistration() {
    this.registrationSuccessful = true;
    setTimeout(() => this.registrationSuccessful = false, 4000);
    setTimeout(() => {
      document.getElementById("reset-subscription").click();
    }, 1000);
  }

  failRegistration() {
    alert("Something went wrong, please try again");
  }

}
