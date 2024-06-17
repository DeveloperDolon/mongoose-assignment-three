import { TService } from './service.interface';
import { ServiceModel } from './service.model';

const createServiceIntoDB = async (payload: TService) => {
  const result = await ServiceModel.create(payload);
  const response = result.toObject({ versionKey: false });

  return response;
};

export const ServicesService = {
  createServiceIntoDB,
};
