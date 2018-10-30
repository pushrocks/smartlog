import { expect, tap } from '@pushrocks/tapbundle';
import * as smartlog from '../ts/index';

let defaultLogger: smartlog.Smartlog;

tap.test('should produce instance of Smartlog', async () => {
  defaultLogger = smartlog.defaultLogger;
  expect(defaultLogger).to.be.instanceOf(smartlog.Smartlog);
});

tap.test('should enable console logging', async () => {
  defaultLogger.enableConsole();
});

tap.test('should be able to log things', async () => {
  defaultLogger.log('silly', 'hi');
});

tap.start();
