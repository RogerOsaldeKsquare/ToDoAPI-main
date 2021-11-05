import { Activity, ActivityAttributes } from '../models/Activity';

export class ActivitysService {

  async addActivitys(text: any): Promise<ActivityAttributes> {
    try {
      const activity = await Activity.create({text: text});
      return activity;
    } catch (error) {
      throw new Error('Error adding Activities');
    }
  }

  async getActivitys(): Promise<Array<ActivityAttributes>> {
    try {
      return await Activity.find({});
    } catch (error) {
      throw new Error('Error getting Activity');
    }
  }

  async deleteActivity(id: string): Promise<any> {
    try {
      return await Activity.findOneAndRemove( { _id : id } );
    } catch (error) {
      throw new Error('Error deleting Activity');
    }
  }

  async updateActivity(id: string, text: string): Promise<any> {
    try {
      await Activity.findByIdAndUpdate( id, { text: text } );
    } catch (error) {
      throw new Error('Error updating an Activity');
    }
  }
}
