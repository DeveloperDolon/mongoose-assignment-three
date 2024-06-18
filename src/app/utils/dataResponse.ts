import httpStatus from 'http-status';
import sendResponse from './sendResponse';
import { Response } from 'express';

export const dataResponse = (data: any, message: string, res: Response) => {
  if (data?.length > 0 || data?._id) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: message,
      data: data,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    });
  }
};
