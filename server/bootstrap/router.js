import { Router } from '../api/routes';

export const initRoutes = app => {
  app.use('/', Router);
};
