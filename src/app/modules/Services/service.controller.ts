import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServicesService } from './service.service';
import { ServiceModel } from './service.model';
import { dataResponse } from '../../utils/dataResponse';

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
  const result = await ServicesService.getServicesFromDB(req?.params?.id);

  dataResponse(result, 'Service retrieved successfully', res);
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await ServiceModel.find({ isDeleted: false });

  dataResponse(result, 'Services retrieved successfully', res);
});

const updateService = catchAsync(async (req, res) => {
  const result = await ServicesService.updateServiceIntoDB(
    req?.params?.id,
    req.body
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service updated successfully',
    data: result,
  });
});

const deleteService = catchAsync(async (req, res) => {
  const result = await ServicesService.deleteServiceFromDB(req?.params?.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service deleted successfully',
    data: result,
  });
});

export const ServiceController = {
  createService,
  getServiceWithId,
  getAllServices,
  updateService,
  deleteService,
};
