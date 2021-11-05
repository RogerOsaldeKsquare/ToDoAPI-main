import { ActivitysService } from "./activitys.service";

const activitysService = new ActivitysService();

/**
 * We should not export the class to use as type.
 * 
 * The services should be behind an abstraction like
 * commandBus who knows details about the services
 * 
*/
export { ActivitysService, activitysService }
