import { Schema, model } from 'mongoose';
import config from '../../config';
import { TUser } from './user.interface';
const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: 0,
  },
  phone: String,
  role: {
    type: String,
    required: true,
    default: 'user',
  },
  address: {
    type: String,
    required: true,
  },
});

export const User = model<TUser>('User', userSchema);
