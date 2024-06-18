import { Types } from 'mongoose';

export interface TBooking {
  customer?: Types.ObjectId;
  serviceId: Types.ObjectId;
  slotId: Types.ObjectId;
  vehicleType: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
}
