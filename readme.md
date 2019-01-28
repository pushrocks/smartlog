# @pushrocks/smartlog
minimalistic distributed and extensible logging tool

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartlog)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartlog)
* [github.com (source mirror)](https://github.com/pushrocks/smartlog)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartlog/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartlog/badges/master/build.svg)](https://gitlab.com/pushrocks/smartlog/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartlog/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartlog/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartlog.svg)](https://www.npmjs.com/package/@pushrocks/smartlog)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartlog/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartlog)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

Use TypeScript for best in class instellisense.

smartlog id s minimal logging package that provides a consistent experience across the complete logging stack. Smartlog allows you to create a logger instance like this:

```ts
import { Smartlog } from '@pushrocks/smartlog';
const logger = new Smartlog({
  {
    company?: 'My awesome company',
    companyunit?: 'my awesome cloud team',
    containerName?: 'awesome-container',
    environment: TEnvironment: 'kubernetes-production',
    runtime: 'node',
    zone: 'zone x'
  }
})

logger.log('silly', `a silly statement`); // log levels are shown to you by the IDE
```

There is also a default logger available that you can use:

```ts
import { Smartlog, defaultLogger } from '@pushrocks/smartlog';

export class MyAwesomeClass {
  constructor(public logger: Smartlog = defaultLogger) {
    // what happens here that a instance of this class will have instance.logger available
    // if you set a custom logger, than that will be used, if not the default logger.
  }
}
```

### Destinations

smartlog supports different kinds of destinations.

The following destinations are available:

- [@pushrocks/smartlog-destination-local](https://www.npmjs.com/package/@pushrocks/smartlog-destination-local) - outputs logs to the local console in a colorful, nice to read way.
- [@pushrocks/smartlog-destination-devtools](https://www.npmjs.com/package/@pushrocks/smartlog-destination-devtools) - outputs logs into the browser console in a colorful, nice to read way.
- [@pushrocks/smartlog-destination-receiver](https://www.npmjs.com/package/@pushrocks/smartlog-destination-receiver) - sends logs to a smartlog receiver (more about that below)
- [@mojoio/scalyr](https://www.npmjs.com/package/@pushrocks/smartlog-destination-receiver) - an scalyr API package that comes with a smartlog log destination included
- [@mojoio/elasticsearch](https://www.npmjs.com/package/@mojoio/elasticsearch) - an elasticsearch API package that comes with a smartlog destination included

### Adding a log destination

```
// TBD
```

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
