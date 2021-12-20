import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateUser } from '../enums/state-user';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );
  /**
   * private collection
   */
  private collection$!: Observable<User[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<User[]>(this.urlApi + 'v1/users').pipe(
      tap((data) => {
        console.log(data);
      })
    );
  }

  /**
   * get collection
   */
  public get collection(): Observable<User[]> {
    return this.collection$;
  }

  /**
   * set collection
   */
  public set collection(obj: Observable<User[]>) {
    this.collection$ = obj;
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
}
