# @pushrocks/smartlog
minimalistic distributed and extensible logging tool

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartlog)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartlog)
* [github.com (source mirror)](https://github.com/pushrocks/smartlog)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartlog/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/pushrocks/smartlog/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/pushrocks/smartlog/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@pushrocks/smartlog)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/pushrocks/smartlog)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@pushrocks/smartlog)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@pushrocks/smartlog)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@pushrocks/smartlog)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

## Usage

Use TypeScript for best in class instellisense.

smartlog id s minimal logging package that provides a consistent experience across the complete logging stack. Smartlog allows you to create a logger instance like this:

```ts
import { Smartlog } from '@pushrocks/smartlog';
const logger = new Smartlog({
  {
    company: 'My awesome company',
    companyunit: 'my awesome cloud team',
    containerName: 'awesome-container',
    environment: 'kubernetes-production',
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

## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
