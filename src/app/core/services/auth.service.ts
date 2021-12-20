import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  /**
   * get password and username to sign in
   */
  public signIn(username: string, password: string): Observable<User> {
    return this.http.get<User>(
      `${environment.urlApi}v1/users/login?username=${username}&password=${password}`
    );
  }
}
