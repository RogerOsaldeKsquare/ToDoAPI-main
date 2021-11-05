import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { ActivitysService } from 'src/services'; // This should not be here

export class ActivitysDeleteController implements Controller {
  constructor(private service: ActivitysService) {};

  async run(req: Request, res: Response): Promise<void> {
      const { id } = req.params;
      try {
          await this.service.deleteActivity( id );
          res.status(httpStatus.OK).json('Activity deleted');
        } catch (error) {
          res.status(httpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}