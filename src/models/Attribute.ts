import { User, UserProps } from './User';
export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): number | string | boolean {
    return this.data[propName];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({ id: 5, name: 'anything' });

const id = attrs.get('id');