import { StateClient } from '../enums/state-client';
import { Order } from '../models/order';

export interface ClientI {
  active: StateClient;
  company: string;
  firstname: string;
  id: number;
  lastname: string;
  mail: string;
  mobile: string;
  notes: string;
  orders: Order[];
  phone: string;
}
