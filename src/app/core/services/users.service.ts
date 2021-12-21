import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateUser } from '../enums/state-user';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /**
   * private collection
   */
  private collection$: BehaviorSubject<User[]> = new BehaviorSubject([
    new User(),
  ]);
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  public refreshCollection() {
    this.http.get<User[]>(this.urlApi + 'v1/users').subscribe((data) => {
      this.collection$.next(data);
    });
  }

  /**
   * get collection
   */
  public get collection(): Observable<User[]> {
    return this.collection$;
  }

  /**
   * change state item
   */
  public changeState(item: User, state: StateUser): Observable<User> {
    let obj = new User(item);
    obj.grants = state;
    return this.update(obj);
  }

  /**
   * update item in collection
   */
  public update(item: User): Observable<User> {
    return this.http.put<User>(`${this.urlApi}v1/users/${item.id}`, item);
  }

  /**
   * add item in collection
   */

  /**
   * delete item in collection
   */

  /**
   * get item by id from collection
   */

  public getItemsBySearch(expression: string): void {
    const lowerExpression = expression.toLowerCase();
    console.log(lowerExpression);
    this.http
      .get<User[]>(`${this.urlApi}v1/users`)
      .pipe(
        tap((data) => {
          console.log(
            data.filter((item) =>
              item.username.toLowerCase().includes(lowerExpression)
            )
          );
        }),
        map((data) =>
          data.filter((item) =>
            item.username.toLowerCase().includes(lowerExpression)
          )
        )
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public getItemsByFilter(expression: string): void {
    console.log(expression);

    let upperExpression = expression.toUpperCase();
    this.http
      .get<User[]>(`${this.urlApi}v1/users`)
      .pipe(
        map((data) => {
          if (upperExpression === 'ALL') {
            return data;
          } else {
            upperExpression = 'ROLE_' + upperExpression;
            return data.filter(
              (item) => item.grants.toUpperCase() === upperExpression
            );
          }
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }
}
