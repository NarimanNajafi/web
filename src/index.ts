import { User } from './models/User';

const user = new User({ name: 'Pasha', age: 25 });

// user.set({ name: 'newName' });

// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => {});
console.log(user);

// console.log('hi there!');
