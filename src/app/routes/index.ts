import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoute } from '../modules/Auth/auth.route';
import { ServiceRoute } from '../modules/Services/service.route';
import { SlotRoute } from '../modules/Slot/slot.route';
import {
  BookingGetRoute,
  BookingRoute,
} from '../modules/Bookings/booking.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoute,
  },
  {
    path: '/services',
    route: ServiceRoute,
  },
  {
    path: '/slots',
    route: SlotRoute,
  },
  {
    path: '/bookings',
    route: BookingRoute,
  },
  {
    path: '/my-bookings',
    route: BookingGetRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
