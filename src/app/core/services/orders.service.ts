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
    this.http.get<Order[]>(this.urlApi + 'orders').subscribe((data) => {
      this.collection$.next(data);
    });
  }

  public getItemsBySearch(expression: string): void {
    const lowerExpression = expression.toLowerCase();
    console.log(lowerExpression);
    this.http
      .get<Order[]>(`${this.urlApi}orders`)
      .pipe(
        tap((data) => {
          console.log(
            data.filter((item) =>
              item.customerCompany.toLowerCase().includes(lowerExpression)
            )
          );
        }),
        map((data) =>
          data.filter((item) =>
            item.customerCompany.toLowerCase().includes(lowerExpression)
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
      .get<Order[]>(`${this.urlApi}orders`)
      .pipe(
        tap((data) => {
          console.log(
            data.filter((item) => item.status.toUpperCase() === upperExpression)
          );
        }),
        map((data) => {
          if (upperExpression === 'ALL') {
            return data;
          } else {
            return data.filter(
              (item) => item.status.toUpperCase() === upperExpression
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
      .put<Order>(`${this.urlApi}orders/${item.id}`, item)
      .pipe(tap(() => this.refreshCollection()));
  }

  /**
   * add item in collection
   */
  public add(item: Order): Observable<Order> {
    return this.http
      .post<Order>(`${this.urlApi}orders`, item)
      .pipe(tap(() => this.refreshCollection()));
  }

  /**
   * delete item in collection
   */
  public delete(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}orders/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  /**
   * get item by id from collection
   */
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}orders/${id}`);
  }
}
