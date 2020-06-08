import * as plugins from './smartlog.plugins';
import { Smartlog } from './smartlog.classes.smartlog';

export class LogGroup {
  public smartlogRef: Smartlog;
  public transactionId: string;
  public groupId = plugins.isounique.uni();
  
  constructor(smartlogInstance: Smartlog, transactionIdArg: string) {
    this.smartlogRef = smartlogInstance;
    this.transactionId = transactionIdArg;
  }

  public log(logLevelArg: plugins.smartlogInterfaces.TLogLevel, logMessageArg: string, logDataArg?: any) {
    this.smartlogRef.log(logLevelArg, logMessageArg, logDataArg, {
      id: plugins.isounique.uni(),
      type: 'none',
      group: this.groupId,
      instance: this.smartlogRef.uniInstanceId,
      transaction: this.transactionId
    });
  }

}