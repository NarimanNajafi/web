import { User } from './models/User';

const user = new User({ name: ' new record', age: 0 });

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('firsName', 'lastName');
console.log(person.fullName);
