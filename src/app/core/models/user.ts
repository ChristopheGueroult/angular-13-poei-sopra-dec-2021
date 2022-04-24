import { StateUser } from '../enums/state-user';
import { UserI } from '../interfaces/user-i';

export class User implements UserI {
  id!: number;
  email!: string;
  firstname!: string;
  lastname!: string;
  grants = StateUser.USER;
  password?: string;
  constructor(obj?: Partial<User>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
