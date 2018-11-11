import * as plugins from './smartlog.plugins';

// interfaces
import { TLogType, TEnvironment, ILogContext, TLogLevel, TRuntime, ILogDestination, ILogPackage } from '@pushrocks/smartlog-interfaces';

import { LogRouter } from './smartlog.classes.logrouter';

export interface ISmartlogContructorOptions {
  logContext: ILogContext;
  minimumLogLevel?: TLogLevel;
}

export class Smartlog {
  private logContext: ILogContext;
  private minimumLogLevel: TLogLevel;
  
  private consoleEnabled: boolean;
  
  private logRouter = new LogRouter();

  public addLogDestination (logDestinationArg: ILogDestination) {
    this.logRouter.addLogDestination(logDestinationArg);
  }

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

  // =============
  // log functions
  // =============
  /**
   * main log method
   * @param logLevelArg - the log level
   * @param logMessageArg - the log message
   * @param logDataArg - any additional log data
   */
  public log(logLevelArg: TLogLevel, logMessageArg: string, logDataArg?: any) {
    if (this.consoleEnabled) {
      console.log(`LOG: ${logLevelArg}: ${logMessageArg}`);
    }
    const logPackage: ILogPackage = {
      timestamp: Date.now(),
      type: 'log',
      context: this.logContext,
      level: logLevelArg,
      message: logMessageArg
    };
    if(logDataArg) {
      logPackage.data = logDataArg;
    }
    this.logRouter.routeLog(logPackage);
  }

  public increment(logLevelArg: TLogLevel, logMessageArg) {
    if (this.consoleEnabled) {
      console.log(`INCREMENT: ${logLevelArg}: ${logMessageArg}`);
    }
    this.logRouter.routeLog({
      timestamp: Date.now(),
      type: 'increment',
      context: this.logContext,
      level: logLevelArg,
      message: logMessageArg
    });
  }

  public handleLogPackage(logPackageArg: ILogPackage) {
    this.logRouter.routeLog(logPackageArg);
  }
}
