import { expect, tap } from '@pushrocks/tapbundle';
import * as smartlog from '../ts/index';

let defaultLogger: smartlog.Smartlog;

tap.test('should produce instance of Smartlog', async () => {
  defaultLogger = smartlog.defaultLogger;
  expect(defaultLogger).to.be.instanceOf(smartlog.Smartlog);
});

tap.test('should enable console logging', async () => {
  defaultLogger.enableConsole({
    captureAll: true
  });
  console.log('this is a normal log that should be captured');
  console.log(new Error('hi there'));
  defaultLogger.log('info', 'this should only be printed once');
});

tap.test('should be able to log things', async () => {
  defaultLogger.log('silly', 'hi');
});

tap.start();
