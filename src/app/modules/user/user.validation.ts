import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    role: z.string(),
    address: z.string(),
  }),
});

export const userValidationSchema = {
  createUserValidationSchema,
};
