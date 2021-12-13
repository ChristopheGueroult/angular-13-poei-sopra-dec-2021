import { ClientI } from '../interfaces/client-i';
import { Order } from './order';

export class Client implements ClientI {
  active = true;
  company!: string;
  firstname!: string;
  id!: number;
  lastname!: string;
  mail!: string;
  mobile!: string;
  notes!: string;
  orders!: Order[];
  phone!: string;
  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
