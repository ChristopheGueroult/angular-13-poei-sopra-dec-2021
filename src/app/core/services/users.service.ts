import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /**
   * private collection
   */
  private collection$!: Observable<User[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<User[]>('http://localhost:8080/v1/users');
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

  /**
   * update item in collection
   */

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
