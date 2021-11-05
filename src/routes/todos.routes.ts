import { Router, Request, Response } from 'express';
import { activitysGetController, activitysPostController, activitysPutController, activitysDeleteController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /activitys
   * Create a new activity
   */
  router.post('/activitys', (req: Request, res: Response) => activitysPostController.run(req, res));
  
  /**
   * GET /activitys
   * Get all activitys
   */
  router.get('/activitys', (req: Request, res: Response) => activitysGetController.run(req, res));

   /**
   * PUT /activitys/:id
   * Update a activity
   */
    router.put('/activitys/:id', (req: Request, res: Response) => activitysPutController.run(req, res));

    /**
   * DELETE /activitys/:id
   * Delete an activity
   */
     router.delete('/activitys/:id', (req: Request, res: Response) => activitysDeleteController.run(req, res));
};
