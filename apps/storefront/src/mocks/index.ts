import { logger } from '@ring/logger';
import type { SetupWorkerApi } from 'msw';
import type { SetupServerApi } from 'msw/node';

if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const server: SetupServerApi = require('./server').server;
  server.listen();
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const worker: SetupWorkerApi = require('./browser').worker;
  // eslint-disable-next-line no-console
  worker.start().catch((error) => logger.error(error));
}

export {};
