import * as plugins from './smartlog.plugins';

import { LogRouter } from './smartlog.classes.logrouter';
import { LogGroup } from '.';

export interface ISmartlogContructorOptions {
  logContext: plugins.smartlogInterfaces.ILogContext;
  minimumLogLevel?: plugins.smartlogInterfaces.TLogLevel;
}

export class Smartlog implements plugins.smartlogInterfaces.ILogDestination {
  private logContext: plugins.smartlogInterfaces.ILogContext;
  private minimumLogLevel: plugins.smartlogInterfaces.TLogLevel;

  public uniInstanceId: string = plugins.isounique.uni();

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
  public enableConsole(optionsArg?: { captureAll: boolean }) {
    if (process && optionsArg && optionsArg.captureAll) {
      const write = process.stdout.write;
      /* import * as fs from 'fs';
      const fileStream = fs.createWriteStream(plugins.path.join(paths.nogitDir, 'output.txt'), {
        flags: 'a+'
      }); */
      process.stdout.write = (...args) => {
        const logString = args[0];
        if (!logString.startsWith('LOG')) {
          switch(true) {
            case logString.startsWith('Error:'):
              this.log('error', logString);
              break;
            default:
              this.log('info', logString);
          }
          return;
        }
        // fileStream.write(args[0]);
        write.apply(process.stdout, args);
        return true;
      };

      process.stderr.write = (...args) => {
        if (!args[0].startsWith('LOG')) {
          this.log('error', args[0]);
          return;
        }
        // fileStream.write(args[0]);
        write.apply(process.stderr, args);
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
   * @param correlationArg - info about corrleations
   */
  public async log(
    logLevelArg: plugins.smartlogInterfaces.TLogLevel,
    logMessageArg: string,
    logDataArg?: any,
    correlationArg?: plugins.smartlogInterfaces.ILogCorrelation
  ) {
    correlationArg = {
      ...{
        id: plugins.isounique.uni(),
        type: 'none',
        instance: this.uniInstanceId
      },
      ...correlationArg
    };

    if (this.consoleEnabled) {
      this.safeConsoleLog(`${logLevelArg}: ${logMessageArg}`);
    }

    const logPackage: plugins.smartlogInterfaces.ILogPackage = {
      timestamp: Date.now(),
      type: 'log',
      context: this.logContext,
      level: logLevelArg,
      correlation: correlationArg,
      message: logMessageArg
    };
    if (logDataArg) {
      logPackage.data = logDataArg;
    }
    await this.logRouter.routeLog(logPackage);
  }

  public increment(
    logLevelArg: plugins.smartlogInterfaces.TLogLevel,
    logMessageArg: string,
    logDataArg?: any,
    correlationArg: plugins.smartlogInterfaces.ILogCorrelation = {
      id: plugins.isounique.uni(),
      type: 'none'
    }
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
      correlation: correlationArg
    });
  }

  public async handleLog(logPackageArg: plugins.smartlogInterfaces.ILogPackage) {
    await this.logRouter.routeLog(logPackageArg);
  }

  private safeConsoleLog(logLine: string) {
    console.log(
      `LOG => ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} => ${logLine}`
    );
  }

  public createLogGroup(transactionId: string = 'none') {
    return new LogGroup(this, transactionId);
  }
}
