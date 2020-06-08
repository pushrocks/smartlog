import * as plugins from './smartlog.plugins';

/**
 * a console log optimized for smartlog
 */
export class ConsoleLog {
  public log(logLevelArg: plugins.smartlogInterfaces.TLogLevel, logMessageArg: string) {
    console.log(`__# ${logLevelArg}: ${logMessageArg}`);
  }
}
