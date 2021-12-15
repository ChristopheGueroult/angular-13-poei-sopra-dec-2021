import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  /**
   * private collection
   */
  private collection$!: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(this.urlApi + 'v1/customers');
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
  public changeState(item: Client): Observable<Client> {
    let obj = new Client(item);
    obj.active = !obj.active;
    return this.update(obj);
  }

  /**
   * update item in collection
   */
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}v1/customers/${item.id}`, item);
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
