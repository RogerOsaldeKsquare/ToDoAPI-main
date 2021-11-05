import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { ActivitysService   } from 'src/services'; // This should not be here

export class ActivitysGetController implements Controller {
  constructor(private service: ActivitysService  ) {};

  async run(req: Request, res: Response): Promise<void> {
    try {
      const activitys = await this.service.getActivitys();
      res.status(httpStatus.CREATED).json(activitys);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}



