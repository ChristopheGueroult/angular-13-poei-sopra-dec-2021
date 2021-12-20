import { StateUser } from '../enums/state-user';
import { UserI } from '../interfaces/user-i';

export class User implements UserI {
  grants = StateUser.ROLE_ADMIN;
  id!: number;
  mail!: string;
  password!: string;
  username!: string;
  constructor(obj?: Partial<User>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
