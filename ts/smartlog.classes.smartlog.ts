import * as plugins from './smartlog.plugins';

// interfaces
import { TLogType, TEnvironment, ILogContext, TLogLevel, TRuntime } from '@pushrocks/smartlog-interfaces';

import { LogRouter } from './smartlog.classes.logrouter';

export interface ISmartlogContructorOptions {
  logContext: ILogContext;
  minimumLogLevel?: TLogLevel;
}

export class Smartlog {
  private logContext: ILogContext;
  private minimumLogLevel: TLogLevel;
  
  private consoleEnabled: boolean;
  
  public logRouter = new LogRouter();

  public addLogDestination = this.logRouter.addLogDestination;

  constructor(optionsArg: ISmartlogContructorOptions) {
    this.logContext = optionsArg.logContext;
    this.minimumLogLevel = optionsArg.minimumLogLevel;
  }


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
      console.log(`LOG: ${logLevelArg}: ${logMessageArg}`);
    }
    this.logRouter.routeLog({
      type: 'log',
      context: this.logContext,
      level: logLevelArg,
      message: logMessageArg
    });
  }

  public increment(logLevelArg: TLogLevel, logMessageArg) {
    if (this.consoleEnabled) {
      console.log(`INCREMENT: ${logLevelArg}: ${logMessageArg}`);
    }
    this.logRouter.routeLog({
      type: 'increment',
      context: this.logContext,
      level: logLevelArg,
      message: logMessageArg
    });
  }
}
