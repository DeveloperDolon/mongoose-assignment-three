import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';
import { Booking } from './booking.model';

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

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

const getUserBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getUserBookingsFromDB(req.user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

export const BookingController = {
  createBookings,
  getAllBookings,
  getUserBookings,
};
