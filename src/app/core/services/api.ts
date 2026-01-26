import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ForgotPasswordRequest, ResetPasswordRequest, User } from '../../shared/interfaces/interface';
import { APIENDPOINTS } from '../../shared/constants/api.constant';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  register(userData: User): Observable<any> {
    return this.http.post(`${this.baseUrl}${APIENDPOINTS.USER_REGISTER}`, userData, this.httpOptions);
  }

  login(userData: User): Observable<any> {
    return this.http.post(`${this.baseUrl}${APIENDPOINTS.LOGIN}`, userData, this.httpOptions);
  }

  forgotPassword(userData: ForgotPasswordRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}${APIENDPOINTS.FORGOT_PASSWORD}`, userData, this.httpOptions);
  }

  resetPassword(userData: ResetPasswordRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}${APIENDPOINTS.RESET_PASSWORD}`, userData, this.httpOptions);
  }
}
