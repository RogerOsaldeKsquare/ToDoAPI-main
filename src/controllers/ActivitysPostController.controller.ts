import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { ActivitysService } from 'src/services'; // This should not be here

export class ActivitysPostController implements Controller {
  constructor(private service: ActivitysService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { text } = req.body;

    try {
      const activity = await this.service.addActivitys(text);
      response.status(httpStatus.CREATED).json(activity);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
