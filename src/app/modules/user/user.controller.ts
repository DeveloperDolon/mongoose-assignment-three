import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';
import { TUser } from './user.interface';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req, res) => {
  const userDate: TUser = req.body;

  const result = await UserServices.createUserIntoDB(userDate);

  if (result?.password) {
    result.password = '';
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully!',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};
