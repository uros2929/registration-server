import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _register: RegistrationService, private _router: Router) { }

  ngOnInit() {
  }
  logInForm = this.formBuilder.group({
    userName: [''],
    password: ['']
  })

  onSubmit() {
    this._register.logIn(this.logInForm.value)
      .subscribe(
        res => {
          console.log(Object.values(res));
          this._router.navigate(['/main']);
          localStorage.setItem('userID', Object.values(res)[0]);
          let userInfoFromdb = {
            name: Object.values(res)[1],
            lastName: Object.values(res)[2],
            state: Object.values(res)[6],
            city: Object.values(res)[7]
          }
          localStorage.setItem('userInfo', JSON.stringify(userInfoFromdb))
        },
        err => console.log(err, alert(err.error))
      )
  }
}
