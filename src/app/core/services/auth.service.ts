import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateUser } from '../enums/state-user';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >('');
  public user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );
  constructor(
    private http: HttpClient,
    // private usersService: UsersService,
    private router: Router
  ) {}
  /**
   * get password and username to sign in
   */
  public signIn(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${environment.urlApi}signin`, {
        email: email,
        password: password,
      })
      .pipe(
        tap((data) => {
          const user = {
            grants: data.user.grants,
            id: data.user.id,
            email: data.user.email,
            firstname: data.user.firstname,
            lastname: data.user.lastname,
          };
          // save user and faketoken dans local storage
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', JSON.stringify(data.accessToken));
          this.token$.next(data.accessToken);
          this.user$.next(new User(user));
          this.router.navigate(['orders']);
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
    this.user$.next(null);
    this.router.navigate(['sign-in']);
  }

  public signUp(item: any): Observable<any> {
    item.grants = StateUser.USER;
    return this.http.post(`${environment.urlApi}users`, item);
  }
}
