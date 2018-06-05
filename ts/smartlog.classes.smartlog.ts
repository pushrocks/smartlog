import * as plugins from './smartlog.plugins';

// interfaces
import { TEnvironment, ILogContext, TLogLevel, TRuntime } from 'smartlog-interfaces';

export class Smartlog {
  private logContext: ILogContext;
  private consoleEnabled: boolean;
  private minimumLevel: TLogLevel;
  private runtime: TRuntime;
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
  log(logLevelArg: TLogLevel, logMessageArg: string) {}

  silly(logMessageArg: string) {
    this.log('silly', logMessageArg);
  }

  debug(logMessageArg) {
    this.log('debug', logMessageArg);
  }

  info(logMessageArg: string) {
    this.log('info', logMessageArg);
  }

  warn(logMessageArg) {
    this.log('warn', logMessageArg);
  }

  error(logMessageArg) {
    this.log('error', logMessageArg);
  }
}
