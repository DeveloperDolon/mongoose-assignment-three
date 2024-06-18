import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { SlotValidationSchema } from './slot.validation';
import { SlotController } from './slot.controller';

const router = express.Router();

router.get('/available', SlotController.getAvailableSlots);

export const SlotRoute = router;
