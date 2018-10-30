import * as plugins from './smartlog.plugins';

// interfaces
import { TEnvironment, ILogContext, TLogLevel, TRuntime } from '@pushrocks/smartlog-interfaces';

import { LogRouter } from './smartlog.classes.logrouter';

export class Smartlog {
  private logContext: ILogContext;
  private consoleEnabled: boolean;
  private minimumLevel: TLogLevel;
  private runtime: TRuntime;

  public logRouter = new LogRouter();

  public addLogDestination = this.logRouter.addLogDestination;


  // ============
  // Logger Setup
  // ============

  /**
   * enables console logging
   */
  enableConsole() {
    this.consoleEnabled = true;
  }

  /**
   * set a minimum serverity level to log
   * @param levelArg
   */
  level(levelArg: TLogLevel) {}

  // =============
  // log functions
  // =============
  /**
   * log stuff
   * @param logLevelArg
   * @param logMessageArg
   */
  public log(logLevelArg: TLogLevel, logMessageArg: string) {
    if (this.consoleEnabled) {
      console.log(`${logLevelArg}: ${logMessageArg}`);
    }
    this.logRouter.routeLog({
      logContext: this.logContext,
      logLevel: logLevelArg,
      message: logMessageArg
    });
  }

  public silly(logMessageArg: string) {
    this.log('silly', logMessageArg);
  }

  public debug(logMessageArg) {
    this.log('debug', logMessageArg);
  }

  public info(logMessageArg: string) {
    this.log('info', logMessageArg);
  }

  public warn(logMessageArg) {
    this.log('warn', logMessageArg);
  }

  public error(logMessageArg) {
    this.log('error', logMessageArg);
  }
}
