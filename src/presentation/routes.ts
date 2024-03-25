import { Router } from "express";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // router.use('/api/route', /* ExampleRoute.routes */ );

    return router;
  }
}
