import sendResponse from '../../utils/sendResponse';
import { TService } from './service.interface';
import { ServiceModel } from './service.model';

const createServiceIntoDB = async (payload: TService) => {
  const result = await ServiceModel.create(payload, '-__v');

  return result;
};

export const ServicesService = {
  createServiceIntoDB,
};
