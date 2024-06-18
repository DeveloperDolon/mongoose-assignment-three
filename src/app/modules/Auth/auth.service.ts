import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';
import config from '../../config';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByEmail(payload?.email);

  const isDeleted = user.isDeleted;

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted!');
  }

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthServices = {
  loginUser,
};
