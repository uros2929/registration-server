import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _urlSingUp = "http://localhost:3000/api/singUp"
  _urlLogIn = "http://localhost:3000/api/logIn"
  constructor(private _http: HttpClient) { }

  singUp(userData) {
    return this._http.post(this._urlSingUp, userData);
  }
  logIn(userData) {
    return this._http.post(this._urlLogIn, userData)
  }
}
