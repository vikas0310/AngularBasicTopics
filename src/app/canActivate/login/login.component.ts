import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpPage: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signUpPage = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      lastName: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  formSubmitted() {

  }

}
