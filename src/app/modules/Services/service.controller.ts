import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServicesService } from './service.service';

const createService = catchAsync(async (req, res) => {
  const result = await ServicesService.createServiceIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service created successfully',
    data: result,
  });
});

const getServiceWithId = catchAsync(async (req, res) => {
  const result = await ServicesService.getServicesFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service retrieved successfully',
    data: result,
  });
});

export const ServiceController = {
  createService,
  getServiceWithId,
};
