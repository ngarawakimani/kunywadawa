
import { Injectable, Logger } from '@nestjs/common';
import * as moment from 'moment';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {

  private now: any;
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.now = moment().add(8, 'hours').format('hh:mm:ss');
    return this.now.toString();
  }
  
  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }
}
