import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURI } from 'src/environments/environment';
import { catchError, Observable } from 'rxjs';
import { User } from '../model/user';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  readonly baseURI = BaseURI;

  register(user: User): Observable<any> {
    return this.http.post(this.baseURI + '/Auth/Register', user);
  }

  login(formData: any): Observable<any> {
    return this.http.post(this.baseURI + '/Auth/Login', formData);
  }

  sendEmail(body: any): Observable<any> {
    return this.http.post(this.baseURI + '/Auth/ForgotPassword', body);
  }
  passwordReset(body: any): Observable<any> {
    return this.http.post(this.baseURI + '/Auth/ResetPassword', body);
  }
}
