import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Create User';
  EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
  passwordStrength = '(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}$/)'
  user: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.user = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
      password: ["", [Validators.required, Validators.pattern(this.passwordStrength)]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

    });

  }
  get f() {
    return this.user.controls;
  }
  onsubmit() {
    this.submitted = true;
    console.log(this.user.value)
    if (!this.user.valid) {
      alert("Please fill all the field to create super hero")
    } else {
      this.user.reset();
      this.submitted = false;
      // this.toast()
      alert("registered Successfull");
      this.user.reset();
      return console.log(this.user.value);
    }
  }
}
