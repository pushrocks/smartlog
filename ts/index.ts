import * as plugins from './smartlog.plugins';
import { Smartlog } from './smartlog.classes.smartlog';
const defaultLogger: Smartlog = new Smartlog({
  logContext: {
    company: 'undefined',
    companyunit: 'undefefined',
    containerName: 'undefined',
    environment: 'local',
    runtime: 'node',
    zone: 'undefined'
  }
});

defaultLogger.enableConsole();

export { Smartlog, defaultLogger };
