import * as plugins from "./smartlog.plugins";

export type TLogLevel =
  | "error"
  | "warn"
  | "info"
  | "verbose"
  | "debug"
  | "silly";

export class Smartlog {
  private winstonInstance = new plugins.winston.createLogger({
    level: 'silly',
    format: plugins.winston.format.json()
  })

  // ============
  // Logger Setup
  // ============

  /**
   * enables console logging
   */
  enableConsole() {
    this.winstonInstance.add(new plugins.winston.transports.Console());
  }

  /**
   * set a minimum serverity level to log
   * @param levelArg 
   */
  level (levelArg: TLogLevel) {
    this.winstonInstance.level(levelArg);
  }

  // =============
  // log functions
  // =============
  /**
   * log stuff
   * @param logLevelArg
   * @param logMessageArg 
   */
  log(logLevelArg: TLogLevel, logMessageArg: string) {
    this.winstonInstance.log(logLevelArg, logMessageArg)
  }

  silly(logMessageArg: string) {
    this.log('silly', logMessageArg)
  }

  debug(logMessageArg) {
    this.log('debug', logMessageArg)
  }

  info(logMessageArg: string) {
    this.log('info', logMessageArg)
  }

  warn(logMessageArg) {
    this.log('warn', logMessageArg)
  }

  error(logMessageArg) {
    this.log('error', logMessageArg)
  }
}
