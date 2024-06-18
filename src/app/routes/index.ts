import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoute } from '../modules/Auth/auth.route';
import { ServiceRoute } from '../modules/Services/service.route';
import { SlotRoute } from '../modules/Slot/slot.route';
import path from 'path';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
