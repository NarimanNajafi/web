import { Eventhing } from './Eventing';
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventhing = new Eventhing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
