import { ErrorRequestHandler } from 'express';
import {ZodError} from 'zod';
import { TErrorSources } from '../interface/error';
import handleZodError from '../errors/handleZodError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorSource: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong.',
    },
  ];

  if(err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSources;
  }
};
