import { StateUser } from '../enums/state-user';

export interface UserI {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  grants: StateUser;
  password?: string;
}
