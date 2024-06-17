import httpStatus from 'http-status';
import config from '../../config';
import catchAsync from '../../utils/catchAsync';
import { sendResponseForToken } from '../../utils/sendResponse';
import { AuthServices } from './auth.service';
import { User } from '../user/user.model';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  const { refreshToken, accessToken } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
  });

  const userData = await User.findOne({ email: req?.body?.email }, '-__v');

  sendResponseForToken(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    token: accessToken,
    data: userData,
  });
});

export const AuthController = {
  loginUser,
};
