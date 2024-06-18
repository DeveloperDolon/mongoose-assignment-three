import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidationSchema } from './service.validation';
import { ServiceController } from './service.controller';
import auth from '../../middlewares/auth';
import { SlotValidationSchema } from '../Slot/slot.validation';
import { SlotController } from '../Slot/slot.controller';

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

router.delete('/:id', auth('admin'), ServiceController.deleteService);

router.post(
  '/slots',
  auth('admin'),
  validateRequest(SlotValidationSchema.slotCreateValidationSchema),
  SlotController.createSlot
);

export const ServiceRoute = router;
