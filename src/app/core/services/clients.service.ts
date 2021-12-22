import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateClient } from '../enums/state-client';
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
    this.http
      .get<any[]>(this.urlApi + 'v1/customers')
      .pipe(
        tap((data) =>
          data.map((item) =>
            item.active === true
              ? (item.active = StateClient.ACTIVE)
              : (item.active = StateClient.INACTIVE)
          )
        )
      )
      .subscribe((data) => {
        console.log(data);

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
  public changeState(item: Client, state: StateClient): Observable<Client> {
    let obj = new Client(item);
    obj.active = state;
    return this.update(obj);
  }

  /**
   * update item in collection
   */
  public update(item: any): Observable<Client> {
    item.active === StateClient.ACTIVE
      ? (item.active = true)
      : (item.active = false);
    return this.http
      .put<Client>(`${this.urlApi}v1/customers/${item.id}`, item)
      .pipe(
        tap(() => {
          this.refreshCollection();
        })
      );
  }

  /**
   * add item in collection
   */
  public add(item: any): Observable<Client> {
    item.active === StateClient.ACTIVE
      ? (item.active = true)
      : (item.active = false);
    return this.http
      .post<Client>(`${this.urlApi}v1/customers`, item)
      .pipe(tap(() => this.refreshCollection()));
  }

  /**
   * delete item in collection
   */
  public delete(id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.urlApi}v1/customers/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  /**
   * get item by id from collection
   */
  public getItemById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}v1/customers/${id}`);
  }

  public getItemsBySearch(expression: string): void {
    const lowerExpression = expression.toLowerCase();
    console.log(lowerExpression);
    this.http
      .get<any[]>(`${this.urlApi}v1/customers`)
      .pipe(
        map((data) =>
          data.filter((item) =>
            item.company.toLowerCase().includes(lowerExpression)
          )
        ),
        tap((data) =>
          data.map((item) =>
            item.active === true
              ? (item.active = StateClient.ACTIVE)
              : (item.active = StateClient.INACTIVE)
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
      .get<any[]>(`${this.urlApi}v1/customers`)
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
        }),
        tap((data) =>
          data.map((item) =>
            item.active === true
              ? (item.active = StateClient.ACTIVE)
              : (item.active = StateClient.INACTIVE)
          )
        )
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }
}
