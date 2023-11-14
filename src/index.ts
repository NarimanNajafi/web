import { User } from './models/User';

const user = new User({ id: 41 });

user.fetch();

setTimeout(() => {
  console.log(user);
}, 4000);
