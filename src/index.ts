import { User } from './models/User';

const user = new User({ name: 'Pasha', age: 25 });

user.set({ name: 'newName', age: 46 });

console.log(user.get('name'));
console.log(user.get('age'));

// console.log('hi there!');
