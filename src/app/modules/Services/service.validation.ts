import { z } from 'zod';

const serviceCreateValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    duration: z.number(),
    isDeleted: z.boolean(),
  }),
});

export const ServiceValidationSchema = {
  serviceCreateValidationSchema,
};
