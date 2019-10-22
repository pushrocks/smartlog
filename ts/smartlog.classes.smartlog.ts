import * as plugins from './smartlog.plugins';

import { LogRouter } from './smartlog.classes.logrouter';

export interface ISmartlogContructorOptions {
  logContext: plugins.smartlogInterfaces.ILogContext;
  minimumLogLevel?: plugins.smartlogInterfaces.TLogLevel;
}

export class Smartlog {
  private logContext: plugins.smartlogInterfaces.ILogContext;
  private minimumLogLevel: plugins.smartlogInterfaces.TLogLevel;

  private consoleEnabled: boolean;

  private logRouter = new LogRouter();

  public addLogDestination(logDestinationArg: plugins.smartlogInterfaces.ILogDestination) {
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
  public enableConsole() {
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
  public log(
    logLevelArg: plugins.smartlogInterfaces.TLogLevel,
    logMessageArg: string,
    logDataArg?: any
  ) {
    if (this.consoleEnabled) {
      console.log(
        `LOG => ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} => ${logLevelArg}: ${logMessageArg}`
      );
    }
    const logPackage: plugins.smartlogInterfaces.ILogPackage = {
      timestamp: Date.now(),
      type: 'log',
      context: this.logContext,
      level: logLevelArg,
      message: logMessageArg
    };
    if (logDataArg) {
      logPackage.data = logDataArg;
    }
    this.logRouter.routeLog(logPackage);
  }

  public increment(logLevelArg: plugins.smartlogInterfaces.TLogLevel, logMessageArg) {
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

  public handleLogPackage(logPackageArg: plugins.smartlogInterfaces.ILogPackage) {
    this.logRouter.routeLog(logPackageArg);
  }
}
