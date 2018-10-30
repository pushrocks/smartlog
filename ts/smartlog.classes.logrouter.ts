import * as plugins from './smartlog.plugins';

import { ILogDestination, ILogPackage } from '@pushrocks/smartlog-interfaces';

export class LogRouter {
  /**
   * all log destinations
   */
  private logDestinations: ILogDestination[] = [];

  constructor() {}

  public addLogDestination(logDestination: ILogDestination) {
    this.logDestinations.push(logDestination);
  }

  // routes the log according to added logDestinations
  routeLog(logPackageArg: ILogPackage) {
    for (const logDestination of this.logDestinations) {
      logDestination.handleLog(logPackageArg);
    }
  }
}
