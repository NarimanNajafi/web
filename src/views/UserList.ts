import { UserProps, User } from '../models/User';
import { CollectiomView } from './CollectionView';
import { UserShow } from './UserShow';

export class UserList extends CollectiomView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
