import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SlotServices } from './slot.service';
import { dataResponse } from '../../utils/dataResponse';

const createSlot = catchAsync(async (req, res) => {
  const result = await SlotServices.createSlotIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slots created successfully',
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req, res) => {
  const result = await SlotServices.getAvailableSlotsFromDB(
    req?.query?.date as string,
    req?.query?.serviceId as string,
  );

  dataResponse(result, 'Available slots retrieved successfully', res);
});

export const SlotController = {
  createSlot,
  getAvailableSlots,
};
