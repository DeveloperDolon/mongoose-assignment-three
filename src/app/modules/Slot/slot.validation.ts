import { z } from 'zod';

const slotCreateValidationSchema = z.object({
  body: z.object({
    service: z.string(),
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    isBooked: z.string().optional(),
  }),
});

export const SlotValidationSchema = {
  slotCreateValidationSchema,
};
