import { TSlot } from './slot.interface';
import { Slot } from './slot.model';

const createSlotIntoDB = async (payload: TSlot) => {
  const startTime: any = new Date(`1970-01-01T${payload?.startTime}`);
  const endTime: any = new Date(`1970-01-01T${payload?.endTime}`);

  let createdDataArray: TSlot[] = [];

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = endTime - startTime;
  const limit = differenceInMilliseconds / (1000 * 60) / 60;

  for (let i = 0; limit > i; i++) {
    const dataOfSlot = { ...payload };
    let startDate;
    let endDate;
    if (i === 0) {
      startDate = startTime;
      endDate = new Date(startTime.getTime() + 1000 * 3600 * 1);
    } else {
      startDate = new Date(startTime.getTime() + 1000 * 3600 * i);
      endDate = new Date(startTime.getTime() + 1000 * 3600 * (i + 1));
    }

    const startedFormattedDate = startDate.toLocaleTimeString('en-US', {
      hour12: false,
    });

    const endFormattedDate = endDate.toLocaleTimeString('en-US', {
      hour12: false,
    });

    dataOfSlot.startTime = startedFormattedDate;
    dataOfSlot.endTime = endFormattedDate;
    createdDataArray = [...createdDataArray, dataOfSlot];
    // console.log(createdDataArray);
  }

  const result = await Slot.create(createdDataArray);

  return result;
};

const getAvailableSlotsFromDB = async (date: string, serviceId: string) => {
  const result = Slot.find({
    service: serviceId,
    date,
  }).populate('service');

  return result;
};

export const SlotServices = {
  createSlotIntoDB,
  getAvailableSlotsFromDB,
};
