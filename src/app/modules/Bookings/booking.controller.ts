import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';
import { Booking } from './booking.model';
import { dataResponse } from '../../utils/dataResponse';

const createBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookingIntoDB(req.body, req?.user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const result = await Booking.find()
    .populate('customer')
    .populate('serviceId')
    .populate('slotId');

  dataResponse(result, 'All bookings retrieved successfully', res);
});

const getUserBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getUserBookingsFromDB(req.user);

  dataResponse(result, 'User bookings retrieved successfully', res);
});

export const BookingController = {
  createBookings,
  getAllBookings,
  getUserBookings,
};
