import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  /**
   * private collection
   */
  private collection$: BehaviorSubject<Client[]> = new BehaviorSubject([
    new Client(),
  ]);
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  /**
   * refresh collection
   */
  public refreshCollection(): void {
    this.http.get<Client[]>(this.urlApi + 'v1/customers').subscribe((data) => {
      this.collection$.next(data);
    });
  }
  /**
   * get collection
   */
  public get collection(): BehaviorSubject<Client[]> {
    return this.collection$;
  }

  /**
   * get clientid by clientName
   */
  public getClientByName(name: string): number {
    let id = 0;
    this.collection.value.forEach((client) => {
      if (client.company === name) {
        id = client.id;
      }
    });
    return id;
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
