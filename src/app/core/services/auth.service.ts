import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >('');
  constructor(private http: HttpClient, private usersService: UsersService) {}
  /**
   * get password and username to sign in
   */
  public signIn(username: string, password: string): Observable<any> {
    return this.http
      .get<any>(
        `${environment.urlApi}v1/users/login?username=${username}&password=${password}`
      )
      .pipe(
        tap((data) => {
          const user = {
            grants: data.grants,
            id: data.id,
            mail: data.mail,
            username: data.username,
          };
          // save user and faketoken dans local storage
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', JSON.stringify(data.token));
          this.token$.next(data.token);
          this.usersService.user$.next(new User(user));
        })
      );
  }

  public signOut(): void {
    // vider user du localStorage
    // vider token du localStorage
    // vider User$ et token$ dans UsersService et AuthService
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.token$.next(null);
    this.usersService.user$.next(null);
  }
}
