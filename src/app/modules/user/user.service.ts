import AppError from '../../errors/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const userIsExist = await User.findOne({ email: payload?.email });

  if (userIsExist) {
    throw new AppError(400, 'With this email user is already exist!');
  }

  try {
    const result = await User.create(payload);

    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const UserServices = {
  createUserIntoDB,
};
