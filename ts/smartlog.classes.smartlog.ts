import * as plugins from './smartlog.plugins';

import { LogRouter } from './smartlog.classes.logrouter';

export interface ISmartlogContructorOptions {
  logContext: plugins.smartlogInterfaces.ILogContext;
  minimumLogLevel?: plugins.smartlogInterfaces.TLogLevel;
}

export class Smartlog implements plugins.smartlogInterfaces.ILogDestination {
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
  public enableConsole(optionsArg?: {
    captureAll: boolean;
  }) {
    if (optionsArg && optionsArg.captureAll) {
      const write = process.stdout.write;
      /* import * as fs from 'fs';
      const fileStream = fs.createWriteStream(plugins.path.join(paths.nogitDir, 'output.txt'), {
        flags: 'a+'
      }); */
      process.stdout.write = (...args) => {
        if (!args[0].startsWith('LOG')) {
          this.log('info', args[0]);
          return;
        }
        // fileStream.write(args[0]);
        write.apply(process.stdout, args);
        return true;
      };
    }
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
    logDataArg?: any,
    logCorrelationIdArg: string = '123'
  ) {
    if (this.consoleEnabled) {
      this.safeConsoleLog(
        `${logLevelArg}: ${logMessageArg}`
      );
    }
    const logPackage: plugins.smartlogInterfaces.ILogPackage = {
      timestamp: Date.now(),
      type: 'log',
      context: this.logContext,
      level: logLevelArg,
      correlationId: logCorrelationIdArg,
      message: logMessageArg
    };
    if (logDataArg) {
      logPackage.data = logDataArg;
    }
    this.logRouter.routeLog(logPackage);
  }

  public increment(
    logLevelArg: plugins.smartlogInterfaces.TLogLevel,
    logMessageArg: string,
    logDataArg?: any,
    logCorrelationIdArg: string = '123'
  ) {
    if (this.consoleEnabled) {
      this.safeConsoleLog(`INCREMENT: ${logLevelArg}: ${logMessageArg}`);
    }
    this.logRouter.routeLog({
      timestamp: Date.now(),
      type: 'increment',
      context: this.logContext,
      level: logLevelArg,
      message: logMessageArg,
      correlationId: logCorrelationIdArg
    });
  }

  public handleLog(logPackageArg: plugins.smartlogInterfaces.ILogPackage) {
    this.logRouter.routeLog(logPackageArg);
  }

  private safeConsoleLog(logLine: string) {
    console.log(`LOG => ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} => ${logLine}`);
  }
}
