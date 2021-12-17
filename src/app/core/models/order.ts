import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  adrEt = 1200;
  customerId!: number;
  customerCompany!: string;
  id!: number;
  label!: string;
  notes!: string;
  numberOfDays = 1;
  status = StateOrder.OPTION;
  tva = 20;
  type!: string;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
