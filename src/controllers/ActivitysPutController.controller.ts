import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { ActivitysService } from 'src/services'; // This should not be here

export class ActivitysPutController implements Controller {
  constructor(private service: ActivitysService) {};

  async run(req: Request, res: Response): Promise<void> {
      const { id } = req.params;
      const { text} = req.body;
    try {
      const activity = await this.service.updateActivity( id, text );
      res.status(httpStatus.CREATED).json(activity);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
