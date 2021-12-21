import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
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

  public getItemsBySearch(expression: string): void {
    const lowerExpression = expression.toLowerCase();
    console.log(lowerExpression);
    this.http
      .get<Client[]>(`${this.urlApi}v1/customers`)
      .pipe(
        map((data) =>
          data.filter((item) =>
            item.company.toLowerCase().includes(lowerExpression)
          )
        )
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public getItemsByFilter(expression: string): void {
    const upperExpression = expression.toUpperCase();
    this.http
      .get<Client[]>(`${this.urlApi}v1/customers`)
      .pipe(
        map((data) => {
          switch (upperExpression) {
            case 'ALL':
              return data;
            case 'ACTIVE':
              return data.filter((item) => item.active === true);
            case 'INACTIVE':
              return data.filter((item) => item.active === false);
            default:
              return data;
          }
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }
}
