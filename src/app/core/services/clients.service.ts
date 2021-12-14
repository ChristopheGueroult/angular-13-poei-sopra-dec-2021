import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  /**
   * private collection
   */
  private collection$!: Observable<Client[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(
      'http://localhost:8080/v1/customers'
    );
  }

  /**
   * get collection
   */
  public get collection(): Observable<Client[]> {
    return this.collection$;
  }

  /**
   * set collection
   */
  public set collection(obj: Observable<Client[]>) {
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