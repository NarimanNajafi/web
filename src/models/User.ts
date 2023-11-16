import { Eventhing } from './Eventing';
import { Sync } from './Sync';
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/user';
export class User {
  public events: Eventhing = new Eventhing();
  public sync: Sync<UserProps> = new Sync<UserProps>();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
