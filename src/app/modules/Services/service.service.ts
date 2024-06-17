import { TService } from './service.interface';
import { ServiceModel } from './service.model';

const createServiceIntoDB = async (payload: TService) => {
  const result = await ServiceModel.create(payload);
  const response = result.toObject({ versionKey: false });

  return response;
};

const getServicesFromDB = async (id: string) => {
  const result = await ServiceModel.findById(id);

  return result;
};

const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
  const result = await ServiceModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const ServicesService = {
  createServiceIntoDB,
  getServicesFromDB,
  updateServiceIntoDB,
};
