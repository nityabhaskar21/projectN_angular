import { Post } from '../post';
import { Role } from './role';

export class User {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  posts: Array<Post>;
  about: string;
  role: Role = Role.USER;
  createdAt: string;
  updatedAt: string;
}
