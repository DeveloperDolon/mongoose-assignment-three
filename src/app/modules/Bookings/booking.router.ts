import express from 'express';
import auth from '../../middlewares/auth';
import { BookingController } from './booking.controller';

const router = express.Router();

router.post('/', auth('user'), BookingController.createBookings);

router.get('/', auth('admin'), BookingController.getAllBookings);

export const BookingRoute = router;
