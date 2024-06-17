import { Response } from 'express';

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
};

type TTokenResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  token: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    statusCode: data?.statusCode,
    message: data?.message,
    data: data?.data,
  });
};

export const sendResponseForToken = <T>(
  res: Response,
  data: TTokenResponse<T>
) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    statusCode: data?.statusCode,
    token: data?.token,
    message: data?.message,
    data: data?.data,
  });
};

export default sendResponse;
