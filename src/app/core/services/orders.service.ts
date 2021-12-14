import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(this.urlApi + 'v1/orders');
  }

  /**
   * get collection
   */
  public get collection(): Observable<Order[]> {
    return this.collection$;
  }

  /**
   * set collection
   */
  public set collection(obj: Observable<Order[]>) {
    this.collection$ = obj;
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
    return this.http.put<Order>(`${this.urlApi}v1/orders/${item.id}`, item);
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
