import { prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export class AuthModel extends TimeStamps {
  _id: string;

  @prop()
  email: string;

  @prop()
  passwordHash: string;
}
