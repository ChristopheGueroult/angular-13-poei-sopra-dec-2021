import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  /**
   * private collection
   */
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([
    new Order(),
  ]);
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  /**
   * get collection
   */
  public get collection(): BehaviorSubject<Order[]> {
    return this.collection$;
  }

  /**
   * refresh collection
   */
  public refreshCollection() {
    this.http.get<Order[]>(this.urlApi + 'v1/orders').subscribe((data) => {
      this.collection$.next(data);
    });
  }

  public getItemsBySearch(expression: string): void {
    const lowerExpression = expression.toLowerCase();
    this.http
      .get<Order[]>(this.urlApi + 'v1/orders')
      .pipe(
        tap((data) => {
          console.log(
            data.filter(
              (item) => item.customerCompany.indexOf(lowerExpression) !== -1
            )
          );
        }),
        map((data) => {
          return data.filter(
            (item) =>
              item.customerCompany.toLowerCase().indexOf(lowerExpression) !== -1
          );
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public getItemsByFilter(expression: string): void {
    const lowerExpression = expression.toUpperCase();
    this.http
      .get<Order[]>(this.urlApi + 'v1/orders')
      .pipe(
        tap((data) => {
          console.log(
            data.filter((item) => item.status.indexOf(lowerExpression) !== -1)
          );
        }),
        map((data) => {
          if (lowerExpression === 'ALL') {
            return data;
          } else {
            return data.filter(
              (item) =>
                item.status.toUpperCase().indexOf(lowerExpression) !== -1
            );
          }
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  /**
   * change state item
   */
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.status = state;
    return this.update(obj);
  }

  /**
   * update item in collection
   */
  public update(item: Order): Observable<Order> {
    return this.http
      .put<Order>(`${this.urlApi}v1/orders/${item.id}`, item)
      .pipe(tap(() => this.refreshCollection()));
  }

  /**
   * add item in collection
   */
  public add(item: Order): Observable<Order> {
    return this.http
      .post<Order>(`${this.urlApi}v1/orders`, item)
      .pipe(tap(() => this.refreshCollection()));
  }

  /**
   * delete item in collection
   */
  public delete(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}v1/orders/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  /**
   * get item by id from collection
   */
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}v1/orders/${id}`);
  }
}
