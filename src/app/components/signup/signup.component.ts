import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  test: boolean = false;
  actualPath: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.actualPath = this.router.url
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
    })
  }
  signup() {
    if (this.actualPath == '/inscription') {
      this.signupForm.value.role = 'user';

    } else {
      this.signupForm.value.role = 'admin';

    }
    console.log("role", this.signupForm.value)

    this.userService.signUp(this.signupForm.value).subscribe((result) => {

      this.router.navigate(['signin'])
    })

  }

}
