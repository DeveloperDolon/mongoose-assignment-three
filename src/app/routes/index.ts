import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoute } from '../modules/Auth/auth.route';
import { ServiceRoute } from '../modules/Services/service.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
