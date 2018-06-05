import * as plugins from './smartlog.plugins';
import { Smartlog } from './smartlog.classes.smartlog';

export { Smartlog };

let defaultLogger: Smartlog;

export const getDefaultLogger = () => {
  if (!defaultLogger) {
    defaultLogger = new Smartlog();
  }
  return defaultLogger;
};
