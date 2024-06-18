import { z } from 'zod';

const createBookingValidationSchema = z.object({
  body: z.object({
    customer: z.string().optional(),
    serviceId: z.string(),
    slotId: z.string(),
    vehicleType: z.string(),
    vehicleModel: z.string(),
    manufacturingYear: z.string(),
    registrationPlate: z.string(),
  }),
});

export const BookingValidations = {
  createBookingValidationSchema,
};
