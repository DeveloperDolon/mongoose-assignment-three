import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidationSchema } from './service.validation';
import { ServiceController } from './service.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin'),
  validateRequest(ServiceValidationSchema.serviceCreateValidationSchema),
  ServiceController.createService
);

router.get('/:id', ServiceController.getServiceWithId);

router.get('/', ServiceController.getAllServices);

router.put(
  '/:id',
  auth('admin'),
  validateRequest(ServiceValidationSchema.serviceUpdateValidationSchema),
  ServiceController.updateService
);

export const ServiceRoute = router;
