import { TBooking } from './booking.interface';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../user/user.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Booking } from './booking.model';
import { Slot } from '../Slot/slot.model';

const createBookingIntoDB = async (payload: TBooking, userInfo: JwtPayload) => {
  const userData = await User.findOne(
    { email: userInfo?.userEmail },
    { _id: 1 }
  );

  if (!userData) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User is not exist!');
  }

  payload.customer = userData?._id;

  const slotIsBooked = await Slot.findById(payload?.slotId, { isBooked: 1 });

  if (slotIsBooked?.isBooked === 'booked') {
    throw new AppError(httpStatus.BAD_REQUEST, 'Slot is already booked!');
  }

  const updateSlot = await Slot.findByIdAndUpdate(
    payload?.slotId,
    { isBooked: 'booked' },
    { new: true }
  );

  const result = await (
    await (
      await (await Booking.create(payload)).populate('customer')
    ).populate('serviceId')
  ).populate('slotId');

  return result;
};

export const BookingServices = {
  createBookingIntoDB,
};
