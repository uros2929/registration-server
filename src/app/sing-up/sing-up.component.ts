import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from "@angular/forms"
import { RegistrationService } from '../registration.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  get name() {
    return this.singUpForm.get('name');
  }
  get lastName() {
    return this.singUpForm.get('lastName')
  }
  get userName() {
    return this.singUpForm.get('userName')
  }
  get password() {
    return this.singUpForm.get('password')
  }
  get confirmPassword() {
    return this.singUpForm.get('confirmPassword')
  }


  constructor(private formBuilder: FormBuilder, private __register: RegistrationService, private _router: Router) { }

  ngOnInit() {
  }

  singUpForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    confirmPassword: ['', [Validators.required]],
    state: [''],
    city: [''],
    postalCode: ['']
  }, { validator: this.passwordValidator })


  onSubmit() {
    this.__register.singUp(this.singUpForm.value)
      .subscribe(
        res => { console.log(res); this._router.navigate(['/logIn']) },
        err => console.log(err)
      )
  }



  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password.pristine || confirmPassword.pristine) {
      return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ? { 'checkPasswords': true } : null;


  }


}
