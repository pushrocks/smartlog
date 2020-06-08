import { expect, tap } from '@pushrocks/tapbundle';
import * as smartlog from '../ts/index';

let testConsoleLog: smartlog.ConsoleLog;
let testSmartLog: smartlog.Smartlog;

tap.test('should produce a valid ConsoleLog instance', async () => {
  testConsoleLog = new smartlog.ConsoleLog();
  testConsoleLog.log('ok', 'this is ok');
})

tap.test('should produce instance of Smartlog', async () => {
  testSmartLog = new smartlog.Smartlog({
    logContext: {
      environment: 'test',
      runtime: 'node',
      zone: 'gitzone',
      company: 'Lossless GmbH',
      companyunit: 'Lossless Cloud',
      containerName: 'testing'
    }
  });
});

tap.test('should enable console logging', async () => {
  testSmartLog.enableConsole({
    captureAll: true
  });
  console.log('this is a normal log that should be captured');
  console.log(new Error('hi there'));
  testSmartLog.log('info', 'this should only be printed once');
});

tap.test('should be able to log things', async () => {
  testSmartLog.log('silly', 'hi');
});

tap.test('should create a log group', async () => {
  const logGroup = testSmartLog.createLogGroup('some cool transaction');
  logGroup.log('info', 'this is logged from a log group');
})

tap.start();
