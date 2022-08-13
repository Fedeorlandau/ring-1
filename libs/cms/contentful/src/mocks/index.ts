/* eslint-disable global-require */
import { logger } from '@ring/logger';

if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { server } = require('./server');
  server.listen();
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./browser');
  // eslint-disable-next-line no-console
  worker.start().catch((error: unknown) => logger.error(error));
}

export {};
