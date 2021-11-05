import { ActivitysGetController } from './ActivitysGetController.controller';
import { ActivitysPostController } from './ActivitysPostController.controller';
import { activitysService } from '../services'; // This should not be here
import { ActivitysPutController } from './ActivitysPutController.controller';
import { ActivitysDeleteController } from './ActivitysDeleteController.controller';

export const activitysGetController = new ActivitysGetController(activitysService);
export const activitysPostController = new ActivitysPostController(activitysService);
export const activitysPutController = new ActivitysPutController(activitysService);
export const activitysDeleteController = new ActivitysDeleteController(activitysService);
