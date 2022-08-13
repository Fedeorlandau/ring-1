import Pino from 'pino';

import { testLogger } from './testLogger';

const pinoLogger = Pino({
  // transport: {
  //   target: 'pino-pretty',
  // },
});

export const logger = process.env.NODE_ENV === 'test' ? testLogger : pinoLogger;
